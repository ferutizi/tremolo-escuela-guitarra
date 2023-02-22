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
            <div>
                <img className="teacher--img">{img}</img>
            </div>
            <div>
                <p className="teacher--title">{name}</p>
                <p className="teacher--subtitle">{specialization}</p>
                <ul className="teacher--ul">
                    <li className="teacher--skill">{skill1}</li>
                    <li className="teacher--skill">{skill2}</li>
                    <li className="teacher--skill">{skill3}</li>
                    <li className="teacher--skill">{skill4}</li>
                    <li className="teacher--skill">{skill5}</li>
                    <li className="teacher--skill">{skill6}</li>
                </ul>
                <div className="teacher--icons">
                    <span className="teacher--icon">{red1}</span>
                    <span className="teacher--icon">{red2}</span>
                    <span className="teacher--icon">{red3}</span>
                </div>
            </div>
        </article>
    );
}

export default TeacherCard;