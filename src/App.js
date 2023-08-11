import './App.scss';
import { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import Button from './components/Button/Button';
import Modal from './components/Modal/Modal';
import ProductGroup from './components/ProductGroup/ProductGroup';
import { getStateFromLocalStorage } from './utils/localStorageHelper';
import { CART_LS_KEY, SELECT_LS_KEY } from './constants';

function App() {
  const [isFirstModalOpen, setIsFirstModalOpen] = useState(false);
  const [isSecondModalOpen, setIsSecondModalOpen] = useState(false);
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  const getProducts = async () => {
    try {
      const productsResponse = await fetch('./products.json');
      const products = await productsResponse.json();
      products.map((product) => ({ ...product, isFavourite: false }));
      setProducts(products);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    const productsFromLs = getStateFromLocalStorage(SELECT_LS_KEY);
    if (!productsFromLs) {
      getProducts();
    } else if (productsFromLs) {
      setProducts(productsFromLs);
    }
    const cartFromLs = getStateFromLocalStorage(CART_LS_KEY);
    if (cartFromLs) {
      setCartItems(cartFromLs);
    }
  }, []);

  const openFirstModal = () => {
    setIsFirstModalOpen(true);
  };

  const openSecondModal = () => {
    setIsSecondModalOpen(true);
  };

  const modalTitle = 'Do you want to delete this file?';
  const modalTextFirst = `Once you delete this file, it won't be possible to undo this action.
    \nAre you sure you want to delete it?`;
  const modalTextSecond = `Lorem ipsum`;

  const closeFirstModal = () => {
    setIsFirstModalOpen(false);
  };

  const closeSecondModal = () => {
    setIsSecondModalOpen(false);
  };
  const modalFirstButtons = (
    <>
      <Button
        backgroundColor="#B2382B"
        text="Ok"
        onClick={() => {
          closeFirstModal();
        }}
      ></Button>
      <Button
        backgroundColor="#B2382B"
        text="Cancel"
        onClick={() => {
          closeFirstModal();
        }}
      ></Button>
    </>
  );
  const modalSecondButtons = (
    <>
      <Button
        backgroundColor="#B2382B"
        text="Ok2"
        onClick={() => {
          closeSecondModal();
        }}
      ></Button>
      <Button
        backgroundColor="#B2382B"
        text="Cancel2"
        onClick={() => {
          closeSecondModal();
        }}
      ></Button>
    </>
  );
  return (
    <div className="App">
      <Header products={products} cartItems={cartItems}></Header>
      <ProductGroup
        products={products}
        setCartItems={setCartItems}
        setProducts={setProducts}
      />
      <Button
        backgroundColor="red"
        onClick={() => {
          openFirstModal();
        }}
        text="Open first modal"
      ></Button>
      <Button
        backgroundColor="green"
        onClick={() => {
          openSecondModal();
        }}
        text="Open second modal"
      ></Button>
      {isFirstModalOpen && (
        <Modal
          header={modalTitle}
          closeButton={true}
          text={modalTextFirst}
          actions={modalFirstButtons}
          setIsModalOpen={setIsFirstModalOpen}
        />
      )}
      {isSecondModalOpen && (
        <Modal
          header={modalTitle}
          closeButton={false}
          text={modalTextSecond}
          actions={modalSecondButtons}
          setIsModalOpen={setIsSecondModalOpen}
        />
      )}
    </div>
  );
}

export default App;
