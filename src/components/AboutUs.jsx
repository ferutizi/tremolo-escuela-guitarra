import { Link } from 'react-router-dom';
import './AboutUs.scss';

const AboutUs = () => {
    return(
        <section className='about'>
            <div>
                <h1 className='title'>Trémolo</h1> 
                <h2 className='subtitle' style={{paddingTop: '0'}}>Escuela de&nbsp;<span>Guitarra</span></h2>
            </div>
            <div className='about--container'>
                <div>
                    <img className='about--img' src={require('../images/guitar_c.jpg')} />
                </div>
                <div className='about--description'>
                    <h3 className='about--subtitle'><span>¿</span>Quiénes Somos<span>?</span></h3>
                    <p className='description--text'>Somos una escuela itinerante de guitarra que funciona en Punta Alta y Bahía Blanca, esta abierta a todo aquel que quiera aprender este instrumento y disfrutar de la música, cualquiera sea su nivel, desde niños de 8 años
                        hasta adultos mayores. Tenemos como objetivo llevar la enseñanza musical a diferentes espacios comunes, sociedades de fomento,
                        y espacios culturales.
                    </p>
                    <Link to='/inscription'>
                        <button className='about--button'>¡Inscribete ahora!</button>
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default AboutUs;