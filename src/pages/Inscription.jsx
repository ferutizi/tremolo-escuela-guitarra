import Guitar from "../components/Guitar";
import Formulario from "../components/Formulario";
import useHours from "../hooks/useHours";

const Inscription = () => {
    const [hours] = useHours();
    return(
        <section className="inscription--main">
            <Guitar />
            <Formulario />
        </section>
    );
}

export default Inscription;