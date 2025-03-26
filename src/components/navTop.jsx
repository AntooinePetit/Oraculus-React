import horoscopeStore from "../store/horoscopeStore"
import "../styles/navTop.css"

function NavTop({previousIndex, nextIndex}){
   const {next, previous, horoscope} = horoscopeStore()
   return(
      <div id="nav-top">
         <a class="left-horoscope" href="#" onClick={previous}>{horoscope[previousIndex].signe} <span>{horoscope[previousIndex].date}</span></a>
         <a class="right-horoscope" href="#" onClick={next}>{horoscope[nextIndex].signe} <span>{horoscope[nextIndex].date}</span></a>
      </div>
   )
}

export default NavTop