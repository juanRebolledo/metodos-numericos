import React from "react";

import Division from '../Division'
const FormulaInterpolacionLagrangeSecondOrder = ({
    fx_0, fx_1, fx_2, x_0, x_1, x_2, x
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
      <p>*</p>
      <div className="showDivition">
        <Division
          Numerador={() => <p>{` ${x} - ${x_2} `}</p>}
          Denominador={() => <p>{`${x_0} - ${x_2}`}</p>}
        />
      </div>
      <p>({fx_0}) +</p>
      <div className="showDivition">
        <Division
          Numerador={() => <p>{` ${x} - ${x_0} `}</p>}
          Denominador={() => <p>{`${x_1} - ${x_0}`}</p>}
        />
      </div>
      <p>*</p>
      <div className="showDivition">
        <Division
          Numerador={() => <p>{` ${x} - ${x_2} `}</p>}
          Denominador={() => <p>{`${x_1} - ${x_2}`}</p>}
        />
      </div>
      <p>({fx_1}) + </p>
      <div className="showDivition">
        <Division
          Numerador={() => <p>{` ${x} - ${x_0} `}</p>}
          Denominador={() => <p>{`${x_2} - ${x_0}`}</p>}
        />
      </div>
      <p>*</p>
      <div className="showDivition">
        <Division
          Numerador={() => <p>{` ${x} - ${x_1} `}</p>}
          Denominador={() => <p>{`${x_2} - ${x_1}`}</p>}
        />
      </div>
      <p>({fx_2})</p>
    </div>
  );
};

export default FormulaInterpolacionLagrangeSecondOrder;
