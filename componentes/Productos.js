import Style from "../styles/Productos.module.css"

export default function Productos(props) {
    return (
        <div className={Style.contenedorPrincipal}>
            <h1>{props.nombre}</h1>

            <img className={Style.imagen} src={props.imagen} alt={props.nombre}/> 
             
        </div>
    )
}