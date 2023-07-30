import styles from './Button.module.scss';
const Button =(props)=>{
    const {backgroundColor, onClick, text}=props;
    return (
        <button className={styles.button} style={{backgroundColor: backgroundColor}} onClick={onClick}>{text}</button>
    )
}
export default Button;