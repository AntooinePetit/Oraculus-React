import { Link, useLocation } from "react-router-dom"
import "../styles/header.css"
import HeaderArrow from "./headerArrow"

function Header(){
   const location = useLocation().pathname
   return(
      <header>
         <Link to="/"><img src="/images/logo-oraculus.png" alt="Logo Oraculus" /></Link>
         <nav>
            <ul>
               <li><Link to="/">Horoscope</Link></li>
               <li><Link to="/about">À propos</Link></li>
               <li><Link to="/contact">Contact</Link></li>
            </ul>
         </nav>
         {location == "/" ? <HeaderArrow /> : ''}
         
      </header>
   )
}

export default Header