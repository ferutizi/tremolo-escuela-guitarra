import './Question.scss';

const Question = ({ question, answer }) => {
    return(
        <article className="question--card">
            <p className="question--question">
                {question}
            </p>
            <p className="question--answer">
                {answer}
            </p>
        </article>
    );
}

export default Question;