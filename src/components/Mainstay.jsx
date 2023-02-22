import './Mainstay.scss';
import Cards from "./Cards";

const Mainstay = () => {
    return(
        <section className='mainstay--section'>
          <h2 className='subtitle'>En qué nos&nbsp;<span>destacamos</span></h2>
          <Cards />
        </section>
    );
}

export default Mainstay;