import React from "react";



const FormGroup = ({textLabel, name, placeholder, updateStateWithValuesOfEcuacion}) => {
  return (
    <div className="form-group">
      <label>{textLabel}</label>
      <input 
        type="number" 
        name = {name}
        placeholder={placeholder} 
        onChange={ Input => {
          updateStateWithValuesOfEcuacion( Input.target.name, Input.target.value )
        } }
      />
    </div>
  );
};

export default FormGroup;
