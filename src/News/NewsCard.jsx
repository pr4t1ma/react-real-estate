export const NewsCard = ({ title, date, image }) => (
  <a className="flex hover:bg-pink-700 p-2" href="/">
    <div className="news-card-image mr-2 ">
      <img className="w-20" src={image} alt="" />
    </div>
    <div className="news-card-text flex-1">
      <p>{title}</p>
      <div className="news-card-date text-xs text-gray-200">{date}</div>
    </div>
    <div className="news-card-comment">
      <i className="fa-solid fa-comment" />
    </div>
  </a>
);
