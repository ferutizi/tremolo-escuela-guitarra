import './Teachers.scss';

const TeacherCard = ({ 
    name, 
    img, 
    specialization, 
    skill1, 
    skill2, 
    skill3, 
    skill4, 
    skill5, 
    skill6, 
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
                <p className="description--title">{name}</p>
                <p className="description--subtitle">{specialization}</p>
                <ul className="description--ul">
                    <li className="description--skill">{skill1}</li>
                    <li className="description--skill">{skill2}</li>
                    <li className="description--skill">{skill3}</li>
                    <li className="description--skill">{skill4}</li>
                    <li className="description--skill">{skill5}</li>
                    <li className="description--skill">{skill6}</li>
                </ul>
                <div className="description--icons">
                    <span className="description--icon">{red1}</span>
                    <span className="description--icon">{red2}</span>
                    <span className="description--icon">{red3}</span>
                </div>
            </div>
        </article>
    );
}

export default TeacherCard;