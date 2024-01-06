const NewsDate = ({ days, hours, minutes }) => {
  if (days > 0) {
    return <div className="news-date">{`${days}d`}</div>;
  }

  if (hours > 0) {
    return <div className="news-date">{`${hours}h`}</div>;
  }

  return <div className="news-date">{`${minutes}m`}</div>;
};
export default NewsDate;
