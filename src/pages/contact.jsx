import { useEffect, useState } from "react";
import Header from "../components/header"
import "../styles/contact.css"
import Aside from "../components/aside";

function Contact(){
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

   const sendForm = (e) => {
      e.preventDefault()
   }

   return(
      <div className="contact">
         <Header />
         <main>
            <section>
               <h1>Contacter ORACULUS</h1>
               <p>Nous sommes ravis que vous souhaitiez entrer en contact avec nous ! Chez Oraculus, nous sommes là pour répondre à toutes vos questions, suggestions ou préoccupations. Votre opinion compte, et nous sommes déterminés à vous offrir la meilleure expérience possible.</p>
               <form onSubmit={sendForm}>
                  <input type="text" name="last-name" id="last-name" placeholder="votre nom" />
                  <input type="text" name="first-name" id="first-name" placeholder="votre prénom" />
                  <input type="email" name="email" id="email" placeholder="votre mail" />
                  <textarea name="message" id="message" placeholder="votre message"></textarea>
                  <input type="submit" value="ENVOYER" />
               </form>
            </section>
            {width > 1024 ? <Aside /> : ''}

         </main>
      </div>
   )
}

export default Contact