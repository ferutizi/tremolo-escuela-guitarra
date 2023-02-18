import './Nav.scss';

const Nav = () => {
    return(
        <div className='nav'>
            <div>
                <img className='nav--logo logo' src={require('../images/logo.png')} />
            </div>
            <div className='nav--sections'>
                <a className='nav--item'>¿Quiénes somos?</a>
                <a className='nav--item'>Nuestros Espacios</a>
                <a className='nav--item'>Contacto</a>
                <a className='nav--item'>Preguntas Frecuentes</a>
            </div>
        </div>
    );
}

export default Nav;