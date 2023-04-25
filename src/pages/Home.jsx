import AboutUs from '../components/AboutUs'
import Footer from '../components/Footer'
import Mainstay from '../components/Mainstay'
import Teachers from '../components/Teachers'

const Home = () => {
  return (
    <>
      <div className='background--image' />
      <img src={require('../images/logo_c.png')} className='background--logo' alt='logo tremolo escuela de guitarra' />
      <div className='separate' />
      <Mainstay />
      <div style={{ height: '2em', backgroundImage: 'linear-gradient(#fff7ef 30%, #fef2e1' }} />
      <AboutUs />
      <div style={{ height: '2em', backgroundImage: 'linear-gradient(#fef2e1 30%, #f7f8fc' }} />
      <Teachers />
      <Footer />
    </>
  )
}

export default Home
