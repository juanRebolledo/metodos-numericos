import React, { Component } from "react";

import "../../styles/Interpolaciones/InterpolacionLineal.css";
import FormulaInterpolacionLineal from "./Utilities/InterpolacionLineal/FormulaInterpolacionLineal";
import Form from "./Utilities/Form";
import {
  InitialStateOfInterpolation,
  calculateLinearInterpolationEquation,
  linealInterpolationVariables
} from "./Utilities/Utilities";
import ContainerDesarrolloFormula from "./Utilities/ContainerDesarrolloFormula";

export default class InterpolacionLineal extends Component {
  constructor(props) {
    super(props);
    this.state = InitialStateOfInterpolation; // Se declara un State en el constructor de la Clase
  }

  // Se crea un metodo el cual recibe un valor booleano
  showHiddenInput = valueOfCheckbox => {
    this.setState({
      typeInputCheckboxFx: valueOfCheckbox,
      valoresEcuaciones: { ...this.state.valoresEcuaciones, fx: 0 }
    }); // Se actualiza el State con un valor booleano recibido como parametro en el metodo
  };

  // Metodo el cual recibe dos valores, el Name del input y el valor para posteriormente actualizar el State
  updateStateWithValuesOfEcuacion = (Name, Value) => {
    if (Value.length === 0) Value = 0; // Si se recibe un Value con una longitud de 0 (Vacio) se le asignara el valor numerico 0

    this.setState({
      valoresEcuaciones: {
        ...this.state.valoresEcuaciones, // Los valores que se tengan en el objeto se guardan para no ser sobreescritos por solamente el dato del input
        [Name]: parseFloat(Value) // Se actualiza exactamente el valor del estado proveniente del input. Al tener un name igual al valor del objeto, los datos actualiados se guardan en el dato correcto
      }
    });
  };

  // Metodo de la clase el cual permite que el contenido jsx se renderee cada vez que el State cambie
  render() {
    let { fx, fx_0, fx_1, x, x_0, x_1 } = this.state.valoresEcuaciones;
    let valorfxCalculado = calculateLinearInterpolationEquation(
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
          InterpolationVariables={linealInterpolationVariables}
          InterpolationTitle="Interpolación lineal"
          isExtrapolation= {valorfxCalculado.isExtrapolation}
        />
        <section className="container-show">
          <div className="container-showFormula">
            <div className="container-formulaInterpolacion">
              <h4>Formula Interpolación Lineal</h4>
              <FormulaInterpolacionLineal
                fx_0="f(x0)"
                fx_1="f(x1)"
                x_1="x1"
                x_0="x0"
                x="x"
                showDevelopment={false}
              />
            </div>
            {x_0 !== 0 || x_1 !== 0 ? (
              <ContainerDesarrolloFormula
                valorfxCalculado={valorfxCalculado.valorfxCalculado}
                typeInputCheckboxFx={this.state.typeInputCheckboxFx}
                fx={fx}
                key={valorfxCalculado.valorfxCalculado}
                ComponentFormule={() => (
                  <>
                    <FormulaInterpolacionLineal
                      fx_0={fx_0}
                      fx_1={fx_1}
                      x_1={x_1}
                      x_0={x_0}
                      x={x}
                      showDevelopment={false}
                    />
                    <FormulaInterpolacionLineal
                      fx_0={fx_0}
                      fx_1={fx_1}
                      x_1={x_1}
                      x_0={x_0}
                      x={x}
                      showDevelopment={true}
                    />
                  </>
                )}
              />
            ) : null}
          </div>
        </section>
      </>
    );
  }
}
