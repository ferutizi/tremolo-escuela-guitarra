import './Teachers.scss';
import TeacherCard from "./TeacherCard";
import teachers from "../teachers.json";

const Teachers = () => {
    return(
        <section className="teachers--container">
            {teachers.map(item => 
                <TeacherCard 
                    key={item.id}
                    name={item.name}
                    img={item.image}
                    specialization={item.specialization}
                    text1={item.text1}
                    text2={item.text2}
                    text3={item.text3}
                    red={item.red}
                    red2={item.red2}
                    red3={item.red3}
                />    
            )}
        </section>
    );
}

export default Teachers;