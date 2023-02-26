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
                    <img className='about--img' src={require('../images/gg.jpg')} />
                </div>
                <div className='about--description'>
                    <h3 className='about--subtitle'><span>¿</span>Quiénes Somos<span>?</span></h3>
                    <p className='description--text'>Somos una escuela itinerante de guitarra que funciona en Bahía Blanca y Punta Alta,
                        abierta a todo aquel que quiera aprender este maravilloso instrumento, cualquiera sea su nivel, desde niños de 8 años,
                        hasta adultos mayores. Tenemos como objetivo llevar la enseñanza musical a diferentes espacios comunes, sociedades de fomento,
                        y espacios culturales en formación.
                    </p>
                    <button className='about--button'>¡Inscribete ahora!</button>
                </div>
            </div>
        </section>
    );
}

export default AboutUs;