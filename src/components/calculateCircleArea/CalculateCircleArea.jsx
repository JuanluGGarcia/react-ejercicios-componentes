// - Crea un componente llamado calculateCircleArea que calcule el área de un círculo pasándole el radio y devuelva un h2 con el resultado.

const CalculateCircleArea = ({ radius}) => {
    const PI = 3.14;
    return <h2>El área del círculo es {PI * Math.pow(radius, 2)}</h2>
};

export default CalculateCircleArea;