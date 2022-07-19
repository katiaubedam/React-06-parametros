import {useParams} from 'react-router-dom'

function Saludar() {

    let params = useParams()

    return (
        <h1>Hola, {params.username}</h1>
    )
}

export default Saludar