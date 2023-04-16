import React, {useRef, useEffect} from 'react';
import classes from './styles.module.scss';

const Modal = ({showModal, children}) => {
  const modalRef = useRef();

  useEffect(() => {
    if (!showModal) {
      modalRef.current.classList.remove(classes.modalContainerActive);
      return;
    }
    modalRef.current.classList.add(classes.modalContainerActive);
  }, [showModal]);

  return (
    <div className={classes.modalContainer} ref={modalRef}>
      {children}
    </div>
  );
};

export default Modal;
