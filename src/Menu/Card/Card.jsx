export const Card = ({ title, text }) => (
  <div className="card">
    <div className="card-title">
      <h4>{title}</h4>
    </div>
    <h5>Overview</h5>
    <p>{text}</p>
    <div className="card__video">
      <img src="images/video.jpg" alt="" />
    </div>
    <div className="card__link">
      <a href="/">
        <i className="fa-solid fa-video" /> see quick book actions
      </a>
    </div>
  </div>
);
