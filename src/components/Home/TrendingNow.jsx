import { useRef } from "react";

import useDraggingScroll from "../../hooks/useDraggingScroll";

import style from "./Home.module.scss";

const TrendingNow = ({ trendingNowFilms, onMovieClick }) => {
  const containerRef = useRef(null);
  const { handleMouseDown, handleMouseUp, wasScrolling } =
    useDraggingScroll(containerRef);

  const fetchImage = (name) => (name ? require(`../../assets/${name}`) : "");

  const handleMovieClick = (movie) => {
    if (!wasScrolling) {
      onMovieClick(movie);
    }
  };

  return (
    <div className={style.trendingContainer}>
      <h3>Trending Now</h3>

      <div
        ref={containerRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseUp}
        onMouseUp={handleMouseUp}
        className={style.filmsList}
      >
        {trendingNowFilms.map((film) => (
          <div
            key={film.Id}
            onClick={() => handleMovieClick(film)}
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
