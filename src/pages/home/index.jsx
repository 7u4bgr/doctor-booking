import React, { useState } from "react";
import styles from "./index.module.css";
import Wrapper from "../../components/UI/wrapper";
import { CloseIcon } from "../../icons";
import Photo1 from "../../assets/images/photo1.jfif";
import Photo2 from "../../assets/images/photo2.jfif";
import { Link } from "react-router-dom";

const Home = () => {
  const arr = [
    {
      id:1,
      name: "Alex Rosetta",
      email: "alexyrosetta@egmail.com",
      photo: `${Photo1}`,
    },
    {
      id:2,
      name: "Maria July",
      email: "mariajuly@egmail.com",
      photo: `${Photo2}`,
    },
  ];
  const [colorClick1, setColorClick1] = useState(true);
  const trueClick1 = () => {
    if (!colorClick1) {
      setColorClick1(true);
    }
  };
  const [selectedItem,setSelectedItem]=useState(null)
  const selectClick1 = (i) => {
    sessionStorage.setItem("name",arr[i-1].name)
    sessionStorage.setItem("email",arr[i-1].email)
    setSelectedItem(i)
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
                {arr.map((item) => (
                  <div
                    style={{
                      border: selectedItem==item.id
                        ? "2px solid #53D56C"
                        : "1px solid transparent",
                    }}
                    onClick={()=>selectClick1(item.id)}
                    className={styles.borders}
                  >
                    <div className={styles.photos}>
                      <img src={item.photo} alt="" />
                    </div>
                    <div className={styles.info}>
                      <h2>{item.name}</h2>
                      <h3>{item.email}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className={styles.twoflex}>
            <div className={styles.onepage}></div>
            <div className={styles.twopage}>
             
              <div className={styles.rightbutton}>
                {selectedItem  ? (
                  <Link to={"/service"}>NEXT</Link>
                ) : (
                  <div></div>
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
