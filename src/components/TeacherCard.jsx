import './Teachers.scss';

const TeacherCard = ({ 
    name, 
    img, 
    specialization, 
    text1,
    text2,
    text3,
    red1, 
    red2, 
    red3 
}) => {

    return(
        <article className="teacher--card">
            <div className="teacher--card__img">
                <img src={require(`../images/${img}`)} className="teacher--img" />
            </div>
            <div className="teacher--card__description description">
                <div className='description--container'>
                    <h3 className="description--title">{name}</h3>
                    <h4 className="description--subtitle">{specialization}</h4>
                    <p className="description--text">{text1}</p>
                    <p className="description--text">{text2}</p>
                    <p className="description--text">{text3}</p>
                    <div className="description--icons">
                        <span className="description--icon">{red1}</span>
                        <span className="description--icon">{red2}</span>
                        <span className="description--icon">{red3}</span>
                    </div>
                </div>
            </div>
        </article>
    );
}

export default TeacherCard;