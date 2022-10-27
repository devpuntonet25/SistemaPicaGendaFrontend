import "./styles/App.css";
import mainImage from "./images/main_img.svg";
import rightWave from "./images/right-wave.svg";
import ingresoPanelImage from "./images/ingreso_panel_ilustracion.svg";
import ChatBot from "./components/ChatBot";

function App() {
  return (
    <main className="main">

    {/* Sección hero */}
      <section className="main__hero">
        <div className="main_container">
          <div className="main__texts">
            <h2 className="main__title">
              Agenda una cita ahora con alguno de nuestros docentes e incluso
              con la directora.
            </h2>
            <a href="#" className="main__button">
              ¡Agéndate!
            </a>
          </div>
          <figure className="main__imgcontainer">
            <img
              src={mainImage}
              alt="icono representativo de un agendamiento de citas"
              className="main__img"
            />
          </figure>

          <img className="main__wave" src={rightWave} alt="wave"/>
        </div>
      </section>

      {/* Sección ingreso al panel de administración */}
      <section className="main__hero main__hero--background">
        <div className="main_container">
          <div className="main__texts">
            <h2 className="main__title">
              ¿Eres docente o director en la institución?
            </h2>
            <a href="#" className="main__button">
              ¡Ingresa!
            </a>
          </div>
          <figure className="main__imgcontainer">
            <img
              src={ingresoPanelImage}
              alt="icono representativo de un agendamiento de citas"
              className="main__img"
            />
          </figure>

          <img className="main__wave" src={rightWave} alt="wave"/>
        </div>
      </section>


      {/* Aquí se importa el componente que integra el chatbot creado con dialogflow */}

      <ChatBot/>
    </main>
  );
}

export default App;
