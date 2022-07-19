import { useParams, Link } from 'react-router-dom'

function Resultados(props) {

    let params = useParams()

    let num1 = parseInt(params.num1)
    let num2 = parseInt(params.num2)

    return (
        <div>
            <h1>Resultados:</h1>
            <p>Suma: {num1 + num2}</p>
            <p>Resta: {num1 - num2}</p>
            <p>Multiplicación: {num1 * num2}</p>
            <p>División: {num1 / num2}</p>
            <p>Resto: {num1 % num2}</p>
            <Link to="/">Ocultar resultados</Link>
        </div>
    )
}

export default Resultados