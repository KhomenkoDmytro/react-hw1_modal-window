import { useState } from 'react';
import styles from './ProductCard.module.scss';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';
import PropTypes from 'prop-types';
import {CART_LS_KEY, SELECT_LS_KEY} from '../../constants';
import {saveStateToLocalStorage} from '../../utils/localStorageHelper';
import {ReactComponent as StarIconPlus} from './star-plus.svg';
import {ReactComponent as StarIconRemove} from './star-remove.svg';

const ProductCard=(props)=>{
    const {products, setProducts, productData, setCartItems}=props;
    const [isOpenModal, setIsModalOpen]=useState(false);

    const switchModal=()=>{
        setIsModalOpen(!isOpenModal);
    }

    const handleAddCartItem=()=>{
      setCartItems((prev)=>{
        const newCartState=[...prev];
        const index=newCartState.findIndex((cartItem)=>cartItem.id===productData.id);
        if(index !== -1){
          newCartState[index].count++;
          saveStateToLocalStorage(CART_LS_KEY, newCartState);
          return newCartState;
        } else {
          const newState=[{name: productData.name, id: productData.id, price: productData.price, isFavourite:productData.isFavourite, count: 1}, ...prev];
          console.log(newState);
          saveStateToLocalStorage(CART_LS_KEY, newState);
          return newState;
        }
      });
    }
    
    const switchIsFavourite=()=>{
      setProducts((prev)=>{
        const newState=[...prev];
        const index=products.findIndex((item)=>item.id===productData.id);
        newState[index].isFavourite=!prev[index].isFavourite;
        saveStateToLocalStorage(SELECT_LS_KEY, newState);
        console.log(newState);
        return newState;
      });
    }

    const modalButtons = (
        <>
          <Button
            backgroundColor="#B2382B"
            text="Ok"
            onClick={() => {
              handleAddCartItem();
              switchModal();
            }}
          ></Button>
          <Button
            backgroundColor="#B2382B"
            text="Cancel"
            onClick={() => {
              switchModal();
            }}
          ></Button>
        </>
      );

    return(
        <div className={styles.card}>
            <div className={styles.card__imageWrapper}>
                
                {productData.isFavourite? <StarIconRemove className={styles.card__starIconRemove} onClick={()=>{switchIsFavourite()}}/> : <StarIconPlus className={styles.card__starIconPlus} onClick={()=>{switchIsFavourite()}}/>}
                <img className={styles.card__image} src={productData.image} alt={productData.name} />
            </div>
            <div className={styles.card__info}>
            <div className={styles.card__name}>{productData.name}</div>
            <p className={styles.card__text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <div className={styles.card__color}>Колір: {productData.color}</div>
            <div className={styles.card__priceAndButton}>
            <div className={styles.card__price}>${productData.price}</div>
            <Button backgroundColor='black' text='Add to cart' onClick={()=>{
                switchModal();
            }} textColor='white' textTransform='uppercase'
            ></Button>
            </div>
            {isOpenModal?
            <Modal
            header='Ви дійсно хочете додати цей товар у кошик?'
            closeButton={true}
            text='Якщо так натисніть ОК'
            actions={modalButtons}
            setIsModalOpen={setIsModalOpen}
            setCartItem={setCartItems}
            />:null}
            </div>
        </div>
    )
}

ProductCard.propTypes={
  productData: PropTypes.object.isRequired,
  setCartItems: PropTypes.func.isRequired
}

export default ProductCard;