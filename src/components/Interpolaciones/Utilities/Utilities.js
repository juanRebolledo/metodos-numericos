export const InitialStateOfInterpolation = {
  typeInputCheckboxFx: false, // Este valor servira para verificar si el checkbox tiene un valor true o false
  valoresEcuaciones: {  // Este objeto contendra todos los valores de la ecuacion para poder ser ejecutados en tiempo real
    fx: 0,
    x: 0,
    fx_0: 0,
    fx_1: 0,
    x_0: 0,
    x_1: 0
  },
  fxCalculado: 0  // Este valor sera el resultado de la ecuacion
}

export const containerFormuleMinusOnDivition = (f1, f2, x1, x2) => {
  return (f1 - f2) / (x1 - x2);
};

export const calculateRelativeError = (fx, valorfxCalculado) => {
  return `Error = ${Math.abs((fx - valorfxCalculado) / fx) * 100}%`
}

export const calculateLinearInterpolationEquation = (fx_0, fx_1, x_0, x_1, x) => {
  return {valorfxCalculado: fx_0 + (containerFormuleMinusOnDivition(fx_1, fx_0, x_1, x_0) * (x - x_0)), isExtrapolation: calculateExtrapolationTwoValues(x, x_0, x_1)}
}

export const calculateQuadratictInterpolationEquation = (fx_0, fx_1, fx_2, x_0, x_1, x_2, x) => {
  let b1 = containerFormuleMinusOnDivition(fx_1, fx_0, x_1, x_0);
  let b2 = containerFormuleMinusOnDivition(
    containerFormuleMinusOnDivition(fx_2, fx_1, x_2, x_1),
    b1,
    x_2,
    x_0
  );
  return {valorfxCalculado: fx_0 + b1 * (x - x_0) + b2 * (x - x_0) * (x - x_1), isExtrapolation: calculateExtrapolationTreeValues(x, x_0, x_1, x_2)}; // Conforme los valores del State cambien, la variable de bloque valorfxCalculado se ira modificando
}

export const calculateLagrangeFirstOrderInterpolationEquation = (fx_0, fx_1, x_0, x_1, x) => {
  let lo = containerFormuleMinusOnDivition(x, x_1, x_0, x_1)
  let li = containerFormuleMinusOnDivition(x, x_0, x_1, x_0)
  return {valorfxCalculado: (lo * fx_0) + (li * fx_1), isExtrapolation: calculateExtrapolationTwoValues(x, x_0, x_1)}
}

export const calculateLagrangeSecondOrderInterpolationEquation = (fx_0, fx_1, fx_2, x_0, x_1, x_2, x) => {
  let lo = containerFormuleMinusOnDivition(x, x_1, x_0, x_1) * containerFormuleMinusOnDivition(x, x_2, x_0, x_2)
  let li = containerFormuleMinusOnDivition(x, x_0, x_1, x_0) * containerFormuleMinusOnDivition(x, x_2, x_1, x_2)
  let l2 = containerFormuleMinusOnDivition(x, x_0, x_2, x_0) * containerFormuleMinusOnDivition(x, x_1, x_2, x_1)
  return {valorfxCalculado: (lo * fx_0) + (li * fx_1) + (l2 * fx_2), isExtrapolation: calculateExtrapolationTreeValues(x, x_0, x_1, x_2,)}
}

export const calculateExtrapolationTwoValues = (x, x1, x2) => { // Funcion que devuelve true si no es una extrapolacion
  return !(Math.min(x1, x2) <= x && x <= Math.max(x1, x2));
}

export const calculateExtrapolationTreeValues = (x, x1, x2, x3) => {
  return !(Math.min(x1, x2, x3) <= x && x <= Math.max(x1, x2, x3)) 
}

export const linealInterpolationVariables = [{
  variable: 'x_0',
  placeholder: 'x0'
},
{
  variable: 'x_1',
  placeholder: 'x1'
},
{
  variable: 'fx_0',
  placeholder: 'f(x0)'
},
{
  variable: 'fx_1',
  placeholder: 'f(x1)'
},
{
  variable: 'x',
  placeholder: 'x'
}]

export const quadraticInterpolationVariables = [{
  variable: 'x_0',
  placeholder: 'x0'
},
{
  variable: 'x_1',
  placeholder: 'x1'
},
{
  variable: 'x_2',
  placeholder: 'x2'
},
{
  variable: 'fx_0',
  placeholder: 'f(x0)'
},
{
  variable: 'fx_1',
  placeholder: 'f(x1)'
},
{
  variable: 'fx_2',
  placeholder: 'f(x2)'
},
{
  variable: 'x',
  placeholder: 'x'
}]

export const lagrangeFirstOrderInterpolationVariables = [
  {
    variable: 'x_0',
    placeholder: 'x0'
  },
  {
    variable: 'x_1',
    placeholder: 'x1'
  },
  {
    variable: 'fx_0',
    placeholder: 'f(x0)'
  },
  {
    variable: 'fx_1',
    placeholder: 'f(x1)'
  },
  {
    variable: 'x',
    placeholder: 'x'
  }] 

export const lagrangeSecondOrderInterpolationVariables = [{
  variable: 'x_0',
  placeholder: 'x0'
},
{
  variable: 'x_1',
  placeholder: 'x1'
},
{
  variable: 'x_2',
  placeholder: 'x2'
},
{
  variable: 'fx_0',
  placeholder: 'f(x0)'
},
{
  variable: 'fx_1',
  placeholder: 'f(x1)'
},
{
  variable: 'fx_2',
  placeholder: 'f(x2)'
},
{
  variable: 'x',
  placeholder: 'x'
}]
