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
                    img={item.img}
                    specialization={item.specialization}
                    skill1={item.skill1}
                    skill2={item.skill2}
                    skill3={item.skill3}
                    skill4={item.skill4}
                    skill5={item.skill5}
                    skill6={item.skill6}
                    red={item.red}
                    red2={item.red2}
                    red3={item.red3}
                />    
            )}
        </section>
    );
}

export default Teachers;