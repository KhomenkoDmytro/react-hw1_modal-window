import styles from './Button.module.scss';
import PropTypes from 'prop-types';
const Button =(props)=>{
    const {backgroundColor, onClick, text, textColor, textTransform}=props;
    return (
        <button className={styles.button} style={{backgroundColor: backgroundColor, color: textColor, textTransform: textTransform}} onClick={onClick}>{text}</button>
    )
}
Button.propTypes={
    backgroundColor: PropTypes.string,
    onClick: PropTypes.func,
    text: PropTypes.string.isRequired,
    textColor: PropTypes.string,
    textTransform: PropTypes.string
};
Button.defaultTypes={
    backgroundColor: 'white',
    onClick: ()=>{},
    color: 'black',
    textTransform: 'none'
};
export default Button;