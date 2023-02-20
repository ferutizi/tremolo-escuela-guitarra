import './Nav.scss';
import { Link } from 'react-router-dom';

const Nav = () => {
    return(
        <div className='nav'>
            <div className='nav--sections'>
                <Link to="/" className='nav--item'>INICIO</Link>
                <Link to="/gallery" className='nav--item'>GALERÍA</Link>
                <Link to="/incription" className='nav--item'>INSCRIPCIONES</Link>
                <Link to="/contact" className='nav--item'>CONTACTO</Link>
{/*                 <Link to="/frequent-questions" className='nav--item'>Preguntas Frecuentes</Link> */}
            </div>
        </div>
    );
}

export default Nav;