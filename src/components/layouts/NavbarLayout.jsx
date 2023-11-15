import { Outlet } from "react-router";
import style from "./NavbarLayout.module.scss";
import Navbar from "../Navbar/Navbar";

const NavbarLayout = () => {
  return (
    <div className={style.container}>
      <Navbar />
      <div className={style.outletContainer}>
        <Outlet />
      </div>
    </div>
  );
};

export default NavbarLayout;
