import { fetchNewsData } from "./features/stock/stockSlice";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import NewsDate from "./NewsDate";
import { SyncLoader } from "react-spinners";
import { useEffect } from "react";

const News = () => {
  const dispatch = useDispatch();
  const { newsData, loading, error } = useSelector((state) => state.stock);
  const currentDate = new Date();
  const currentTimeStamp = currentDate.getTime();

  useEffect(() => {
    dispatch(fetchNewsData());
  }, []);

  if (loading) {
    return (
      <SyncLoader cssOverride={{ margin: "2rem" }} size={15} color="grey" />
    );
  }

  if (error) {
    return <div>Error... {error}</div>;
  }

  const convertedToArray = [...newsData];
  convertedToArray.sort((a, b) => b.datetime - a.datetime);

  console.log(convertedToArray);

  return (
    <section className="news-grid">
      {convertedToArray.length !== 0 &&
        convertedToArray.map((article) => {
          const {
            id,
            category,
            datetime,
            headline,
            image,
            related,
            source,
            summary,
            url,
          } = article;

          const dateDifference = currentTimeStamp - datetime * 1000;

          const days = Math.floor(dateDifference / (1000 * 60 * 60 * 24));
          const hours = Math.floor(
            (dateDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          );
          const minutes = Math.floor(
            (dateDifference % (1000 * 60 * 60)) / (1000 * 60)
          );

          if (image) {
            return (
              <Link key={id} to={url} target="_blank">
                <div className="news-item">
                  <div className="news-top">
                    <img src={image} alt="image" className="news-img" />
                    <div className="news-title">{headline}</div>
                  </div>
                  <NewsDate days={days} hours={hours} minutes={minutes} />
                </div>
              </Link>
            );
          }
        })}
    </section>
  );
};
export default News;
