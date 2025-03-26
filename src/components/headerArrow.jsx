import { ChevronLeft, ChevronRight } from "lucide-react"
import "../styles/headerArrow.css"

function HeaderArrow(){
   return(
      <div id="nav-arrows">
         <button><ChevronLeft /></button>
         <button><ChevronRight /></button>
      </div>
   )
}

export default HeaderArrow