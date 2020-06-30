import React, { Component } from "react";

import "../../styles/Interpolaciones/InterpolacionLineal.css";
import Form from "./Utilities/Form";
import {
  InitialStateOfInterpolation,
  lagrangeSecondOrderInterpolationVariables,
  calculateLagrangeSecondOrderInterpolationEquation,
} from "./Utilities/Utilities";
import FormulaInterpolacionLagrangeSecondOrder from "./Utilities/InterpolacionLagrange/FormulaInterpolacionLagrangeSecondOrder";
import ContainerDesarrolloFormula from "./Utilities/ContainerDesarrolloFormula";

export default class InterpolacionLagrangeSOrder extends Component {
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

  // Se crea un metodo el cual recibe un valor booleano
  showHiddenInput = (valueOfCheckbox) => {
    this.setState({
      typeInputCheckboxFx: valueOfCheckbox,
      valoresEcuaciones: { ...this.state.valoresEcuaciones, fx: 0 },
    }); // Se actualiza el State con un valor booleano recibido como parametro en el metodo
  };

  // Metodo el cual recibe dos valores, el Name del input y el valor para posteriormente actualizar el State
  updateStateWithValuesOfEcuacion = (Name, Value) => {
    if (Value.length === 0) Value = 0; // Si se recibe un Value con una longitud de 0 (Vacio) se le asignara el valor numerico 0

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
      fx_2,
      x_0,
      x_1,
      x_2,
    } = this.state.valoresEcuaciones;
    let valorfxCalculado = calculateLagrangeSecondOrderInterpolationEquation(
      fx_0,
      fx_1,
      fx_2,
      x_0,
      x_1,
      x_2,
      x
    );

    return (
      <>
        <Form
          updateStateWithValuesOfEcuacion={this.updateStateWithValuesOfEcuacion}
          typeInputCheckboxFx={this.state.typeInputCheckboxFx}
          showHiddenInput={this.showHiddenInput}
          InterpolationVariables={lagrangeSecondOrderInterpolationVariables}
          InterpolationTitle="Interpolación Lagrange segundo orden"
          isExtrapolation={valorfxCalculado.isExtrapolation}
        />
        <section className="container-show">
          <div className="container-showFormula">
            <div className="container-formulaInterpolacion">
              <h4>Formula interpolacion lagrange de segundo orden</h4>
              <FormulaInterpolacionLagrangeSecondOrder
                fx_0="f(x0)"
                fx_1="f(x1)"
                fx_2="f(x2)"
                x_0="x0"
                x_1="x1"
                x_2="x2"
                x="x"
              />{" "}
            </div>
            {x_0 !== 0 || x_1 !== 0 ? (
              <ContainerDesarrolloFormula
                valorfxCalculado={valorfxCalculado}
                typeInputCheckboxFx={this.state.typeInputCheckboxFx}
                fx={fx}
                key={valorfxCalculado}
                ComponentFormule={() => (
                  <FormulaInterpolacionLagrangeSecondOrder
                    fx_0={fx_0}
                    fx_1={fx_1}
                    fx_2={fx_2}
                    x_0={x_0}
                    x_1={x_1}
                    x_2={x_2}
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
