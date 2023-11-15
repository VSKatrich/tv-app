import { useEffect, useRef, useState } from "react";
import getFilms from "../api/api";
import FeaturedFilm from "../components/Home/FeaturedFilm";
import TrendingNow from "../components/Home/TrendingNow";
import style from "./Home.module.scss";

const Home = () => {
  const [featuredFilm, setFeaturedFilm] = useState(null);
  const [trendingNowFilms, setTrendingNowFilms] = useState([]);
  const [showVideo, setShowVideo] = useState(false);
  const videoRef = useRef(null);
  const timeout = useRef(null);

  const fetchFilms = async () => {
    const response = await getFilms();
    setFeaturedFilm(response.Featured);
    setTrendingNowFilms(response.TrendingNow);
  };

  useEffect(() => {
    fetchFilms();

    return () => {
      unsubscribe();
    };
  }, []);

  const onMovieClick = (movie) => {
    unsubscribe();
    setFeaturedFilm(movie);

    timeout.current = setTimeout(() => {
      setShowVideo(true);
      if (videoRef.current) {
        videoRef.current.play();
      }
    }, 2000);
  };

  const unsubscribe = () => {
    setShowVideo(false);
    if (timeout.current) {
      clearTimeout(timeout.current);
    }
    videoRef.current = null;
  };

  if (!featuredFilm) {
    return <div>Loading...</div>;
  }

  return (
    <div className={style.container}>
      <FeaturedFilm
        featuredFilm={featuredFilm}
        showVideo={showVideo}
        videoRef={videoRef}
      />
      <TrendingNow
        trendingNowFilms={trendingNowFilms}
        onMovieClick={onMovieClick}
      />
    </div>
  );
};

export default Home;