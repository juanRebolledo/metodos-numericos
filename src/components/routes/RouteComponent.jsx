import React from "react";
import { Switch, Route } from 'react-router-dom'  

import HomePage from '../Home/HomePage'; 
import InterpolacionLineal from "../Interpolaciones/InterpolacionLineal";
import InterpolacionCuadratica from "../Interpolaciones/InterpolacionCuadratica"; 
import InterpolacionLagrangeFOrder from "../Interpolaciones/InterpolacionLagrangeFOrder";
import InterpolacionLagrangeSOrder from "../Interpolaciones/InterpolacionLagrangeSOrder";
import Component404 from "../404/Component404";
import { appRoutes } from './AppRoutes'

const RouteComponent = () => {
  const {homePageRoute, intLinealPageRoute, IntCuadraticRoute, IntLagrangeFRoute, IntLagrangeSRoute} = appRoutes
  return (
    <Switch> 
      <Route exact path={homePageRoute}> 
        <HomePage />
      </Route>
      <Route path={homePageRoute+intLinealPageRoute}>
        <InterpolacionLineal />
      </Route>
      <Route path={homePageRoute+IntCuadraticRoute}>
          <InterpolacionCuadratica />
      </Route>
      <Route path={homePageRoute+IntLagrangeFRoute}>
          <InterpolacionLagrangeFOrder />
      </Route>
      <Route path={homePageRoute+IntLagrangeSRoute}>
          <InterpolacionLagrangeSOrder />
      </Route>
      <Route>
        <Component404 />
      </Route>
    </Switch>
  );
};

export default RouteComponent;
