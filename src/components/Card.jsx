import './Cards.scss';

const Card = ({ text }) => {
    return(
        <div className='card'>
            <p className='card--text'>{text}</p>
        </div>
    );
}

export default Card;