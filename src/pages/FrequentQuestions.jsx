import Question from "../components/Question";
import questions from '../questions.json';

const FrequentQuestions = () => {
    return(
        <section className="question--container">
            {questions.map(item => 
                <Question key={item.id} question={item.question} answer={item.answer} />)
            }
        </section>
    );
}

export default FrequentQuestions;