import style from "./Home.module.scss";

const TrendingNow = ({ trendingNowFilms, onMovieClick }) => {
  const fetchImage = (name) => require(`../../assets/${name}`);

  return (
    <div className={style.trendingContainer}>
      <h3>Trending Now</h3>

      <div className={style.filmsList}>
        {trendingNowFilms.map((film) => (
          <div
            key={film.Id}
            onClick={() => onMovieClick(film)}
            className={style.film}
          >
            <img src={fetchImage(film.CoverImage)} alt="poster" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingNow;
