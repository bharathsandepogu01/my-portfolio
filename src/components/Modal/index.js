import React, {useEffect, useRef} from 'react';
import ReactDOM from 'react-dom';
import classes from './styles.module.scss';
import {Rubik} from 'next/font/google';
import clsx from 'clsx';

const rubik = Rubik({
  weight: ['300', '500', '600'],
  style: ['normal'],
  subsets: ['latin'],
});

const Modal = ({
  showModal,
  onOpenModal = () => {},
  onCloseModal = () => {},
  children,
}) => {
  const modalRef = useRef();

  useEffect(() => {
    if (!modalRef.current) return;
    if (showModal) {
      modalRef.current.classList.add(classes.modalContainerActive);
      document.body.classList.add(classes.bodyOverflowHidden);
      onOpenModal();
    } else {
      modalRef.current.classList.remove(classes.modalContainerActive);
      document.body.classList.remove(classes.bodyOverflowHidden);
      onCloseModal();
    }
  }, [showModal]);

  const portalChildren = (
    <div
      id="modal"
      className={clsx(rubik.className, classes.modalContainer)}
      ref={modalRef}>
      {showModal && children}
    </div>
  );

  return ReactDOM.createPortal(
    portalChildren,
    document.getElementById('modal-root'),
  );
};

export default Modal;
