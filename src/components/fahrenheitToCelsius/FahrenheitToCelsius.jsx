// - Crea el componente inverso llamado fahrenheitToCelsius y devuelva un h2 con el resultado. ºC = (ºF - 32) / 1,8.

const FahrenheitToCelsius = ({ degrees }) => {
    return <h2>{degrees} grados fahrenheit son {(degrees - 32) / 1.8} grados centigrados</h2>
};

export default FahrenheitToCelsius;