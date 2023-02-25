import useFormulario from '../hooks/useFormulario';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './Formulario.scss';

const Formulario = () => {
    const [active, setActive] = useState(true);
    const [submitted, setSubmitted] = useState(false);
    const [formulario, handleChange, reset] = useFormulario();

    const form = useRef();
    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_tylurvk', 'template_oy0n19c', form.current, 'BWCL7ZUqJm6x267aG')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        setSubmitted(true);
        reset();
        setSubmitted(false);
    }
    console.log(active)
    return(
        <div className="inscription--container">
            <form onSubmit={handleSubmit} ref={form} style={{display: 'flex'}}>
                <div className={`inscription--form form--${active} form--first`}>
                    <input name="name" value={formulario.value} onChange={handleChange} autoFocus type="text" placeholder='Nombre' required className="inscription--input" />
                    <input name="surname" value={formulario.value} onChange={handleChange} type="text" placeholder='Apellido' required className="inscription--input" />
                    <input name="email" value={formulario.value} onChange={handleChange} type="text" placeholder='Correo Electrónico' required className="inscription--input" />
                    <input name="phone" value={formulario.value} onChange={handleChange} type="number" placeholder='Teléfono' required className="inscription--input" />
                    <select name="age-group" onChange={handleChange} className='inscription--input' required defaultValue={false} style={{color: '#777'}}>
                        <option hidden label='Grupo Etario' />
                        <option value='Niño'>Niño</option>
                        <option value='Adolescente'>Adolescente</option>
                        <option value='Adulto'>Adulto</option>
                    </select>
                    <button onClick={() => setActive(!active)} className='inscription--button' type='button'>Siguiente</button>
                </div>
                <div className={`inscription--form form--${!active} form--second`}>
                    <select name="city" onChange={handleChange} className='inscription--input' required defaultValue={false} style={{color: '#777'}}>
                        <option hidden label='Ciudad' />
                        <option value='Bahía Blanca'>Bahía Blanca</option>
                        <option value='Punta Alta'>Punta Alta</option>
                    </select>
                    <select name="professor" onChange={handleChange} className='inscription--input' required defaultValue={false} style={{color: '#777'}}>
                        <option hidden label='Profesor de preferencia' />
                        <option value='sin preferencia'>Sin preferencia</option>
                        <option value='Uziel Leonel Acuña Martínez'>Uziel Leonel Acuña Martínez</option>
                        <option value='Fernando Utizi'>Fernando Utizi</option>
                    </select>
                    <select name="hour" onChange={handleChange} className='inscription--input' required defaultValue={false} style={{color: '#777'}}>
                        <option hidden label='Horario' />
                        <option value='Lunes 17'>Lunes 17</option>
                    </select>
                    <button type="submit" className="inscription--button">Enviar Inscripción</button>
                </div>
            </form>
        </div>
    );
}

export default Formulario;