import React from "react";

import Division from '..//Division'

const FormulaInterpolacionLineal = ({ fx_0, fx_1, x_0, x_1, x, showDevelopment }) => {
  return (
    <div className="container-formula">
      {showDevelopment ? (
        <>
          <p>f(x) = {`${fx_0}+`}</p>
          <div className="showDivition">
            <Division 
              Numerador = { () => <p>{` ${fx_1 - fx_0} `}</p> }
              Denominador = { () => <p>{`${x_1 - x_0}`}</p> }
            />
          </div>
          <p>{`(${x - x_0})`}</p>
        </>
      ) : (
        <>
          <p>f(x) = {`${fx_0}+`}</p>
          <div className="showDivition">
            <Division 
              Numerador = { () => <p>{` ${fx_1} - ${fx_0} `}</p> }
              Denominador = { () => <p>{`${x_1} - ${x_0}`}</p> }
            />
          </div>
          <p>{`(${x} - ${x_0})`}</p>
        </>
      )}
    </div>
  );
};

export default FormulaInterpolacionLineal;
