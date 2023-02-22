import Mainstay from '../components/Mainstay';
import Teachers from '../components/Teachers';

const Home = () => {
    return(
      <>
        <div className='background--image'></div>
        <img src={require('../images/logo.png')} className='background--logo'></img>
        <div className='separate'></div>
        <div>
          <h1>Trémolo</h1> 
          <h2 className='subtitle'>Escuela de&nbsp;<span>Guitarra</span></h2>
        </div>
        <Mainstay />
        <h2 className='subtitle'>¿Quiénes somos?</h2>
        <Teachers />
      </>
    );
}

export default Home;