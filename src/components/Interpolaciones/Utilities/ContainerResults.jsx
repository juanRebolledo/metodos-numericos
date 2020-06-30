import React from "react";

import { calculateRelativeError } from './Utilities'
import ContainerFormulaInterpolacion from "./ContainerFormulaInterpolacion";

const ContainerResults = ({ valorfxCalculado, typeInputCheckboxFx, fx }) => {
  let resultFx = `f(x) = ${valorfxCalculado}`;
  return (
    <div className="container-resultados">
      <ContainerFormulaInterpolacion
        key={valorfxCalculado}
        H4Title="Resultado"
        PResult={resultFx}
      />
      {typeInputCheckboxFx ? (
        <ContainerFormulaInterpolacion 
          key = { calculateRelativeError(fx, valorfxCalculado) }
          H4Title = "Error relativo"
          PResult = {calculateRelativeError(fx, valorfxCalculado)}
          Error = {true}
        />
      ) : null}
    </div>
  );
};

export default ContainerResults;
