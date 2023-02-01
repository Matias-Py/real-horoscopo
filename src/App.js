import React, {useState} from 'react'
import './App.css';
import aries from './imagenes/aries.svg';
import acuario from './imagenes/acuario.svg';
import cancer from './imagenes/cancer.svg';
import capricornio from './imagenes/capricornio.svg';
import escorpio from './imagenes/escorpio.svg';
import geminis from './imagenes/geminis.svg';
import leo from './imagenes/leo.svg';
import libra from './imagenes/libra.svg';
import piscis from './imagenes/piscis.svg';
import sagitario from './imagenes/sagitario.svg';
import tauro from './imagenes/tauro.svg';
import virgo from './imagenes/virgo.svg';
import risa from './imagenes/risa.gif';

const mensajes = [{
  1: "Te conviene cultivar la discreción, especialmente en un momento como este en el que la suerte está contigo y podrás hacer realidad muchos de tus sueños. Te encanta compartir con los demás tus alegrías e ilusiones porque tú eres transparente y no tienes malicia, pero a tu alrededor asechan enemigos que te envidian.",
  2: "La semana ha comenzado con un talante batallador, pero el día de hoy va a ser mejor, las cosas serán más fáciles para ti y las realizaciones se alcanzarán con mayor comodidad o se percibirán con mayor claridad. Sin duda te espera un día favorable en los asuntos laborales y sociales, y también estarás optimista y animado.",
  3: "La semana se iniciará con un día lleno de estrés y tensión para ti, aunque no va a ser malo, sino que resolverás con éxito todos los problemas o adversarios que te vayan saliendo al camino, que no van a ser pocos. No obstante, debes tener cuidado con tu carácter, que hoy podría volverse más colérico o explosivo de lo habitual.",
  4: "El amor te podría dar hoy una sorpresa desagradable, o también puedes ser tu mismo, debido a tu carácter vehemente, celoso y agresivo, quien desencadenes una situación que luego ya no podrás controlar. Debes pensártelo dos veces antes de tener una discusión o un conflicto con tu pareja, o con seguridad terminará mal.",
  5: "Hoy te espera un día diferente, o por las actividades que vas a realizar o porque en tus relaciones íntimas podría haber alguna novedad importante. Un día diferente o con sorpresas, pero positivo y estimulante. Todo saldrá de forma muy distinta a como lo esperas, aunque al final te alegrarás por ello. Ten cuidado con los gastos.",
  6: "Para ti hoy el día estará muy centrado en los asuntos materiales y el dinero, aunque afortunadamente para bien. Recibirás buenas noticias en relación con tus negocios y proyectos financieros, y al mismo tiempo, también será un día excelente para tomar alguna iniciativa en este sentido. Vas a tener intuiciones acertadas.",
  7: "La Luna se hallará hoy en tu signo y potenciará el lado más instintivo de tu personalidad. Por eso, hoy en mayor medida debes esforzarte por mantener bajo control tu lado más agresivo, impulsivo y colérico, o de lo contrario te traerá consecuencias muy malas, pudiendo hacer o decir cosas de las que luego te vas a arrepentir.",
  8: "El Sol y Júpiter formarán hoy una constelación muy armónica y que para ti va a ser claramente favorable, lo que no significa que las cosas te caigan del cielo. Te espera un día armonioso y de suerte, pero al mismo tiempo un día bastante movido. Debes sujetar más tu temperamento porque te podrías encolerizar con facilidad.",
  9: "Te espera un día batallador en el trabajo, no muy diferente del anterior aunque sí algo más agradable, en el que recibirás más ayuda o mejores noticias, o quizás los resultados de tus esfuerzos se verán con mayor facilidad. La mañana será algo crispada y estresante, pero ya la tarde va a ser mucho mejor. Solución de problemas.",
  10: "Te espera un día de fuertes altibajos emocionales, en el que pasarás de emociones negativas y malestar interior a justo todo lo contrario y momentos de optimismo en donde todo te parecerá posible. Y también todo esto se corresponderá con un día de importantes cambios y contrastes, pero finalmente todo va a acabar bien.",
  11: "Ten cuidado con confiar demasiado en tus amigos. Sabes mejor que nadie establecer relaciones sociales y te mueves como pez en el agua entre la gente. Tienes muchos conocidos, pero pocos amigos en realidad, por eso debes actuar con prudencia y no dar demasiada confianza a quien no sabes si en realidad se la merecería.",
  12: "Hoy te vas a mostrar más lanzado y audaz de lo habitual a la hora de tomar iniciativas tanto en el terreno laboral como en las finanzas, sin embargo, lo que realmente te convendría es más bien lo contrario, actuar con prudencia y pensar las cosas antes de hacerlas. Ten cuidado a la hora de correr riesgos, podrías lamentarlo.",
  13: "Quizás sea este el signo más comunicativo del zodiaco, sin embargo, hoy te sentirás impulsado a buscar la soledad o solo te apetecerá estar con las personas que te sientes realmente bien. Eres muy listo, diplomático y hábil, pero hoy no tendrás ganas de reírle las gracias a nadie, solo buscarás estar allí donde te sientas bien.",
  14: "Hoy la Luna no se hallará en armonía y de los doce signos tú estás entre aquellos que más lo van a notar en forma de malestar emocional. Aunque no haya razón para ello tendrás tendencia a sentirte agobiado o atado a una serie de circunstancias que no te gustan. Mal día para las relaciones sentimentales, riesgo de desencuentros.",
  15: "Hoy te conviene más que nunca reflexionar las cosas antes de hacerlas y analizar las diferentes posibilidades porque te puedes equivocar a la hora de tomar una decisión en tu trabajo o relacionada con tus negocios y finanzas. No te agarres a lo primero que te venga a la cabeza o te parezca más fácil. Estás ante un reto complicado.",
}]



