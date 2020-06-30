import React from "react";
import { NavLink } from "react-router-dom";

import { appRoutes } from "../routes/AppRoutes";

const HeaderNav = () => {
  const {
    homePageRoute,
    intLinealPageRoute,
    IntCuadraticRoute,
    IntLagrangeFRoute,
    IntLagrangeSRoute,
  } = appRoutes;
  return (
    <nav>
      <NavLink to={homePageRoute + intLinealPageRoute}>Interpolación lineal</NavLink>
      <NavLink to={homePageRoute + IntCuadraticRoute}>Interpolación cuadratica</NavLink>
      <div className="dropdown">
        <p>Interpolacion de Lagrange</p>
        <div className="dropdown-container">
          <div className="dropdown-content">
            <NavLink to={homePageRoute + IntLagrangeFRoute}>Primer orden</NavLink>
            <NavLink to={homePageRoute + IntLagrangeSRoute}>Segundo orden</NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default HeaderNav;
