import React from "react";

import ContainerDesarrolloFormula from "../ContainerDesarrolloFormula";

const Order = ({
  FormulaInterpolacionLagrangeStatic,
  H4Title,
  FormulaInterpolacionLagrangeDynamic,
  x_0,
  x_1,
  valorfxCalculado,
  typeInputCheckboxFx,
  fx
}) => {
  return (
    <div className="container-showFormula">
      <div className="container-formulaInterpolacion">
        <h4>{H4Title}</h4>
        <FormulaInterpolacionLagrangeStatic />
      </div>
      {x_0 !== 0 || x_1 !== 0 ? (
        <ContainerDesarrolloFormula
          valorfxCalculado={valorfxCalculado}
          typeInputCheckboxFx={typeInputCheckboxFx}
          fx={fx}
          key={valorfxCalculado}
          ComponentFormule={() => <FormulaInterpolacionLagrangeDynamic />}
        />
      ) : null}
    </div>
  );
};

export default Order;
