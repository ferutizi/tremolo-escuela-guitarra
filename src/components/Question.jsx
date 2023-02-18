import './Question.scss';

const Question = ({ q, a }) => {
    return(
        <section className="question--card">
            <p className="question--question">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi, illo.
            </p>
            <p className="question--answer">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum itaque, expedita sit quos ea minus temporibus facilis voluptatem autem mollitia quo obcaecati!
            </p>
        </section>
    );
}

export default Question;