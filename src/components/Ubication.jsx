import './Ubication.scss';

const Ubication = () => {
    const preLocation = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3'
    const location1 = '!1d3113.4464941556143!2d-62.288646985022396!3d-38.707556793483135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95edbb675877c957%3A0xf49928d485582f3c!2sMart%C3%ADn%20Rodr%C3%ADguez%20175%2C%20B8000HSC%20Bah%C3%ADa%20Blanca%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1676659320748!5m2!1ses-419!2sar';
    const location2 = '!1d3105.9834662855415!2d-62.07635028501583!3d-38.878620103490555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95ed77e2892cafd1%3A0x7a2a2986d1bff5f2!2sMitre%20631%2C%20Punta%20Alta%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1677611737308!5m2!1ses-419!2sar';
    const location3 = '!1d3105.86504953313!2d-62.08038597600076!3d-38.88132927652933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95ed9d59f8a6c445%3A0xb12fec1cb1a73627!2sBernardo%20de%20Irigoyen%20139%2C%20B8109%20Punta%20Alta%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1677611873254!5m2!1ses-419!2sar';
    const mapWidth = 360;
    const mapHeight = 290;
    return(
        <>
            <article className='location--card'>
                <iframe className='location--map' src={preLocation + location1} width={mapWidth} height={mapHeight} style={{border: 0, borderRadius: '6px'}} loading="lazy"></iframe>
                <h4 className='location--name'>Casa Trémolo</h4>
                <h5 className='location--city'>Bahía Blanca</h5>
                <p className='location--adress'>Martín Rodriguez 175</p>
            </article>
            <article className='location--card'>
                <iframe className='location--map' src={preLocation + location2} width={mapWidth} height={mapHeight} style={{border: 0, borderRadius: '6px'}}  loading="lazy"></iframe>
                <h4>Lo de Paca</h4>
                <h5>Punta Alta</h5>
                <p>Mitre 631</p>
            </article>
            <article className='location--card'>
                <iframe className='location--map' src={preLocation + location3} width={mapWidth} height={mapHeight} style={{border: 0, borderRadius: '6px'}} loading="lazy"></iframe>
                <h4>Asociación Española</h4>
                <h5>Punta Alta</h5>
                <p>Irigoyen 139</p>
            </article>
        </>
    );
}

export default Ubication;