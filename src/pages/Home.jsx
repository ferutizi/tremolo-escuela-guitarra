import Mainstay from '../components/Mainstay';
import Teachers from '../components/Teachers';

const Home = () => {
    return(
      <>
        <div className='background--image'></div>
        <img src={require('../images/logo.png')} className='background--logo'></img>
        <div className='separate'></div>
        <h1>Trémolo</h1> 
        <h2>Escuela de Guitarra</h2>
        <Mainstay />
        <h3>¿Quiénes Somos?</h3>
        <h3>Nuestros Profesores</h3>
        <Teachers />
      </>
    );
}

export default Home;