import './Guitar.scss';

const Guitar = ({ submitted }) => {
    return(
        <div className="guitar--container">
            <p>{submitted}</p>
            <img className={`inscription--guitar__l close--${submitted}__l`} src={require('../images/guitar_l.png')}></img>
            <img className={`inscription--guitar__r close--${submitted}__r`} src={require('../images/guitar_r.png')}></img>
        </div>
    );
}

export default Guitar;