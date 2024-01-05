import CalculateCircleArea from "./components/calculateCircleArea/CalculateCircleArea";
import CalculateSquareArea from "./components/calculateSquareArea/CalculateSquareArea";
import CalculateTriangleArea from "./components/calculateTriangleArea/CalculateTriangleArea";
import CelsiusToFahrenheit from "./components/celsiusToFahrenheit/CelsiusToFahrenheit";
import FahrenheitToCelsius from "./components/fahrenheitToCelsius/FahrenheitToCelsius";
import SayHello from "./components/sayHello/SayHello";
import TotalPrice from "./components/totalPrice/TotalPrice";
import WriteMessage from "./components/writeMessage/WriteMessage";

const App = () => {
	return (
		<>
			<SayHello nombre='Juanlu' />
			<CalculateSquareArea side={4} />
			<CalculateTriangleArea base={2} height={4} />
			<CalculateCircleArea radius={2} />
			<CelsiusToFahrenheit degrees={10} />
			<FahrenheitToCelsius degrees={50} />
			<TotalPrice price={100} />
			<WriteMessage name='Juanlu' material='camiseta' size='mediano' note='Muchas gracias' />
		</>
	);
		
};

export default App;
