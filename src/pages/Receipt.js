import React from "react";
import "./Receipt.css";

const Receipt = () => {
  return (
    <>
      <div className="bg">
        <div className="navwa">
          <img src="logo.png" className="image" alt="" />
          <ul className="list">
            <li>
              <a href="#" className="l1">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="l1">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="l1">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" className="l1">
                LogIn/SignUp
              </a>
            </li>
            <li>
              <span className="material-symbols-outlined">search</span>
              <span className="material-symbols-outlined">person</span>
            </li>
          </ul>
        </div>
        {/* <br></br> */}
        <div>
          <h1 className="rec">ADD RECEIPT</h1>
        </div>
        <div className="tablewa">
          <table className="tab">
            <tr>
              <th style={{ padding: "20px" }}>Sl No.</th>
              <th>ITEM</th>
              <th>ADD REEIPT</th>
              <th>STATUS</th>
              <th>PROCEED</th>
            </tr>
            <tr>
              <td>1.</td>
              <td>
                <div className="item">ITEM</div>
              </td>
              <td>
                <div className="receipt">
                  ADD RECEIPT
                  <span className="material-symbols-outlined">add</span>
                </div>
              </td>
              <td>
                <div className="verified">VERIFIED</div>
              </td>
              <td>
                <div className="add">ADD</div>
              </td>
            </tr>
            <tr>
              <td>2.</td>
              <td>
                <div className="item">ITEM</div>
              </td>
              <td>
                <div className="receipt">
                  ADD RECEIPT
                  <span className="material-symbols-outlined">add</span>
                </div>
              </td>
              <td>
                <div className="verified">VERIFIED</div>
              </td>
              <td>
                <div className="add">ADD</div>
              </td>
            </tr>
            <tr>
              <td>3.</td>
              <td>
                <div className="item">ITEM</div>
              </td>
              <td>
                <div className="receipt">
                  ADD RECEIPT
                  <span className="material-symbols-outlined">add</span>
                </div>
              </td>
              <td>
                <div className="verified">VERIFIED</div>
              </td>
              <td>
                <div className="add">ADD</div>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </>
  );
};

export default Receipt;
