import './Formulario.scss';
import './Modal.scss';
import useFormulario from '../hooks/useFormulario';
import useHours from '../hooks/useHours';
import { useState, useEffect, useRef, useMemo } from 'react';
import emailjs from '@emailjs/browser';
import Modal from './Modal';
import Input from './Input';

const inicial = {
    name: '',
    surname: '',
    email: '',
    phone: '',
    agegroup: '',
    city: '',
    professor: '',
    day: '',
    hour: ''
}

const regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

const validateForm = (formulario) => {
    let errors = {}
    if(!formulario.name.trim()) {
        errors.name = '*Este campo es requerido';
    } else if(!formulario.surname.trim()) {
        errors.surname = '*Este campo es requerido';
    } else if(!formulario.email.trim()) {
        errors.email = '*Este campo es requerido';
    } else if(!regexEmail.test(formulario.email.trim())) {
        errors.email = '*Debe ingresar un email válido'
    } else if(!formulario.phone.trim()) {
        errors.phone = '*Este campo es requerido';
    } else if(!formulario.agegroup.trim()) {
        errors.agegroup = '*Este campo es requerido';
    } else if(!formulario.city.trim()) {
        errors.city = '*Este campo es requerido';
    } else if(!formulario.professor.trim()) {
        errors.professor = '*Este campo es requerido';
    } else if(!formulario.hour.trim()) {
        errors.hour = '*Este campo es requerido';
    }
    return errors;
}

const Formulario = ({ submitted, setSubmitted }) => {
    const [active, setActive] = useState(true);
    const [required, setRequired] = useState(false);
    const [requiredSubmit, setRequiredSubmit] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [formulario, handleChange, handleBlur, errors] = useFormulario(inicial, validateForm);
    const [hours] = useHours();
    const [date, setDate] = useState(hours);

    useEffect(() => {
      const required = (formulario) => {
        if(formulario.name === '' ||
            formulario.surname === '' ||
            formulario.email === '' ||
            formulario.phone === '' ||
            formulario.agegroup === '' ||
            !regexEmail.test(formulario.email.trim())
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
            newArr = hours.filter(item => item.ciudad === formulario.city);
        }
        if(formulario.professor === 'Fernando Utizi') {
            newArr = newArr.filter(item => item.profesor === 'Fernando Utizi');
        } else if (formulario.professor === 'Uziel Leonel Acuña Martínez') {
            newArr = newArr.filter(item => item.profesor === 'Uziel Leonel Acuña Martínez');
        }
        setDate(newArr);
    }

    const handleFilterHour = () => {
        let newArr = date;
        if(formulario.day) {
            newArr = date.filter(item => item.dia === formulario.day);
        }
        setDate(newArr);
    }

    const memoizedDays = useMemo(() => {
        const days = {};
        return date.map((item) => {
          if (!days[item.dia]) {
            days[item.dia] = true;
            return (
                <option key={item.id} value={item.dia}>{item.dia}</option>
            );
          } else {
            return;
          }
        });
      }, [date]);

    return(
        <div className="inscription--container">
            <Modal formulario={formulario} showModal={showModal} />
            <form onSubmit={handleSubmit} ref={form} style={{display: 'flex'}}>
                <div className={`inscription--form form--${active} form--first`}>
                    <Input
                        name={"name"}
                        value={formulario.name}
                        type={"text"}
                        placeholder={"Nombre"}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        errors={errors.name}
                        autoFocus={true}
                    />
                    <Input
                        name={"surname"}
                        value={formulario.surname}
                        type={"text"}
                        placeholder={"Apellido"}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        errors={errors.surname}
                    />
                    <Input
                        name={"email"}
                        value={formulario.email}
                        type={"email"}
                        placeholder={"Correo Electrónico"}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        errors={errors.email}
                    />
                    <Input
                        name={"phone"}
                        value={formulario.phone}
                        type={"number"}
                        placeholder={"Teléfono"}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        errors={errors.phone}
                    />
                    <div>
                    <select name="agegroup" onChange={handleChange} onBlur={handleBlur} className='inscription--input' required defaultValue={false} style={{color: '#777'}}>
                        <option hidden label='Grupo Etario' />
                        <option value='Niño'>Niño</option>
                        <option value='Adolescente'>Adolescente</option>
                        <option value='Adulto'>Adulto</option>
                    </select>
                    {errors.agegroup && <p style={{margin: '0', position: 'absolute', color: '#e73f46'}}>{errors.agegroup}</p>}
                    </div>
                    <button onClick={() => setActive(!active)} disabled={!required} className='inscription--button' type='button'>Siguiente</button>
                </div>
                <div className={`inscription--form form--${!active} form--second finish--${submitted}`}>
                    <div>
                        <select name="city" onChange={handleChange} onBlur={handleBlur} className='inscription--input' required defaultValue={false} style={{color: '#777'}}>
                            <option hidden label='Ciudad' />
                            <option value='Bahía Blanca'>Bahía Blanca</option>
                            <option value='Punta Alta'>Punta Alta</option>
                            <option value='Online'>Online</option>
                        </select>
                        {errors.city && <p style={{margin: '0', position: 'absolute', color: '#e73f46'}}>{errors.city}</p>}
                    </div>
                    <div>
                        <select name="professor" onChange={handleChange} onBlur={handleBlur} className='inscription--input' required defaultValue={false} style={{color: '#777'}}>
                            <option hidden label='Profesor de preferencia' />
                            <option value='sin preferencia'>Sin preferencia</option>
                            <option value='Uziel Leonel Acuña Martínez'>Uziel Leonel Acuña Martínez</option>
                            <option value='Fernando Utizi'>Fernando Utizi</option>
                        </select>
                        {errors.professor && <p style={{margin: '0', position: 'absolute', color: '#e73f46'}}>{errors.professor}</p>}
                    </div>
                    <div>
                        <select disabled={formulario.city === '' || formulario.professor === ''} name="day" onClick={handleFilter} onChange={handleChange} onBlur={handleBlur} className='inscription--input' required defaultValue={false} style={{color: '#777'}}>
                            <option hidden label='Día' />
                            <option value='a definir'>A definir con el profesor</option>
                            {memoizedDays}
                        </select>
                        {errors.hour && <p style={{margin: '0', position: 'absolute', color: '#e73f46'}}>{errors.hour}</p>}
                    </div>
                    <div>
                        <select disabled={formulario.day === '' || formulario.city === '' || formulario.professor === ''} name="hour" onClick={handleFilterHour} onChange={handleChange} onBlur={handleBlur} className='inscription--input' required defaultValue={false} style={{color: '#777'}}>
                            <option hidden label='Horario' />
                            <option value='a definir'>A definir con el profesor</option>
                            {date.map(i => 
                                <option key={i.id} value={i.dia + " " + i.hora}>{i.hora} - {i.espacio}</option>    
                            )}
                        </select>
                        {errors.hour && <p style={{margin: '0', position: 'absolute', color: '#e73f46'}}>{errors.hour}</p>}
                    </div>
                    <button type="submit" disabled={!requiredSubmit} className="inscription--button">Enviar Inscripción</button>
                </div>
            </form>
        </div>
    );
}

export default Formulario;