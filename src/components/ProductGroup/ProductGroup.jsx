import ProductCard from '../ProductCard/ProductCard';
import styles from './ProductGroup.module.scss';
import PropTypes from 'prop-types';
const ProductGroup=(props)=>{
    const {setProducts, setCartItems, products}= props;
    return (
        <div className={styles.productGroup}>
        {products.map(product=> <ProductCard key={product.id} products={products} productData={product} setCartItems={setCartItems} setProducts={setProducts} ></ProductCard>)}
        </div>);
}
ProductGroup.propTypes={
    products: PropTypes.array.isRequired,
    setCartItems: PropTypes.func.isRequired
}
export default ProductGroup;
