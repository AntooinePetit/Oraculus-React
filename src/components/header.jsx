import { Link, useLocation } from "react-router-dom"
import "../styles/header.css"
import HeaderArrow from "./headerArrow"
import { useEffect, useState } from "react";

function Header(){
   const [width, setWidth] = useState(window.innerWidth);
   
      useEffect(() => {
         function handleResize() {
           setWidth(window.innerWidth);
         }
     
         window.addEventListener('resize', handleResize);
     
         return () => {
           window.removeEventListener('resize', handleResize);
         };
      }, []);
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
         {location == "/" && width > 1024 ? <HeaderArrow /> : ''}
         
      </header>
   )
}

export default Header