import React from "react";

import Division from "../Division";

const FormulaInterpolacionCuadratica = ({
  fx_1,
  fx_2,
  fx_0,
  x,
  x_1,
  x_2,
  x_0
}) => {
  return (
    <div className="container-formula">
      <p>f(x)= {fx_0} +</p>
      {/* B1 */}
      <Division
        Numerador={() => <p>{`${fx_1} - ${fx_0}`}</p>}
        Denominador={() => <p>{`${x_1} - ${x_0}`}</p>}
      />
      <p>({x} - {x_0}) +</p>
      {/* B2 */}
      <Division
        Numerador={() => (
          <>
            <div className="divition-lagrange">
              <Division
                Numerador={() => <p>{`${fx_2} - ${fx_1}`}</p>}
                Denominador={() => <p>{`${x_2}  - ${x_1}`}</p>}
              />
              -
              <Division
                Numerador={() => <p>{`${fx_1} - ${fx_0}`}</p>}
                Denominador={() => <p>{`${x_1} - ${x_0}`}</p>}
              />
            </div>
          </>
        )}
        Denominador={() => <p>{`${x_2} - ${x_0}`}</p>}
      />
      <p>{`(${x} - ${x_0})(${x} - ${x_1})`}</p>
    </div>
  );
};

export default FormulaInterpolacionCuadratica;
