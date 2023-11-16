import style from "./Navbar.module.scss";
import { NavLink } from "react-router-dom";
import searchIcon from "../../assets/icons/ICON - Search.png";
import homeIcon from "../../assets/icons/Group 46.png";
import watchLater from "../../assets/icons/Group 47.png";
import genresIcon from "../../assets/icons/Group 53.png";
import movesIcon from "../../assets/icons/Group 54.png";
import tvShowsIcon from "../../assets/icons/Group 56.png";
import user from "../../assets/user.png";

const Navbar = () => {
  const selected = ({ isActive }) =>
    isActive ? style.menuItemActive : style.menuItem;

  return (
    <div className={style.container}>
      <div className={style.profileInfo}>
        <img src={user} alt="name" />
        <p>Daniel</p>
      </div>
      <div className={style.menu}>
        <NavLink to="search" className={selected}>
          <img src={searchIcon} alt="search" />
          <p>Search</p>
        </NavLink>
        <NavLink to="home" className={selected}>
          <img src={homeIcon} alt="plus" />
          <p>Home</p>
        </NavLink>
        <NavLink to="tv-shows" className={selected}>
          <img src={tvShowsIcon} alt="tv-shows" />
          <p>TV Shows</p>
        </NavLink>
        <NavLink to="moves" className={selected}>
          <img src={movesIcon} alt="moves" />
          <p>Moves</p>
        </NavLink>
        <NavLink to="genres" className={selected}>
          <img src={genresIcon} alt="genres" />
          <p>Genres</p>
        </NavLink>
        <NavLink to="watch-later" className={selected}>
          <img src={watchLater} alt="watchLater" />
          <p>Watch Later</p>
        </NavLink>
      </div>

      <div className={style.bottomMenu}>
        <p>language</p>
        <p>get help</p>
        <p>exit</p>
      </div>
    </div>
  );
};

export default Navbar;
