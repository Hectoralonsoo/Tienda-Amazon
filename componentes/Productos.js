import Link from "next/link"
import Style from "../styles/Productos.module.css"

export default function Productos(props) {
    return (
        <div className={Style.contenedorPrincipal}>
            <div className={Style.contenedorNombre}>
            <h1>{props.nombre}</h1>
            </div>
            <div className={Style.contenedorImagen}>
            <img className={Style.imagen} src={props.imagen} alt={props.nombre}/> 
            </div>
            <div className={Style.contenedorBotones}>
                <div className={Style.contenedorMasInfo}>
                    <Link href="#"> 
                        <a className={Style.masInfoBoton}>+INFO</a>
                    </Link>
                </div>
                <div className={Style.contenedorAmazon}>
                    <a className={Style.botonIrAmazon} href="https://amzn.eu/d/2RRCB8z" target="_blank">Ir a Amazon</a>
                </div>
            </div>
        </div>
    )
}