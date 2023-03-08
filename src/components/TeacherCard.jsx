import './Teachers.scss';

const TeacherCard = ({ 
    name, 
    img, 
    photo,
    specialization, 
    text1,
    text2,
    text3,
    red1, 
    url1,
    red2,
    url2, 
    red3,
    url3,
    red4,
    url4
}) => {

    return(
        <article className="teacher--card">
            <div className="teacher--card__img" style={{position: 'relative'}}>
                <img src={require(`../images/${img}`)} className="teacher--img" />
                <img className={`teacher--${photo}`} src={require(`../images/${photo}.png`)} />
            </div>
            <div className="teacher--card__description description">
                <div className='description--container'>
                    <div>
                        <h3 className="description--title">{name}</h3>
                        <h4 className="description--subtitle">{specialization}</h4>
                    </div>
                    <div>
                        <p className="description--text">{text1}</p>
                        <p className="description--text">{text2}</p>
                        <p className="description--text">{text3}</p>
                    </div>
                    <div className="description--icons">
                        <a href={url1} target="_blank" rel="noreferrer">
                            <img src={require(`../images/icons/${red1}_c.png`)} alt={red1} className="description--icon" />
                        </a>
                        <a href={url2} target="_blank" rel="noreferrer">
                            <img src={require(`../images/icons/${red2}_c.png`)} alt={red2} className="description--icon" />
                        </a>
                        <a href={url3} target="_blank" rel="noreferrer">
                            <img src={require(`../images/icons/${red3}_c.png`)} alt={red3} className="description--icon" />
                        </a>
                        <a href={url4} target="_blank" rel="noreferrer">
                            <img src={require(`../images/icons/${red4}_c.png`)} alt={red4} className="description--icon" />
                        </a>
                    </div>
                </div>
            </div>
        </article>
    );
}

export default TeacherCard;