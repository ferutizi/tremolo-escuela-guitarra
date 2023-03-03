import './Modal.scss';
import { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import { Link } from 'react-router-dom';

const Modal = ({ showModal, formulario }) => {
    const inscriptionRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => inscriptionRef.current,
    });

    return(
        <>
            {showModal ? 
                <div className="modal--overlay">
                    <div className="modal--card">
                        <h4 className='modal--title'>Se ha enviado la Inscripción</h4>
                        <div className='modal--container' ref={inscriptionRef}>
                            <div>
                                <h5 className='modal--subtitle'>Datos Personales:</h5>
                                <p className='modal--text'><b>Nombre:</b> {formulario.name} {formulario.surname}</p>
                                <p className='modal--text'><b>correo Electrónico:</b> {formulario.email}</p>
                                <p className='modal--text'><b>Teléfono:</b> {formulario.phone}</p>
{/*                                 <p className='modal--text'><b>Teléfono en caso de emergencia:</b></p>
                                <p className='modal--text'><b>Nombre y Apellido del Adulto Responsable (en caso de ser menor de edad)</b></p>
                                <p className='modal--text'><b>Algún dato que la escuela deba saber (temas de salud, sociales, capacidades diferentes, etc)</b></p>
                                <p className='modal--text'><b>Abono mensual Marzo 2023:</b>Bahía blanca: AR$5500, Punta Alta: AR$4500</p> */}
                            </div>
                            <div>
                                <h5 className='modal--subtitle'>Datos de Inscripción:</h5>
                                <p className='modal--text'><b>ciudad:</b> {formulario.city}</p>
                                <p className='modal--text'><b>profesor:</b> {formulario.professor}</p>
                                <p className='modal--text'><b>horario y lugar:</b> {formulario.hour}</p>
                            </div>
                        </div>
                        <p className='modal--text'><span>Importante!</span> descargar los datos de Inscripción aquí</p>
                        <div style={{display: 'flex', gap: '4em'}}>
                            <button className='modal--button'><Link style={{textDecoration: 'none', color: 'inherit'}} to='/'>Volver</Link></button>
                            <button onClick={() => handlePrint()} className='modal--button'>Descargar datos</button>
                        </div>
                    </div>
                </div>
                : null
            }
        </>
    );
}

export default Modal;