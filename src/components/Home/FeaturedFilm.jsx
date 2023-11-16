import style from "./Home.module.scss";

const FeaturedFilm = ({ featuredFilm, showVideo, videoRef }) => {
  const image = require(`../../assets/${featuredFilm.CoverImage}`);
  const titleImage = require(`../../assets/${featuredFilm.TitleImage}`);

  const durationInHours = Math.floor(featuredFilm.Duration / 3600);
  const durationInMinutes = Math.floor((featuredFilm.Duration % 3600) / 60);
  const duration =
    durationInHours < 1
      ? `${durationInMinutes}min`
      : `${durationInHours}h ${durationInMinutes}min`;

  return (
    <div className={style.featuredContainer}>
      <div className={style.shadow}></div>
      {showVideo ? (
        <video
          ref={videoRef}
          className={style.banner}
          src={featuredFilm.VideoUrl}
          autoPlay
          muted
          loop
        />
      ) : (
        <img className={style.banner} src={image} alt={featuredFilm.title} />
      )}

      <div className={style.caption}>
        <p className={style.category}>{featuredFilm.Category}</p>
        <img src={titleImage} alt={featuredFilm.TitleImage} />
        <p>
          {featuredFilm.ReleaseYear} {featuredFilm.MpaRating} {duration}
        </p>
        <p>{featuredFilm.Description}</p>

        <div className={style.buttonsContainer}>
          <button className="primary-btn">Play</button>
          <button className="secondary-btn">More Info</button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedFilm;
