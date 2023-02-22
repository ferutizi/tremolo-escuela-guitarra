import './Teachers.scss';

const TeacherCard = ({ 
    name, 
    img, 
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
            <div className="teacher--card__img">
                <img src={require(`../images/${img}`)} className="teacher--img" />
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
                        <a href={url1} target="_blank">
                            <img src={require(`../images/icons/${red1}.png`)} className="description--icon" />
                        </a>
                        <a href={url2} target="_blank">
                            <img src={require(`../images/icons/${red2}.png`)} className="description--icon" />
                        </a>
                        <a href={url3} target="_blank">
                            <img src={require(`../images/icons/${red3}.png`)} className="description--icon" />
                        </a>
                        <a href={url4} target="_blank">
                            <img src={require(`../images/icons/${red4}.png`)} className="description--icon" />
                        </a>
                    </div>
                </div>
            </div>
        </article>
    );
}

export default TeacherCard;