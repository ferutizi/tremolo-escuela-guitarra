import './Guitar.scss';

const Guitar = () => {
    return(
        <div className="guitar--container">
            <img className="inscription--guitar__l" src={require('../images/guitar_l.png')}></img>
            <img className="inscription--guitar__r" src={require('../images/guitar_r.png')}></img>
        </div>
    );
}

export default Guitar;