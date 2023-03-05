import './Formulario.scss';
import './Modal.scss';
import useFormulario from '../hooks/useFormulario';
import useHours from '../hooks/useHours';
import { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import Modal from './Modal';

const Formulario = ({ submitted, setSubmitted,  }) => {
    const [active, setActive] = useState(true);
    const [required, setRequired] = useState(false);
    const [requiredSubmit, setRequiredSubmit] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [formulario, handleChange] = useFormulario({
        name: '',
        surname: '',
        email: '',
        phone: '',
        agegroup: '',
        city: '',
        professor: '',
        hour: ''
    });
    const [hours] = useHours();
    const [date, setDate] = useState(hours);

    useEffect(() => {
      const required = (formulario) => {
        if(formulario.name === '' ||
            formulario.surname === '' ||
            formulario.email === '' ||
            formulario.phone === '' ||
            formulario.agegroup === ''
        ) {
            setRequired(false);
        } else {
            setRequired(true);
        }
      }
      required(formulario);
    }, [formulario]);

    useEffect(() => {
      const requiredSubmit = (formulario) => {
        if(formulario.city === '' ||
            formulario.professor === '' ||
            formulario.hour === ''
        ) {
            setRequiredSubmit(false);
        } else {
            setRequiredSubmit(true);
        }
      }
      requiredSubmit(formulario);
    }, [formulario]);

    const form = useRef();
    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        emailjs.sendForm('service_tylurvk', 'template_oy0n19c', form.current, 'BWCL7ZUqJm6x267aG')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        setShowModal(true);
    }

    const handleFilter = () => {
        let newArr = hours;
        if(formulario.city) {
            newArr = hours.filter(item => item.ciudad == formulario.city);
        }
        if(formulario.professor == 'Fernando Utizi') {
            newArr = newArr.filter(item => item.profesor == 'Fernando Utizi');
        } else if (formulario.professor == 'Uziel Leonel Acuña Martínez') {
            newArr = newArr.filter(item => item.profesor == 'Uziel Leonel Acuña Martínez');
        }
        setDate(newArr);
    }

    return(
        <div className="inscription--container">
            <Modal formulario={formulario} showModal={showModal} />
            <form onSubmit={handleSubmit} ref={form} style={{display: 'flex'}}>
                <div className={`inscription--form form--${active} form--first`}>
                    <input name="name" value={formulario.name} onChange={handleChange} autoFocus type="text" placeholder='Nombre' required className="inscription--input" />
                    <input name="surname" value={formulario.surname} onChange={handleChange} type="text" placeholder='Apellido' required className="inscription--input" />
                    <input name="email" value={formulario.email} onChange={handleChange} type="text" placeholder='Correo Electrónico' required className="inscription--input" />
                    <input name="phone" value={formulario.phone} onChange={handleChange} type="number" placeholder='Teléfono' required className="inscription--input" />
                    <select name="agegroup" onChange={handleChange} className='inscription--input' required defaultValue={false} style={{color: '#777'}}>
                        <option hidden label='Grupo Etario' />
                        <option value='Niño'>Niño</option>
                        <option value='Adolescente'>Adolescente</option>
                        <option value='Adulto'>Adulto</option>
                    </select>
                    <button onClick={() => setActive(!active)} disabled={!required} className='inscription--button' type='button'>Siguiente</button>
                </div>
                <div className={`inscription--form form--${!active} form--second finish--${submitted}`}>
                    <select name="city" onChange={handleChange} className='inscription--input' required defaultValue={false} style={{color: '#777'}}>
                        <option hidden label='Ciudad' />
                        <option value='Bahía Blanca'>Bahía Blanca</option>
                        <option value='Punta Alta'>Punta Alta</option>
                        <option value='Punta Alta'>Online</option>
                    </select>
                    <select name="professor" onChange={handleChange} className='inscription--input' required defaultValue={false} style={{color: '#777'}}>
                        <option hidden label='Profesor de preferencia' />
                        <option value='sin preferencia'>Sin preferencia</option>
                        <option value='Uziel Leonel Acuña Martínez'>Uziel Leonel Acuña Martínez</option>
                        <option value='Fernando Utizi'>Fernando Utizi</option>
                    </select>
                    <select name="hour" onClick={handleFilter} onChange={handleChange} className='inscription--input' required defaultValue={false} style={{color: '#777'}}>
                        <option hidden label='Horario' />
                        <option value='a definir'>A definir con el profesor</option>
                        {date.map(i => 
                            <option key={i.id} value={i.dia + " " + i.hora}>{i.dia}: {i.hora}, lugar: {i.espacio}</option>    
                        )}
                    </select>
                    <button type="submit" disabled={!requiredSubmit} className="inscription--button">Enviar Inscripción</button>
                </div>
            </form>
        </div>
    );
}

export default Formulario;