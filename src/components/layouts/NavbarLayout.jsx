import { Outlet } from "react-router";

import Navbar from "../Navbar/Navbar";

import style from "./NavbarLayout.module.scss";

const NavbarLayout = () => (
  <div className={style.container}>
    <Navbar />
    <div className={style.outletContainer}>
      <Outlet />
    </div>
  </div>
);

export default NavbarLayout;
