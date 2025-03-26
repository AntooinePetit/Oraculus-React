import Aside from "../components/aside"
import Header from "../components/header"
import NavTop from "../components/navTop"
import "../styles/home.css"
import horoscopeStore from "../store/horoscopeStore"

function Home(){
   const {horoscope, currentIndex, nextIndex, prevIndex} = horoscopeStore()

   return (
      <div className="horoscope">
         <Header />
         <main>
            <section>
               <NavTop previousIndex={prevIndex} nextIndex={nextIndex}/>
               <article>
                  <p id="datejour">-- HOROSCOPE DU 28/09/2023</p>
                  <h1 id="signe">{horoscope[currentIndex].signe}</h1>
                  <span id="date">DU {horoscope[currentIndex].date}</span>
                  <div id="horoscope">
                     <p><span>Amour :</span>{horoscope[currentIndex].amour}</p>
                     <p><span>Travail :</span>{horoscope[currentIndex].travail}</p>
                     <p><span>Argent :</span>{horoscope[currentIndex].argent}</p>
                     <p><span>Santé :</span>{horoscope[currentIndex].sante}</p>
                     <p><span>Famille et amis :</span>{horoscope[currentIndex].famille}</p>
                     <p><span>Conseil :</span>{horoscope[currentIndex].conseil}</p> 
                  </div>
               </article>
            </section>
            <Aside source={horoscope[currentIndex].image} signe={horoscope[currentIndex].signe}/>
         </main>
      </div>
   )
}

export default Home