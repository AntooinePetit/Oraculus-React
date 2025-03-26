import { ChevronLeft, ChevronRight } from "lucide-react"
import "../styles/headerArrow.css"
import horoscopeStore from "../store/horoscopeStore"

function HeaderArrow(){
   const {next, previous} = horoscopeStore()
   return(
      <div id="nav-arrows">
         <button onClick={previous}><ChevronLeft /></button>
         <button onClick={next}><ChevronRight /></button>
      </div>
   )
}

export default HeaderArrow