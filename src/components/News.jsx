import { fetchNewsData } from "./features/stock/stockSlice";
import { useSelector, useDispatch } from "react-redux";
import { SyncLoader } from "react-spinners";
import { useEffect } from "react";

const News = () => {
  const dispatch = useDispatch();
  const { newsData, loading, error } = useSelector((state) => state.stock);

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

  return (
    <section className="news-container">
      {newsData.length !== 0 &&
        newsData.feed.map((article, index) => {
          const {
            authors,
            banner_image,
            category_within_source,
            overall_sentiment_score,
            summary,
            time_published,
            url,
            title,
          } = article;

          return (
            <div key={index} className="news-item">
              <img src={banner_image} alt="image" className="news-img" />
              <div className="news-title">{title}</div>
              <div className="news-summary">{summary}</div>
            </div>
          );
        })}
    </section>
  );
};
export default News;
