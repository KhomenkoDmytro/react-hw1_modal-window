import styles from './Header.module.scss';
import PropTypes from 'prop-types';
import {ReactComponent as StarIcon} from './star.svg';
import {ReactComponent as ShoppingCartIcon} from './shopping-cart.svg'

const Header =(props)=>{
    const {cartItems, products}=props;
    return(
        <header className={styles.header}>
            <div className={styles.header__name}>GlamourGarb - Sparkle and Beauty in Every Attire</div>
            <div className={styles.header__cartCounter}> <ShoppingCartIcon className={styles.header__shoppingCardIcon}/> {cartItems.reduce((acc, cartItem)=>acc+cartItem.count, 0)}</div>
            <div className={styles.header__favouriteCounter}> <StarIcon className={styles.header__starIcon}/> {products.reduce((acc, productItem) => (productItem.isFavourite ? acc + 1 : acc), 0)}</div>
       </header>
    )
}

Header.propTypes={
    cartItems: PropTypes.array.isRequired,
    products: PropTypes.array.isRequired
}

export default Header;