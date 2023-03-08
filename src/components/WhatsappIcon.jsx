import './WhatsappIcon.scss';

const WhatsappIcon = () => {
    return(
        <a href="https://api.whatsapp.com/send?phone=+5492932543010&text=Hola, me quiero inscribir a clases de guitarra" target="_blank" rel="noreferrer" >
            <img src={require('../images/wp_c.png')} alt="whatsapp-contact" className="icon--wp" />
        </a>
    );
}

export default WhatsappIcon;