import './Teachers.scss';
import TeacherCard from "./TeacherCard";
import teachers from "../teachers.json";

const Teachers = () => {
    return(
        <section className="teachers">
            <h2 className="subtitle">Nuestros&nbsp;<span>profesores</span></h2>
            {teachers.map(item => 
                <TeacherCard 
                    key={item.id}
                    name={item.name}
                    img={item.image}
                    specialization={item.specialization}
                    text1={item.text1}
                    text2={item.text2}
                    text3={item.text3}
                    red1={item.redes[0].name}
                    url1={item.redes[0].url}
                    red2={item.redes[1].name}
                    url2={item.redes[1].url}
                    red3={item.redes[2].name}
                    url3={item.redes[2].url}
                    red4={item.redes[3].name}
                    url4={item.redes[3].url}
                />    
            )}
        </section>
    );
}

export default Teachers;