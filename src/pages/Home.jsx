import Cards from '../components/Cards';
import Teachers from '../components/Teachers';

const Home = () => {
    return(
      <>
        <div className='background--image'></div>
        <img src={require('../images/logo.png')} className='background--logo'></img>
        <div className='separate'></div>
        <div className='card--section'>
          <h1>Trémolo</h1> 
          <h2>Escuela de Guitarra</h2>
          <h3>¿Por qué nosotros?</h3>
          <Cards />
          <h3>¿Quiénes Somos?</h3>
          <h3>Nuestros Profesores</h3>
          <Teachers />
        </div>
      </>
    );
}

export default Home;