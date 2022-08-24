import Head from "next/head"
import Menu from "./Menu"
import Style from "../styles/Layouts.module.css"

export default function Layout ({children,title}) {
    return (
        <div>
           <Head>
                <title>Tienda</title>
            </Head> 
            <Menu />
            <div className={Style.titulo}>
                {children}
            </div>
        </div>
    )

}