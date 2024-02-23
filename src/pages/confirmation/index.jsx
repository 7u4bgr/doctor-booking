import React, { useState } from "react";
import styles from "./index.module.css";
import Wrapper from "../../components/UI/wrapper";
import { CheckIcon, CloseIcon } from "../../icons";
import { Link } from "react-router-dom";
import ModalOverlay from "../../components/modal/";

const Confirmation = () => {
  const [colorClick1, setColorClick1] = useState(false);
  const [colorClick2, setColorClick2] = useState(false);
  const [colorClick3, setColorClick3] = useState(false);
  const [colorClick4, setColorClick4] = useState(true);
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [modalText, setModalText] = useState("");

  const trueClick1 = () => {
    setColorClick1(true);
    setColorClick2(false);
    setColorClick3(false);
    setColorClick4(false);
  };
  const trueClick2 = () => {
    setColorClick1(false);
    setColorClick2(true);
    setColorClick3(false);
    setColorClick4(false);
  };
  const trueClick3 = () => {
    setColorClick1(false);
    setColorClick2(false);
    setColorClick3(true);
    setColorClick4(false);
  };
  const trueClick4 = () => {
    setColorClick1(false);
    setColorClick2(false);
    setColorClick3(false);
    setColorClick4(true);
  };

  const historyClick = () => {
    window.history.back();
  };

  const handleConfirmation = () => {
    if (name.trim() === "" || lastName.trim() === "" || email.trim() === "" || phone.trim() === "") {
      setModalText("Please, fill all the required fields!");
      setShowModal(true);
    } else {
      setModalText("Confirmation successfully completed!");
      setShowModal(true);
      console.log("Confirm Booking:", { name, lastName, email, phone });
    }
  };

  return (
    <div className={styles.background}>
      <div className={styles.controlbackgrounds}>
        <Wrapper>
          <div className={styles.divsflex}>
            <div className={styles.leftbackground}>
              <div className={styles.lefttext}>
                <div className={styles.controltext1}>
                  <Link to={"/"} className={styles.numbertext}>
                    <h2 onClick={trueClick1} className={styles.a1}>
                      <CheckIcon />
                    </h2>
                    <h2 onClick={trueClick1} className={styles.a2}>
                      Staff
                    </h2>
                  </Link>
                  <Link to={"/service"} className={styles.numbertext1}>
                    <h2 onClick={trueClick2} className={styles.a1}>
                      <CheckIcon />
                    </h2>
                    <h2 onClick={trueClick2} className={styles.a2}>
                      Service
                    </h2>
                  </Link>
                  <Link to={"/dateandtime"} className={styles.numbertext2}>
                    <h2 onClick={trueClick3} className={styles.a1}>
                      <CheckIcon />
                    </h2>
                    <h2 onClick={trueClick3} className={styles.a2}>
                      Date & Time
                    </h2>
                  </Link>
                  <Link to={"/confirmation"} className={styles.numbertext3}>
                    <h2
                      style={{ color: colorClick4 ? "#53D56C" : "#626C76" }}
                      onClick={trueClick4}
                      className={styles.a1}
                    >
                      4
                    </h2>
                    <h2
                      style={{ color: colorClick4 ? "#53D56C" : "#626C76" }}
                      onClick={trueClick4}
                      className={styles.a2}
                    >
                      Confirmation
                    </h2>
                  </Link>
                </div>
              </div>
            </div>

            <div className={styles.rightbackground}>
              <div className={styles.nav}>
                <h2>Confirm details</h2>
                <CloseIcon />
              </div>
              <div className={styles.hr}>
                <hr />
              </div>
              <form action="" method="get" className={styles.formexample}>
                <div className={styles.formexample1}>
                  <label htmlFor="name">
                    First name <span>*</span>
                  </label>
                  <input
                    type="name"
                    name="name"
                    id="name"
                    required
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className={styles.formexample2}>
                  <label htmlFor="name">
                    Last name <span>*</span>
                  </label>
                  <input
                    type="name"
                    name="name"
                    id="email"
                    required
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
                <div className={styles.formexample3}>
                  <label htmlFor="name">
                    E-mail <span>*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className={styles.formexample4}>
                  <label htmlFor="name">Phone</label>
                  <input
                    type="number"
                    name="number"
                    id="number"
                    required
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
              </form>
              <div className={styles.formexample5}>
                <label htmlFor="name">Note</label>
                <div className={styles.note}>
                  <h2>Staff: <span>Alexy Rosetta</span> </h2>
                  <h2>Service: <span>Oral hygiene</span> </h2>
                  <h2>Date: <span>2024-03-04 / 09:30-10:00</span> </h2>
                  <h2>Price: <span className={styles.pricespan}>123$</span> </h2>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.twoflex}>
            <div className={styles.onepage}></div>
            <div className={styles.twopage}>
              <div className={styles.rightbutton}>
                <button onClick={() => historyClick()} className={styles.button1}>
                  BACK
                </button>

                <Link onClick={handleConfirmation}>Confirm Booking</Link>
              </div>
            </div>
          </div>
        </Wrapper>
      </div>
      {showModal && (
        <ModalOverlay
          onClose={() => setShowModal(false)}
          isEmpty={name.trim() === "" || lastName.trim() === "" || email.trim() === ""}
          modalText={modalText}
        />
      )}
    </div>
  );
};

export default Confirmation;
