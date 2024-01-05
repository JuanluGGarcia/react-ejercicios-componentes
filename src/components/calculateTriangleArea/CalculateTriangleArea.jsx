// - Crea un componente llamado calculateTriangleArea que calcule el área de un triángulo pasándole la base y la altura y devuelva un h2 con el resultado.

const CalculateTriangleArea = ({ base, height }) => {
    return <h2>El área del triángulo es: {base * height}</h2>
};

export default CalculateTriangleArea;