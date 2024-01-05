// - Crea un componente llamado sayHello que reciba un nombre por parámetro y devuelva un h2 que diga "hola [nombre]".

// Se puede poner de las 2 formas

/* const SayHello = props => {
    return <h2>Hola {props.nombre}</h2>
}; */

const SayHello = ({ nombre }) => {
    return <h2>Hola {nombre}</h2>
};

export default SayHello;