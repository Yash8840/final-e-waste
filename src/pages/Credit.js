import React, { useRef, useState } from "react";
import classes from './Credit.module.css'
import robot from "../assets/robot-with-recycle-symbol-removebg-preview 4.png";

import debitIcon from "../assets/debit-card (1).png";

const Credit = () => {
  const selectRef = useRef();
  const [creditCount, setCreditCount] = useState('Credit Score')
  const evaluateHandler = ()=>{
    const val = selectRef.current.value;
    if(val === 'Mobile'){
      setCreditCount('100')
    }
    if(val === 'Laptop'){
      setCreditCount('500')
    }
    if(val === 'Printer'){
      setCreditCount('600')
    }
    if(val === 'Television'){
      setCreditCount('900')
    }
    if(val === 'Keyboard'){
      setCreditCount('300')
    }
    if(val === 'Mouse'){
      setCreditCount('50')
    }
    if(val === 'Air Conditioner'){
      setCreditCount('2000')
    }
    if(val === 'Microwave'){
      setCreditCount('2500')
    }

    
    
  }
  return (
    
    <div className={classes.creditContainer}>
      <h1 className={classes.creditH1}>
        Your E-waste Credit <img src={debitIcon} alt="" className={classes.creditH1Img}/>
      </h1>
      <div className={classes.inner}>
        <div className={classes.robot}>
          <img src={robot} alt="robot-img" className={classes.robotImg}/>
        </div>
        <div className={classes.creditForm}>
          <div className={classes['creditForm-1']}>
            <div className={classes['e-type']}>
              <span className={classes.spanCredit}>E-waste Type</span>
              <select ref={selectRef} className={classes.selectDevice}>
                <option value="" disabled selected hidden>
                  Select Device Type
                </option>
                <option value="Laptop">Laptop</option>
                <option value="Mobile">Mobile</option>
                <option value="Printer">Printer</option>
                <option value="Television">Television</option>
                <option value="Keyboard">Keyboard</option>
                <option value="Mouse">Mouse</option>
                <option value="Air Conditioner">Air Conditioner</option>
                <option value="Microwave">Microwave</option>
              </select>
            </div>

            <div className={classes['e-company']}>
              <span className={classes.spanCredit}>Company Name</span>
              <input type="text" placeholder="e-waste company" className={classes.meow}/>
            </div>
          </div>

          <div className={classes['creditForm-2']}>
            <div className={classes["e-model"]}>
              <span className={classes.spanCredit}>Model No.</span>
              <input type="text" placeholder="e-waste model No." className={classes.meow}/>
            </div>

            <div className={classes['e-year']}>
              <span className={classes.spanCredit}>Year Of purchase</span>
              <input type="text" placeholder="Purchase Year" className={classes.meow}/>
            </div>
          </div>
          <div className={classes.creditCounter}>
            <span style={{ fontSize: "22px" }} className={classes.spanCredit}>Your Credit-</span>
            <div className={classes.creditNo}>{creditCount}</div>
          </div>
          <div className={classes.evalDiv}>
            <button onClick={evaluateHandler}>Evaluate</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Credit;
