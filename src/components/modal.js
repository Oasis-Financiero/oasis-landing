import React, {useRef, useEffect} from "react";
import closeIcon from "../images/icons/close.svg"
import { privacyText } from "./privacyPolicy";
import * as styles from "./modal.module.css"

const Modal = ({ isOpen, setModalData, type }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    document.addEventListener("mousedown", handleDocumentClick);
    return () => {
      document.removeEventListener("mousedown", handleDocumentClick);
    };
  }, []);

  function handleDocumentClick(event) {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      return;
    }
    setModalData({ isOpen: false, type: '' });
  }

  if (isOpen) {
    return (
      <div id={styles.modalDiv} ref={modalRef}>
        {
          type === 'privacyPolicy' ?
            <div id={styles.modalPanel}>
              <div id={styles.modalHeader}>
                <div id={styles.closeModal} onClick={() => setModalData({ isOpen: false, type: '' })}>
                  <img id={styles.closeIcon} alt="Close modal" src={closeIcon} />
                </div>
              </div>
              <div id={styles.modalBody}>
                {privacyText}
              </div>
            </div>
            :
            <div id={styles.modalPanelSubscribe}>
              <iframe style={{ overflow: 'hidden' }} src={'https://oasisfinanciero.substack.com/embed'} width={'298px'}></iframe>
            </div>
        }
      </div>
    );
  } else {
    return null
  }
}

export default Modal;