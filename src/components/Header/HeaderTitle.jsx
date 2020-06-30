import React from "react";
import { NavLink } from "react-router-dom";

const HeaderTitle = () => {
  return (
    <div className="container-headerTitle">
      <NavLink to="/metodosnumericosInterpolaciones/">
        <h1>Calculadora Interpolaciones</h1>
      </NavLink>
    </div>
  );
};

export default HeaderTitle;