const App = () => {
  const [ingnorante, setIgnorante] = useState(false)
  const [seleccionado, setSeleccionado] = useState(false)


  var x = Math.random()*15;
  var resultado = Math.round(x)

  

  if(ingnorante === false && seleccionado === false){
    return (
      <div>
        <h1>Veamos que tiene el universo para vos 🥸🌌</h1>
        <div id="signos">
          <h3>Elegí tu signo para saber que tiene el universo para decirte 🧐</h3>
          <div id="contenedorSignos">
            <div className="signo">
              <img className='signopic' src={aries} alt="logo-signo"/>
              <button onClick={() => {setSeleccionado(true)}}>Aries</button>
            </div>
            <div className="signo">
              <img className='signopic' src={acuario} alt="logo-signo"/>
              <button onClick={() => {setSeleccionado(true)}}>Acuario</button>
            </div>
            <div className="signo">
              <img className='signopic' src={cancer} alt="logo-signo"/>
              <button onClick={() => {setSeleccionado(true)}}>Cancer</button>
            </div>
            <div className="signo">
              <img className='signopic' src={capricornio} alt="logo-signo"/>
              <button onClick={() => {setSeleccionado(true)}}>Capricornio</button>
            </div>
            <div className="signo">
              <img className='signopic' src={escorpio} alt="logo-signo"/>
              <button onClick={() => {setSeleccionado(true)}}>Escorpio</button>
            </div>
            <div className="signo">
              <img className='signopic' src={geminis} alt="logo-signo"/>
              <button onClick={() => {setSeleccionado(true)}}>Geminis</button>
            </div>
            <div className="signo">
              <img className='signopic' src={leo} alt="logo-signo"/>
              <button onClick={() => {setSeleccionado(true)}}>Leo</button>
            </div>
            <div className="signo">
              <img className='signopic' src={libra} alt="logo-signo"/>
              <button onClick={() => {setSeleccionado(true)}}>Libra</button>
            </div>
            <div className="signo">
              <img className='signopic' src={piscis} alt="logo-signo"/>
              <button onClick={() => {setSeleccionado(true)}}>Piscis</button>
            </div>
            <div className="signo">
              <img className='signopic' src={sagitario} alt="logo-signo"/>
              <button onClick={() => {setSeleccionado(true)}}>Sagitario</button>
            </div>
            <div className="signo">
              <img className='signopic' src={tauro} alt="logo-signo"/>
              <button onClick={() => {setSeleccionado(true)}}>Tauro</button>
            </div>
            <div className="signo">
              <img className='signopic' src={virgo} alt="logo-signo"/>
              <button onClick={() => {setSeleccionado(true)}}>Virgo</button>
            </div>
          </div>
        </div>
        <div id="contenedorInfo">
          <p id="botonInfo">¿Que hago si no se cual es mi signo?😢  ➡<button onClick={() => setIgnorante(!ingnorante)} id="botonDeLosIgnorantes">Clickeame</button></p>
        </div>
      </div>
    );
  }else if(ingnorante === true){
    return(
      <div id="elRincon">
        <div id="contenedorIgnorante">
          <h1>Como no vas a saber eso 🙄</h1>
          <img id="risita" src={risa} width="200px" alt="investigar-signo"/>
          <p>Acá te dejo un link para que averigues ➡ <a href='https://www.cosmopolitan.com/es/horoscopo/extra/a36416643/horoscopo-signos-del-zodiaco-fechas/#:~:text=Aries%3A%20del%2018%20de%20abril,julio%20al%2010%20de%20agosto.' target="_blank">link</a></p>
          <button id="botonDeLaVerguenza" onClick={() => {setIgnorante(!ingnorante)}}>Ya sé cual es 😁</button>
          </div>
      </div>
    )
  }else if(seleccionado === true){
    return(
      <div id="fraseyboton">
        <div id="contenedorFrase">
          <h2 id="titulo-hoy">Tu horóscopo para hoy</h2>
          <p id="lafrase">{mensajes[0][resultado]}</p>
        </div>
        <button id="volver" onClick={() => {setSeleccionado(!seleccionado)}}>Preguntar por otro signo</button>
      </div>
    )
  }
}

export default App;
