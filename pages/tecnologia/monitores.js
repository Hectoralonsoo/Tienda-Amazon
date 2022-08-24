import Layout from "../../componentes/Layout"
import Productos from "../../componentes/Productos"

 export default function Monitores({items}){
    return(
        <Layout>
        <h1>Monitores</h1>
        <hr />
        <Productos 
            nombre="Monitor Asus"
            imagen={"../../imagenes/Cigala.webp"}
        />
        </Layout>
 );
}