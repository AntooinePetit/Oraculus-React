import Header from "../components/header"
import "../styles/error.css"

function Error(){
   return(
      <div className="error404">
         <Header />
         <main>
            <h1>Erreur 404 ! Cette page n'existe pas</h1>
         </main>
      </div>
   )
}

export default Error