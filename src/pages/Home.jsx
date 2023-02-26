import AboutUs from '../components/AboutUs';
import Mainstay from '../components/Mainstay';
import Teachers from '../components/Teachers';

const Home = () => {
    return(
      <>
        <div className='background--image'></div>
        <img src={require('../images/logo.png')} className='background--logo'></img>
        <div className='separate'></div>
        <Mainstay />
        <AboutUs />
        <Teachers />
      </>
    );
}

export default Home;