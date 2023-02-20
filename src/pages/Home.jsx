import Cards from '../components/Cards';

const Home = () => {
    return(
      <>
        <img className='img' src={require('../images/g1.jpg')} />
        <div className='separate'></div>
        <div className='card--section'>
          <h1>Trémolo</h1> 
          <h2>Escuela de Guitarra</h2>
          <h3>¿Por qué nosotros?</h3>
          <Cards />
        </div>
      </>
    );
}

export default Home;