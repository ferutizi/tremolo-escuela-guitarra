import './Ubication.scss';
import ubications from '../ubications.json';

const Ubication = () => {
    const preLocation = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3'
    const mapWidth = 360;
    const mapHeight = 290;
    return(
        <>
            {
                ubications.map(item =>
                    <article key={item.id} className='location--card'>
                        <iframe 
                            className='location--map'
                            src={preLocation + item.map}
                            width={mapWidth}
                            height={mapHeight}
                            loading="lazy">
                        </iframe>
                        <div className='location--description'>
                            <h4 className='location--name'>{item.name}</h4>
                            <h5 className='location--city'>{item.city}</h5>
                            <p className='location--adress'>{item.adress}</p>
                            <p className='location--phone'>+542932543010</p>
                        </div>
                    </article>
                )
            }
        </>
    );
}

export default Ubication;