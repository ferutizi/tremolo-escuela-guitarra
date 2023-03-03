import './Modal.scss';

const Modal = ({children, estado}) => {

    return(
        <>
            {estado ? 
                <div className="modal--overlay">
                    <div className="modal--card">
                        {children}
                    </div>
                </div>
                : null
            }
        </>
    );
}

export default Modal;