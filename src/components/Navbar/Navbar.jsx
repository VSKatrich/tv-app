import { NavLink } from "react-router-dom";

import style from "./Navbar.module.scss";
import searchIcon from "../../assets/icons/ICON - Search.png";
import homeIcon from "../../assets/icons/Group 46.png";
import watchLater from "../../assets/icons/Group 47.png";
import genresIcon from "../../assets/icons/Group 53.png";
import movesIcon from "../../assets/icons/Group 54.png";
import tvShowsIcon from "../../assets/icons/Group 56.png";
import user from "../../assets/user.png";

const navLinks = [
  { to: "search", icon: searchIcon, label: "Search" },
  { to: "home", icon: homeIcon, label: "Home" },
  { to: "tv-shows", icon: tvShowsIcon, label: "TV Shows" },
  { to: "moves", icon: movesIcon, label: "Moves" },
  { to: "genres", icon: genresIcon, label: "Genres" },
  { to: "watch-later", icon: watchLater, label: "Watch Later" },
];

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
        {navLinks.map((link) => (
          <NavLink key={link.to} to={link.to} className={selected}>
            <img src={link.icon} alt={link.label} />
            <p>{link.label}</p>
          </NavLink>
        ))}
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
