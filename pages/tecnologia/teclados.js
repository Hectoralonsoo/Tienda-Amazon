import Layout from "../../componentes/Layout"
import Productos from "../../componentes/Productos"


 export default function Teclados({items}){
    return(
        <Layout>
        <h1>Teclados</h1>
        <hr />
        <div className="contenedorTeclados">
        <Productos
            nombre="Teclado"
            imagen="../../imagenes/Monitor-Benq-Mobiuz.png"
        />   
        <Productos
            nombre="Teclado"
            imagen="../../imagenes/Monitor-Benq-Mobiuz.png"
        /> 
        <Productos
            nombre="Teclado"
            imagen="../../imagenes/Monitor-Benq-Mobiuz.png"
        />        
        </div>
        <style jsx>{`
        .contenedorTeclados{
          display: flex;
          flex-wrap: wrap;
          gap: 20px;
          justify-content: space-evenly;
        }
      `}</style>
        </Layout>
 );
}