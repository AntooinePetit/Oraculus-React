import Aside from "../components/aside"
import Header from "../components/header"
import NavTop from "../components/navTop"
import "../styles/home.css"
import horoscopeStore from "../store/horoscopeStore"
import { useEffect, useState } from "react"

function Home(){
   // const body = document.querySelector('body')

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

   // width <= 1024 ? body.classList.add('responsive-background') : body.classList.remove('responsive-background')

   const {horoscope, currentIndex, nextIndex, prevIndex} = horoscopeStore()

   return (
      <div className="horoscope">
         <Header />
         <main>
            <section>
               <NavTop previousIndex={prevIndex} nextIndex={nextIndex}/>
               <article>
                  <div id="head-horoscope">
                     <div>
                        <p id="datejour">-- HOROSCOPE DU 28/09/2023</p>
                        <h1 id="signe">{horoscope[currentIndex].signe}</h1>
                        <span id="date">DU {horoscope[currentIndex].date}</span>
                     </div>
                     
                     {width <= 1024 ? <img src={horoscope[currentIndex].image} alt={horoscope[currentIndex].signe} /> : ""}
                  </div>
                  
                  <div id="horoscope">
                     <p on><span>Amour :</span>{horoscope[currentIndex].amour}</p>
                     <p><span>Travail :</span>{horoscope[currentIndex].travail}</p>
                     <p><span>Argent :</span>{horoscope[currentIndex].argent}</p>
                     <p><span>Santé :</span>{horoscope[currentIndex].sante}</p>
                     <p><span>Famille et amis :</span>{horoscope[currentIndex].famille}</p>
                     <p><span>Conseil :</span>{horoscope[currentIndex].conseil}</p> 
                  </div>
               </article>
            </section>
            {width > 1024 ? <Aside source={horoscope[currentIndex].image} signe={horoscope[currentIndex].signe}/> : ''}
            
         </main>
      </div>
   )
}

export default Home