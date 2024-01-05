// - Crea un componente totalPrice que reciba un precio, le sume el IVA del 21% y devuelva un h2 con el resultado.

const TotalPrice = ({ price }) => {
	const iva = 21 / 100 + 1;
	return (
		<h2>
			El importe de {price} más el IVA del 21% es {price * iva}
		</h2>
	);
};

export default TotalPrice;
