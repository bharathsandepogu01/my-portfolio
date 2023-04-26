import React, {useRef, useEffect} from 'react';
import classes from './styles.module.scss';

const Modal = ({showModal, children}) => {
  const modalRef = useRef();

  useEffect(() => {
    if (!showModal) {
      modalRef.current.classList.remove(classes.modalContainerActive);
      document.body.classList.remove(classes.bodyOverflowHidden);
      return;
    }
    modalRef.current.classList.add(classes.modalContainerActive);
    document.body.classList.add(classes.bodyOverflowHidden);
  }, [showModal]);

  return (
    <div className={classes.modalContainer} ref={modalRef}>
      {children}
    </div>
  );
};

export default Modal;
