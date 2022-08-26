import Carrusel from "../../componentes/Carrusel";
import Layout from "../../componentes/Layout"
import Productos from "../../componentes/Productos"

 export default function Monitores({items}){
    return(
        <Layout>
        <h1>Monitores</h1>
        <hr />
        <div className="contenedorPrincipal">
        <Productos 
            nombre="Monitor Benq"
            imagen="../../imagenes/Monitor-Benq-Mobiuz.png"
        />
         <Productos 
            nombre="Monitor Benq"
            imagen="../../imagenes/Monitor-Benq-Mobiuz.png"
        />
         <Productos 
            nombre="Monitor Benq"
            imagen="../../imagenes/Monitor-Benq-Mobiuz.png"
        />
        
       </div>
       <style jsx>{`
        .contenedorPrincipal{
          display: flex;
          flex-wrap: wrap;
          gap: 20px;
          justify-content: space-evenly;
        }
      `}</style>
        </Layout>
 
 );
}