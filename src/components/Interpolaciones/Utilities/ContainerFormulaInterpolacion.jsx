import React from "react";

const ContainerFormulaInterpolacion = ({ H4Title, PResult, Error = false }) => {
  return (
    <div className="container-formulaInterpolacion">
      <h4>{H4Title}</h4>
      {Error ? <p style={{ color: "green" }}>{PResult.substr(0, 20)}</p> : <p>{PResult.substr(0, 20)}</p>}
    </div>
  );
};

export default ContainerFormulaInterpolacion;
