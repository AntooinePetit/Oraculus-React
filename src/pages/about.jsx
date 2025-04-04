import { useEffect, useState } from "react";
import Aside from "../components/aside"
import Header from "../components/header"
import "../styles/about.css"

function About(){
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
   return(
      <div className="a-propos">
         <Header />
         <main>
            <section>
               <h1>À propos d'Oraculus</h1>
               <p>Bienvenue sur Oraculus, votre source de guidance céleste au quotidien ! Nous sommes ravis de vous accueillir dans notre espace dédié à l'exploration de l'astrologie et à la découverte des étoiles.</p>
               <article>
                  <h2>Notre mission</h2>
                  <p>Chez Oraculus, notre mission est de vous offrir des horoscopes du jour inspirants, informatifs et divertissants. Nous croyons en la puissance des astres pour éclairer nos vies et nous guider dans nos choix. Que vous soyez un fervent adepte de l'astrologie ou simplement curieux, notre objectif est de vous fournir des prévisions astrologiques précises et pertinentes pour vous accompagner tout au long de votre journée.</p>
               </article>
               <article>
                  <h2>Ce que Nous Proposons</h2>
                  <ul>
                     <li>Horoscopes Personnalisés : Découvrez ce que les étoiles réservent à votre signe astrologique chaque jour.</li>
                     <li>Conseils pour l'Épanouissement Personnel : Explorez des articles et des conseils pour mieux comprendre votre signe, votre personnalité et vos relations.</li>
                     <li>Ressources Astrologiques : Plongez dans l'univers fascinant de l'astrologie avec nos ressources éducatives et nos guides.</li>
                     <li>Communauté Engagée : Rejoignez notre communauté d'amoureux des étoiles pour partager vos expériences, poser des questions et échanger des idées.</li>
                  </ul>
               </article>
               <article>
                  <h2>Notre Engagement</h2>
                  <p>Chez Oraculus, nous sommes déterminés à offrir des horoscopes et des informations astrologiques de qualité. Notre équipe d'experts en astrologie travaille dur pour vous fournir des prévisions précises et basées sur les positions des planètes. Nous nous engageons également à respecter votre vie privée et à protéger vos données personnelles.</p>
               </article>
               <article>
                  <h2>Rejoignez-Nous</h2>
                  <p>Explorez Oraculus pour découvrir ce que les astres vous réservent aujourd'hui. Que vous cherchiez des conseils pour votre carrière, des indications sur l'amour et les relations, ou simplement une dose quotidienne d'inspiration, vous trouverez tout cela ici. Rejoignez-nous dans cette aventure astrologique et laissez les étoiles éclairer votre chemin.</p>
                  <p>Merci de faire partie de la communauté Oraculus, et que les étoiles vous guident vers un avenir radieux !</p>
                  <p>L'équipe Oraculus</p>
               </article>
            </section>
            {width > 1024 ? <Aside /> : ''}
         </main>
      </div>
   )
}

export default About