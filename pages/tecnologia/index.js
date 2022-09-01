import Carrusel from "../../componentes/Carrusel";
import Layout from "../../componentes/Layout"

export default function Index({items}){
    return(
      <Layout>
        <div>
          <h1>Tecnología</h1>
          <hr />
          <Carrusel />
        </div>
      </Layout>  
 );
}