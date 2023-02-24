import useHours from "../hooks/useHours";

const Inscription = () => {
    const [hours] = useHours();
    return(
        <section className="inscription--main">
            <div className="guitar--container">
                <img className="inscription--guitar__l" src={require('../images/guitar_l.png')}></img>
                <img className="inscription--guitar__r" src={require('../images/guitar_r.png')}></img>
            </div>
        </section>
    );
}

export default Inscription;