import React from "react";
import FormGroup from "./FormGroup";

const Form = ({
  InterpolationTitle,
  InterpolationVariables,
  updateStateWithValuesOfEcuacion,
  typeInputCheckboxFx,
  showHiddenInput,
  isExtrapolation,
}) => {
  return (
    <section className="container-ecuaciones">
      <div className="container-intlineal">
        <div className="container-title">
          <h3>{InterpolationTitle}</h3>
        </div>
        <div className="container-form">
          {InterpolationVariables.map(({ variable, placeholder }) => (
            <FormGroup
              key={variable}
              name={variable}
              updateStateWithValuesOfEcuacion={updateStateWithValuesOfEcuacion}
              textLabel={`Ingrese el valor de ${placeholder}`}
              placeholder={placeholder}
            />
          ))}
          {typeInputCheckboxFx ? (
            <FormGroup
              name="fx"
              updateStateWithValuesOfEcuacion={updateStateWithValuesOfEcuacion}
              textLabel="Valor exacto f(x)"
              placeholder="Valor exacto f(x)"
            />
          ) : null}
        </div>
        <div className="container-button">
          <div className="container-checkInput">
            <input
              type="checkbox"
              onChange={(inputCheckbox) =>
                showHiddenInput(inputCheckbox.target.checked)
              }
            />
            <label>¿Tienes un valor exacto para f(x)?</label>
          </div>
          <label>
            {isExtrapolation
              ? "Los datos ingresados dan como resultado una extrapolación"
              : ""}
          </label>
        </div>
      </div>
    </section>
  );
};

export default Form;
