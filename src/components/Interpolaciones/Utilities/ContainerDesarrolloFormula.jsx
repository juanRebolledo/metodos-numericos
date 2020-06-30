import React from "react";

import ContainerResults from "./ContainerResults";

const ContainerDesarrolloFormula = ({
  ComponentFormule,
  valorfxCalculado,
  typeInputCheckboxFx,
  fx
}) => {  
  return (
    <>
      <div className="container-formulaInterpolacion">
        <h4>Desarrollo</h4>
        <div className="container-desarrolloFormula">
          <ComponentFormule />
        </div>
      </div>
      {valorfxCalculado.valorfxCalculado || valorfxCalculado.valorfxCalculado === 0 ? (
        <ContainerResults
          valorfxCalculado={valorfxCalculado.valorfxCalculado}
          typeInputCheckboxFx={typeInputCheckboxFx}
          fx={fx}
          key={valorfxCalculado}
        />
      ) : null}
    </>
  );
};

export default ContainerDesarrolloFormula;
