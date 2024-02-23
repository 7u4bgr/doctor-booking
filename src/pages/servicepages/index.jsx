import React, { useState } from "react";
import styles from "./index.module.css";
import Wrapper from "../../components/UI/wrapper";
import { CheckIcon, CloseIcon } from "../../icons";
import Photo3 from "../../assets/images/photo3.jfif";
import Photo4 from "../../assets/images/photo4.jfif";
import Photo5 from "../../assets/images/photo5.jfif";
import { Link } from "react-router-dom";
const ServicePages = () => {
  const [colorClick2, setColorClick2] = useState(true);

  const trueClick2 = () => {
    if (!colorClick2) {
      setColorClick2(true);
    }
  };
  const [select1, setSelect1] = useState(false);
  const [select2, setSelect2] = useState(false);
  const [select3, setSelect3] = useState(false);
  const selectClick1 = () => {
    if (!select1) {
      setSelect1(true);
      setSelect2(false);
      setSelect3(false)
    }
  };
  const selectClick2 = () => {
    if (!select2) {
      setSelect2(true);
      setSelect1(false);
      setSelect3(false)
    }
  };
  const selectClick3 = () => {
    if (!select3) {
      setSelect2(false);
      setSelect1(false);
      setSelect3(true)
    }
  };
  const historyClick = () => {
    window.history.back();
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
                    <h2 className={styles.a1}><CheckIcon/></h2>
                    <h2 className={styles.a2}>Staff</h2>
                  </Link>
                  <Link to={"/service"} className={styles.numbertext1}>
                    <h2
                      style={{ color: colorClick2 ? "#53D56C" : "#626C76" }}
                      onClick={trueClick2}
                      className={styles.a1}
                    >
                      2
                    </h2>
                    <h2
                      style={{ color: colorClick2 ? "#53D56C" : "#626C76" }}
                      onClick={trueClick2}
                      className={styles.a2}
                    >
                      Service
                    </h2>
                  </Link>
                  <Link className={styles.numbertext2}>
                    <h2 className={styles.a1}>3</h2>
                    <h2 className={styles.a2}> Date & Time</h2>
                  </Link>
                  <Link className={styles.numbertext3}>
                    <h2 className={styles.a1}>4</h2>
                    <h2 className={styles.a2}>Confirmation</h2>
                  </Link>
                </div>
              </div>
              
            </div>
           
              <div className={styles.rightbackground}>
                <div className={styles.nav}>
                  <h2>Select Service</h2>
                  <CloseIcon />
                </div>
                <div className={styles.hr}>
                <hr />
              </div>
                <div className={styles.users}>
                  <div
                   style={{
                    border: select1
                      ? "2px solid #53D56C"
                      : "1px solid transparent",
                  }}
                  onClick={selectClick1}
                  className={styles.flexsprice}>
                    <div className={styles.borders}>
                      <div className={styles.photos}>
                        <img src={Photo3} alt="" />
                      </div>
                      <div className={styles.info}>
                        <h2>Oral hygiene</h2>
                        <h3>1 hour</h3>
                      </div>
                    </div>
                    <div className={styles.price}>
                      <h2>50$</h2>
                    </div>
                  </div>
                  <div
                   style={{
                    border: select2
                      ? "2px solid #53D56C"
                      : "1px solid transparent",
                  }}
                  onClick={selectClick2}
                  className={styles.flexsprice}>
                    <div className={styles.borders}>
                      <div className={styles.photos}>
                        <img src={Photo4} alt="" />
                      </div>
                      <div className={styles.info}>
                        <h2>Implants</h2>
                        <h3>1 hour 30 minutes</h3>
                      </div>
                    </div>
                    <div className={styles.price}>
                      <h2>120$</h2>
                    </div>
                  </div>
                  <div
                   style={{
                    border: select3
                      ? "2px solid #53D56C"
                      : "1px solid transparent",
                  }}
                  onClick={selectClick3}
                  className={styles.flexsprice}>
                    <div className={styles.borders}>
                      <div className={styles.photos}>
                        <img src={Photo5} alt="" />
                      </div>
                      <div className={styles.info}>
                        <h2>Check up</h2>
                        <h3>1 hour 12 minutes</h3>
                      </div>
                    </div>
                    <div className={styles.price}>
                      <h2>140$</h2>
                    </div>
                  </div>
                </div>
             
             
              </div>
          
          </div>
          <div className={styles.twoflex}>
            <div className={styles.onepage}></div>
            <div className={styles.twopage}>
              {" "}
              <div className={styles.rightbutton}>
                  <button
                    onClick={() => historyClick()}
                    className={styles.button1}
                  >
                    BACK
                  </button>
                  {select1 || select2 || select3 ? (
                    <Link to={"/dateandtime"}>NEXT</Link>
                  ) : (
                    <div>
                    
                    </div>
                  )}
                </div>
            </div>
          </div>
        </Wrapper>
      </div>
    </div>
  );
};

export default ServicePages;
