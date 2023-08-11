import styles from './Modal.module.scss';
import PropTypes from 'prop-types';
const Modal=(props)=>{
    const {header, closeButton, text, actions, setIsModalOpen}=props;
    return (
        <div className={styles.modal} onClick={()=>{setIsModalOpen(false)}}>
            <div className={styles.modal__box} onClick={(e)=>e.stopPropagation()}>
                <header className={styles.modal__header}>{header}</header>
                {closeButton? <div className={styles.modal__close} onClick={()=>{setIsModalOpen(false)}}></div>:null}
                <p className={styles.modal__text}>{text}</p>
                <div className={styles.modal__buttonGroup}>
                    {actions}
                </div>
            </div>

        </div>
    );
}

Modal.propTypes={
    header: PropTypes.string.isRequired,
    closeButton: PropTypes.bool,
    text: PropTypes.string.isRequired,
    actions: PropTypes.object.isRequired,
    setIsModalOpen: PropTypes.func.isRequired
}

Modal.defaultProps={
    closeButton: null
}

export default Modal;