import './App.scss';
import { useState } from 'react';
import Button from './components/Button/Button';
import Modal from './components/Modal/Modal';

function App() {
  const [isFirstModalOpen, setIsFirstModalOpen] = useState(false);
  const [isSecondModalOpen, setIsSecondModalOpen] = useState(false);

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
