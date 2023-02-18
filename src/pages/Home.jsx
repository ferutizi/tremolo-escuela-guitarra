const Home = () => {
    return(
      <>
        <h1>Trémolo Escuela de Guitarra</h1>
        <div>
          <a href="https://api.whatsapp.com/send?phone=2916468413&text=Hola, quería obtener más información sobre las clases de guitarra" target="_blank" >
            <img src={require('../images/wp_c.png')} alt="whatsapp-contact" className="icon--wp" />
          </a>
        </div>
      </>
    );
}

export default Home;