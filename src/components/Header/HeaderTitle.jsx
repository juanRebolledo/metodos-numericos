import React from "react";
import { NavLink } from "react-router-dom";

import {appRoutes} from '../routes/AppRoutes'

const HeaderTitle = () => {
  const {homePageRoute} = appRoutes
  return (
    <div className="container-headerTitle">
      <NavLink to={homePageRoute}>
        <h1>Calculadora Interpolaciones</h1>
      </NavLink>
    </div>
  );
};

export default HeaderTitle;
