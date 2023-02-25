import { useState } from "react";
import Guitar from "../components/Guitar";
import Formulario from "../components/Formulario";
import useHours from "../hooks/useHours";

const Inscription = () => {
    const [submitted, setSubmitted] = useState(false);
    return(
        <section className="inscription--main">
            <Guitar submitted={submitted}/>
            <Formulario submitted={submitted} setSubmitted={setSubmitted} />
        </section>
    );
}

export default Inscription;