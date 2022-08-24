import style from "../styles/Menu.module.css";
import Link from "next/link";

export default function(){
  return(
    <nav className={style.menu}>
    <div>
      <Link href="/">
        <a className={style.link}>INICIO</a>
      </Link>
      <Link href="/tecnologia">
      <div className={style.menuHorizontal}>
        <a className={style.link}>TECNOLOGÍA</a>
            <ul className={style.menuVertical}>
            <Link href="/tecnologia/monitores"><li className={style.listItems}><a>Monitores</a></li></Link>
            <Link href="/tecnologia/teclados"><li className={style.listItems}><a>Teclados</a></li></Link>
            <Link href="/tecnologia/ratones"><li className={style.listItems}><a>Ratones</a></li></Link>
            <Link href="/tecnologia/portatiles"><li className={style.listItems}><a>Ordenadores portátiles</a></li></Link>
            </ul>
        </div>
      </Link>
      <Link href="/hogar">
      <div className={style.menuHorizontal}>
        <a className={style.link}>HOGAR</a>
            <ul className={style.menuVertical}>
          <Link href="/hogar/cocina-comedor"><li className={style.listItems}><a>Cocina y comedor</a></li></Link>
            <Link href="/hogar/dormitorio-salon"><li className={style.listItems}><a>Dormitorio y salón</a></li></Link>
            <Link href="/hogar/baño"><li className={style.listItems}><a>Baño</a></li></Link>
            <Link href="/hogar/jardin"><li className={style.listItems}><a>Jardín</a></li></Link>
            </ul>
        </div>
      </Link>
      <Link href="/faq">
        <a className={style.link}>FAQ</a>
      </Link>
    </div>
    <div>
      <a className={style.link} href="#">NEON APE</a>
    </div>
  </nav>
    );
}