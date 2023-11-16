import { useEffect, useRef, useState } from "react";

import style from "./Home.module.scss";

const TrendingNow = ({ trendingNowFilms, onMovieClick }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const adBannersRef = useRef(null);

  const fetchImage = (name) => (name ? require(`../../assets/${name}`) : "");

  const handleMouseDown = (e) => {
    if (adBannersRef.current) {
      setIsDragging(true);
      setStartX(e.clientX - adBannersRef.current.offsetLeft);
      setScrollLeft(adBannersRef.current.scrollLeft);
    }
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    e.stopPropagation();
    if (adBannersRef.current) {
      const x = e.clientX - adBannersRef.current.offsetLeft;
      const walk = (x - startX) * 1; // adjust scrolling speed
      adBannersRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMovieClick = (e, movie) => {
    const endX = e.clientX - adBannersRef.current.offsetLeft;

    if (startX === endX) {
      onMovieClick(movie);
    }
  };

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isDragging]);

  return (
    <div className={style.trendingContainer}>
      <h3>Trending Now</h3>

      <div
        ref={adBannersRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseUp}
        onMouseUp={handleMouseUp}
        className={style.filmsList}
      >
        {trendingNowFilms.map((film) => (
          <div
            key={film.Id}
            onClick={(e) => handleMovieClick(e, film)}
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
