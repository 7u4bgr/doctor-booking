import React from "react";
import styles from "./index.module.css";
import { CloseIcon } from "../../icons/index";

const ModalOverlay = ({ onClose, isEmpty }) => {
  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.close} onClick={onClose}>
          <CloseIcon />
        </div>
        <div className={styles.text}>
          {isEmpty ? (
            <h2 style={{ color: "#F39C12" }}>
              Please, fill all the required fields!
            </h2>
          ) : (
            <h2 style={{ color: "#38CF78" }}>
              Confirmation successfully completed!
            </h2>
          )}
        </div>
      </div>
    </div>
  );
};

export default ModalOverlay;
