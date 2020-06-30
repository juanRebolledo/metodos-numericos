import React from "react";

const Division = ({ Numerador, Denominador }) => {
  return (
    <>
      <div className="showDivition">
        <Numerador />
        <div className="separator" />
        <Denominador />
      </div>
    </>
  );
};

export default Division;
