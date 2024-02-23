import React, { useEffect, useState } from "react";
import styles from "./index.module.css";
import Wrapper from "../../components/UI/wrapper";
import { CheckIcon, CloseIcon } from "../../icons";
import { Link } from "react-router-dom";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import TimePicker from "react-time-picker";
import "react-time-picker/dist/TimePicker.css";
import "react-clock/dist/Clock.css";
const DateTime = () => {
  const [colorClick1, setColorClick1] = useState(false);
  const [colorClick2, setColorClick2] = useState(false);
  const [colorClick3, setColorClick3] = useState(true);

  const trueClick1 = () => {
    if (!colorClick1) {
      setColorClick1(true);
      setColorClick2(false);
      setColorClick3(false);
    }
  };
  const trueClick2 = () => {
    if (!colorClick2) {
      setColorClick1(false);
      setColorClick2(true);
      setColorClick3(false);
    }
  };
  const trueClick3 = () => {
    if (!colorClick3) {
      setColorClick1(false);
      setColorClick2(false);
      setColorClick3(true);
    }
  };

  const historyClick = () => {
    window.history.back();
  };
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);
  const [value, onChange] = useState("10:00");
  const [select1, setSelect1] = useState(false);
  const [select2, setSelect2] = useState(false);
  const selectClick1 = () => {
    if (!select1) {
      setSelect1(true);
      setSelect2(true);
    }
  };
  const selectClick2 = () => {
    if (!select2) {
      setSelect2(true);
      setSelect1(false);
    }
  };
  const calendarHandler=(e)=>{
     sessionStorage.setItem("year",e.getFullYear())
     sessionStorage.setItem("months",e.getMonth())
     sessionStorage.setItem("day",e.getDate())
  }
  const timeHandler=()=>{
    sessionStorage.setItem("time",value)
    
  }
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
                    <h2
                      style={{ color: colorClick3 ? "#53D56C" : "#626C76" }}
                      onClick={trueClick3}
                      className={styles.a1}
                    >
                      3
                    </h2>
                    <h2
                      style={{ color: colorClick3 ? "#53D56C" : "#626C76" }}
                      onClick={trueClick3}
                      className={styles.a2}
                    >
                      Date & Time
                    </h2>
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
                <h2>Select date & time</h2>
                <CloseIcon />
              </div>
              <div className={styles.hr}>
                <hr />
              </div>
              <div className={styles.calendar}>
                <div onClick={selectClick1}>
                  <Calendar onChange={(e)=>calendarHandler(e)} className={styles.date} />
                </div>
                <div onClick={selectClick2}>
                  <TimePicker
                    className={styles.times}
                    type="time"
                    onChange={onChange}
                    value={value}
                  />
                </div>
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
                {select1 && select2 ? (
                  <Link onClick={()=>timeHandler()} to={"/confirmation"}>NEXT</Link>
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

export default DateTime;
