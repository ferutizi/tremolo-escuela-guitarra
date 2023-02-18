import './Nav.scss';
import { Link } from 'react-router-dom';

const Nav = () => {
    return(
        <div className='nav'>
            <div>
                <Link to="/">
                    <img className='nav--logo logo' src={require('../images/logo.png')} />
                </Link>
            </div>
            <div className='nav--sections'>
                <Link className='nav--item'>¿Quiénes somos?</Link>
                <Link to="/locations" className='nav--item'>Nuestros Espacios</Link>
                <Link className='nav--item'>Contacto</Link>
                <Link className='nav--item'>Preguntas Frecuentes</Link>
            </div>
        </div>
    );
}

export default Nav;