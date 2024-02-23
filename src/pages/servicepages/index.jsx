import React, { useState } from "react";
import styles from "./index.module.css";
import Wrapper from "../../components/UI/wrapper";
import { CheckIcon, CloseIcon } from "../../icons";
import Photo3 from "../../assets/images/photo3.jfif";
import Photo4 from "../../assets/images/photo4.jfif";
import Photo5 from "../../assets/images/photo5.jfif";
import { Link } from "react-router-dom";
const ServicePages = () => {
  const arr = [
    {
      id:1,
      job: "Oral hygiene",
      price:"50$",
      timejob: "1 hour",
      photo: `${Photo3}`,
    },
    {
      id:2,
      job: "Implants",
      price:"120$",
      timejob: "1 hour 30 minutes",
      photo: `${Photo4}`,
    },
    {
      id:3,
      job: "Check up",
      price:"140$",
      timejob: "1 hour 12 minutes",
      photo: `${Photo5}`,
    },
  ];
  const [colorClick2, setColorClick2] = useState(true);
  const trueClick2 = () => {
    if (!colorClick2) {
      setColorClick2(true);
    }
  };
  const [selectedItem,setSelectedItem]=useState(null)

  const selectClick1 = (i) => {
    sessionStorage.setItem("job",arr[i-1].job)
    sessionStorage.setItem("price",arr[i-1].price)
    setSelectedItem(i)
  
    
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
                  {arr.map((item)=>(

                  <div
                   style={{
                    border: selectedItem==item.id
                      ? "2px solid #53D56C"
                      : "1px solid transparent",
                  }}
                  onClick={()=>selectClick1(item.id)}
                  className={styles.flexsprice}>
                    <div className={styles.borders}>
                      <div className={styles.photos}>
                        <img src={item.photo} alt="" />
                      </div>
                      <div className={styles.info}>
                        <h2>{item.job}</h2>
                        <h3>{item.timejob}</h3>
                      </div>
                    </div>
                    <div className={styles.price}>
                      <h2>{item.price}</h2>
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
                  <button
                    onClick={() => historyClick()}
                    className={styles.button1}
                  >
                    BACK
                  </button>
                  {selectedItem ? (
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
