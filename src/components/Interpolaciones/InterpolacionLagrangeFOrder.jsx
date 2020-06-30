import React, { Component } from "react";

import "../../styles/Interpolaciones/InterpolacionLineal.css";
import Form from "./Utilities/Form";
import {
  InitialStateOfInterpolation,
  lagrangeFirstOrderInterpolationVariables,
  calculateLagrangeFirstOrderInterpolationEquation,
} from "./Utilities/Utilities";
import FormulaInterpolacionLagrangeFirstOrder from "./Utilities/InterpolacionLagrange/FormulaIntFO";
import ContainerDesarrolloFormula from "./Utilities/ContainerDesarrolloFormula";

export default class InterpolacionLagrangeFOrder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...InitialStateOfInterpolation,
      valoresEcuaciones: {
        ...InitialStateOfInterpolation.valoresEcuaciones,
        fx_2: 0,
        x_2: 0,
      },
    };
  }

  showHiddenInput = (valueOfCheckbox) => {
    this.setState({
      typeInputCheckboxFx: valueOfCheckbox,
      valoresEcuaciones: { ...this.state.valoresEcuaciones, fx: 0 },
    }); 
  };

  updateStateWithValuesOfEcuacion = (Name, Value) => {
    if (Value.length === 0) Value = 0; 
    
    this.setState({
      valoresEcuaciones: {
        ...this.state.valoresEcuaciones,
        [Name]: parseFloat(Value),
      },
    });
  };

  render() {
    let {
      fx,
      x,
      fx_0,
      fx_1,
      x_0,
      x_1,
    } = this.state.valoresEcuaciones;
    let valorfxCalculado = calculateLagrangeFirstOrderInterpolationEquation(
      fx_0,
      fx_1,
      x_0,
      x_1,
      x
    );

    return (
      <>
        <Form
          updateStateWithValuesOfEcuacion={this.updateStateWithValuesOfEcuacion}
          typeInputCheckboxFx={this.state.typeInputCheckboxFx}
          showHiddenInput={this.showHiddenInput}
          InterpolationVariables={lagrangeFirstOrderInterpolationVariables}
          InterpolationTitle="Interpolación Lagrange primer orden"
          isExtrapolation={valorfxCalculado.isExtrapolation}
        />
        <section className="container-show">
          <div className="container-showFormula">
            <div className="container-formulaInterpolacion">
              <h4>Formula Lagrange Primer Orden</h4>
              <FormulaInterpolacionLagrangeFirstOrder
                fx_0="f(x0)"
                fx_1="f(x1)"
                x_0="x0"
                x_1="x1"
                x="x"
              />
            </div>
            {x_0 !== 0 || x_1 !== 0 ? (
              <ContainerDesarrolloFormula
                valorfxCalculado={valorfxCalculado}
                typeInputCheckboxFx={this.state.typeInputCheckboxFx}
                fx={fx}
                key={valorfxCalculado}
                ComponentFormule={() => (
                  <FormulaInterpolacionLagrangeFirstOrder
                    fx_0={fx_0}
                    fx_1={fx_1}
                    x_0={x_0}
                    x_1={x_1}
                    x={x}
                  />
                )}
              />
            ) : null}
          </div>
        </section>
      </>
    );
  }
}
