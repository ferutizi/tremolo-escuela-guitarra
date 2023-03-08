import './Footer.scss';
import { Link } from 'react-router-dom';

const Footer = () => {
    return(
        <>
            <div className='footer'>
                <div className='footer--sections'>
                    <Link to="/" className='footer--item'>INICIO</Link>
        {/*                 <Link to="/gallery" className='footer--item'>GALERÍA</Link> */}
                    <Link to="/inscription" className='footer--item'>INSCRIPCIONES</Link>
                    <Link to="/contact" className='footer--item'>CONTACTO</Link>
                </div>
        </div>
            <div className='copyright'>
                <p className='copyright--text'>Copyright © Fernando Utizi 2023-2026 www.tremoloescuela.com - Todos los derechos reservados.</p>
            </div>
    </>
    );
}

export default Footer;