import './Cards.scss';
import Card from "./Card";

const Cards = () => {
    return(
        <div className='card--container'>
            <div className='card--container__left'>
                <img className='card--img' src={require('../images/red_c.jpg')} />
            </div>
            <div className='card--container__rigth'>
                <Card text={'El cuerpo como primer instrumento'} />
                <Card text={'La búsqueda de un sonido propio en la interpretación y composición'} />
                <Card text={'La técnica y la teoría aplicada en la música que te gusta'} />
                <Card text={'Te acompañamos durante todo el proceso, cualquiera sea tu nivel'}/>
            </div>
        </div>
    );
}

export default Cards;