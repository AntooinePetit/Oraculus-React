import { useLocation } from "react-router-dom"
import "../styles/aside.css"

function Aside({source, signe}){
   const location = useLocation().pathname
   return(
      <aside>
         {location == "/" ? <img src={source} alt={signe} /> : ''}
      </aside>
   )
}

export default Aside