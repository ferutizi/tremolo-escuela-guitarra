import './Formulario.scss';

const Formulario = () => {
    const active = true;
    return(
        <div className="inscription--container">
            <form>
                <div className={`inscription--form form--${active}`}>
                    <input placeholder='Nombre' required className="inscription--input" />
                    <input placeholder='Apellido' required className="inscription--input" />
                    <input placeholder='Correo Electrónico' required className="inscription--input" />
                    <input placeholder='Teléfono' required className="inscription--input" />
                    <select className='inscription--input' required defaultValue={false} style={{color: '#777'}}>
                        <option hidden label='Grupo Etario' />
                        <option value='Niño'>Niño</option>
                        <option value='Adolescente'>Adolescente</option>
                        <option value='Adulto'>Adulto</option>
                    </select>
                    <button className='inscription--button' type='button'>Enviar</button>
                </div>
                <div className={`inscription--form form--${active}`}>
                    <select className='inscription--input' required defaultValue={false} style={{color: '#777'}}>
                        <option hidden label='Ciudad' />
                        <option value='Bahía Blanca'>Bahía Blanca</option>
                        <option value='Punta Alta'>Punta Alta</option>
                    </select>
                    <select className='inscription--input' required defaultValue={false} style={{color: '#777'}}>
                        <option hidden label='Profesor de preferencia' />
                        <option value='sin preferencia'>Sin preferencia</option>
                        <option value='Uziel Leonel Acuña Martínez'>Uziel Leonel Acuña Martínez</option>
                        <option value='Fernando Utizi'>Fernando Utizi</option>
                    </select>
                    <select className='inscription--input' required defaultValue={false} style={{color: '#777'}}>
                        <option hidden label='Horario' />
                        <option value='Lunes 17'>Lunes 17</option>
                    </select>
                </div>
            </form>
        </div>
    );
}

export default Formulario;