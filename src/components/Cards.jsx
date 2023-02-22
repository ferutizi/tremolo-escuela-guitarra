import './Cards.scss';
import Card from "./Card";

const Cards = () => {
    return(
        <div className='card--container'>
            <Card text={'El cuerpo como primer instrumento musical'} />
            <Card text={'La búsqueda de un sonido propio en la interpretación y la composición'} />
            <Card text={'La técnica y la teoría aplicada en la música que te gusta'} />
            <Card />
        </div>
    );
}

export default Cards;