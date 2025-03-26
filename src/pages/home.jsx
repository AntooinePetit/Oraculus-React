import Aside from "../components/aside"
import Header from "../components/header"
import NavTop from "../components/navTop"
import "../styles/home.css"

function Home(){
   return (
      <div className="horoscope">
         <Header />
         <main>
            <section>
               <NavTop />
               <article>
                  <p id="datejour">-- HOROSCOPE DU 28/09/2023</p>
                  <h1 id="signe">CAPRICORNE</h1>
                  <span id="date">DU 22 DECEMBRE AU 20 JANVIER</span>
                  <div id="horoscope">
                     <p><span>Amour :</span></p>
                     <p><span>Travail :</span></p>
                     <p><span>Argent :</span></p>
                     <p><span>Santé :</span></p>
                     <p><span>Famille et amis :</span></p>
                     <p><span>Conseil :</span></p> 
                  </div>
               </article>
            </section>
            <Aside />
         </main>
      </div>
   )
}

export default Home