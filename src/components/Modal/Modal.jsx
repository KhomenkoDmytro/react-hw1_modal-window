import styles from './Modal.module.scss';

const Modal=(props)=>{
    const {header, closeButton, text, actions, setIsModalOpen}=props;
    return (
        <div className={styles.modal} onClick={()=>{setIsModalOpen(false)}}>
            <div className={styles.modal__box} onClick={(e)=>e.stopPropagation()}>
                <header className={styles.modal__header}>{header}</header>
                {closeButton? <div className={styles.modal__close}></div> :null}
                <p className={styles.modal__text}>{text}</p>
                <div className={styles.modal__buttonGroup}>
                    {actions}
                </div>
            </div>

        </div>
    );
}
export default Modal;