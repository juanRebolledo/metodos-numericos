import React from "react";

import Division from "../Division";

const FromulaInterpolacionLagrangeFirstOrder = ({
  fx_0,
  fx_1,
  x_0,
  x_1,
  x
}) => {
  return (
    <div className="container-formula">
      <p>f(x) = </p>
      <div className="showDivition">
        <Division
          Numerador={() => <p>{` ${x} - ${x_1} `}</p>}
          Denominador={() => <p>{`${x_0} - ${x_1}`}</p>}
        />
      </div>
      <p>({fx_0}) +</p>
      <div className="showDivition">
        <Division
          Numerador={() => <p>{` ${x} - ${x_0} `}</p>}
          Denominador={() => <p>{`${x_1} - ${x_0}`}</p>}
        />
      </div>
      <p>({fx_1})</p>
    </div>
  );
};

export default FromulaInterpolacionLagrangeFirstOrder;
