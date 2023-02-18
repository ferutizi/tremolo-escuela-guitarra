import "./App.scss";
import Nav from "./components/Nav";

function App() {
  return (
    <main>
      <Nav />
      <h1>Trémolo Escuela de Guitarra</h1>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3113.4464941556143!2d-62.288646985022396!3d-38.707556793483135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95edbb675877c957%3A0xf49928d485582f3c!2sMart%C3%ADn%20Rodr%C3%ADguez%20175%2C%20B8000HSC%20Bah%C3%ADa%20Blanca%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1676659320748!5m2!1ses-419!2sar" width="400" height="350" style={{border: 0}} loading="lazy"></iframe>
      <div>
        <a href="https://api.whatsapp.com/send?phone=2916468413&text=Hola, quería obtener más información sobre las clases de guitarra" target="_blank" >
          <img src={require('./images/wp_c.png')} alt="whatsapp-contact" className="icon--wp" />
        </a>
      </div>
    </main>
  );
}

export default App;
