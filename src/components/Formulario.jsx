import './Formulario.scss';

const Formulario = () => {
    return(
        <div className="inscription--container">
            <form className="inscription--form">
                <input placeholder='Nombre' className="inscription--input"></input>
                <input placeholder='Apellido' className="inscription--input"></input>
                <input placeholder='Correo Electrónico' className="inscription--input"></input>
                <input placeholder='Teléfono' className="inscription--input"></input>
                <input placeholder='Grupo Etario' className="inscription--input"></input>
            </form>
        </div>
    );
}

export default Formulario;