// - Crea un componente llamado celsiusToFahrenheit que reciba un número de grados celsius, los convierta a fahrenheit y devuelva un h2 con el resultado. La formula es ºF = ºC x 1.8 + 32.

const CelsiusToFahrenheit = ({ degrees }) => {
    return <h2>{degrees} grados son {degrees * 1.8 + 32} grados fahrenheit</h2>
};

export default CelsiusToFahrenheit;