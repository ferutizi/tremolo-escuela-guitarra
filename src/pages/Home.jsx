import AboutUs from '../components/AboutUs';
import Mainstay from '../components/Mainstay';
import Teachers from '../components/Teachers';

const Home = () => {
    return(
      <>
        <div className='background--image'></div>
        <img src={require('../images/logo_c.png')} className='background--logo'></img>
        <div className='separate'></div>
        <Mainstay />
        <div style={{height: '2em', backgroundImage: 'linear-gradient(#fff7ef 30%, #fef2e1'}}></div>
        <AboutUs />
        <div style={{height: '2em', backgroundImage: 'linear-gradient(#fef2e1 30%, #f7f8fc'}}></div>
        <Teachers />
      </>
    );
}

export default Home;