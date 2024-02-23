import React, { useState } from "react";
import styles from "./index.module.css";
import Wrapper from "../../components/UI/wrapper";
import { CloseIcon } from "../../icons";
import Photo1 from "../../assets/images/photo1.jfif";
import Photo2 from "../../assets/images/photo2.jfif";
import { Link } from "react-router-dom";

const Home = () => {
  const [colorClick1, setColorClick1] = useState(true);

  const trueClick1 = () => {
    if (!colorClick1) {
      setColorClick1(true);
    }
  };
  const [select1, setSelect1] = useState(false);
  const [select2, setSelect2] = useState(false);
  const selectClick1 = () => {
    if (!select1) {
      setSelect1(true);
      setSelect2(false);
    }
  };
  const selectClick2 = () => {
    if (!select2) {
      setSelect2(true);
      setSelect1(false);
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
                    <h2
                      style={{ color: colorClick1 ? "#53D56C" : "#626C76" }}
                      onClick={trueClick1}
                      className={styles.a1}
                    >
                      1
                    </h2>
                    <h2
                      style={{ color: colorClick1 ? "#53D56C" : "#626C76" }}
                      onClick={trueClick1}
                      className={styles.a2}
                    >
                      Staff
                    </h2>
                  </Link>
                  <Link className={styles.numbertext1}>
                    <h2 className={styles.a1}>2</h2>
                    <h2 className={styles.a2}>Service</h2>
                  </Link>
                  <Link className={styles.numbertext2}>
                    <h2 className={styles.a1}>3</h2>
                    <h2 className={styles.a2}>Date & Time</h2>
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
                <h2>Select Staff</h2>
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
                  className={styles.borders}
                >
                  <div className={styles.photos}>
                    <img src={Photo1} alt="" />
                  </div>
                  <div className={styles.info}>
                    <h2>Alex Rosetta</h2>
                    <h3>alexyrosetta@egmail.com</h3>
                  </div>
                </div>
                <div
                  style={{
                    border: select2
                      ? "2px solid #53D56C"
                      : "1px solid transparent",
                  }}
                  onClick={selectClick2}
                  className={styles.borders}
                >
                  <div className={styles.photos}>
                    <img src={Photo2} alt="" />
                  </div>
                  <div className={styles.info}>
                    <h2>Maria July</h2>
                    <h3>mariajuly@egmail.com</h3>
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
                {select1 || select2 ? (
                  <Link to={"/service"}>NEXT</Link>
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

export default Home;
