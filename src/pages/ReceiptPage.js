import React, { useContext, useEffect, useRef, useState } from "react";
import "./ReceiptPage.css";
import logo from "../assets/logo.png";
import search from "./search.png";
import user from "./user.png";
import AddIcon from "@mui/icons-material/Add";
import AuthContext from "../Context/AuthContext";
import { doc, onSnapshot, updateDoc } from "firebase/firestore";
import { db, storage } from "../firebase";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { NavLink, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function ReceiptPage() {
  const showToastMessage = () => {
    toast.success('Receipt Added Successfully', {
        position: toast.POSITION.TOP_RIGHT
    });
};
  const [error, setError] = useState(false);
  const [loading, setIsLoading] = useState(false);
  const inputRef1 = useRef();

  const authCtx = useContext(AuthContext);
  console.log(authCtx.currentUser);

  const [data, setData] = useState(null);
  console.log(data);

  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    // we'll use realtime updation using "useSnapshot"
    const getChats = () => {
      const unsub = onSnapshot(
        doc(db, "verification", currentUser.uid),
        (doc) => {
          console.log("Current data: ", doc.data());
          setData(doc.data());
        }
      );
      return () => {
        unsub();
      };
    };

    currentUser.uid && getChats(); // call this function only if a user is present
  }, [currentUser.uid]);

  const addHandler = (e) => {
    console.log(e.target.closest("tr").querySelector("input").files);
    const file = e.target.closest("tr").querySelector("input").files[0];
    console.log(file);
    try {
      const storageRef = ref(storage, file.name); 

      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on( 
        'state_changed',
        (snapshot) => {
          setIsLoading(true);
          // Observe state change events such as progress, pause, and resume
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          // setProgress(progress)
          console.log('Upload is ' + progress + '% done');
        }, 
        (error) => {
          // Handle unsuccessful uploads
          console.log(error.message);
        }, 
        () => {
          // Handle successful uploads on complete
          // For instance, get the download URL: https://firebasestorage.googleapis.com/...
          getDownloadURL(uploadTask.snapshot.ref).then(async(downloadURL) => {
            console.log('File available at', downloadURL);
            
            
            await updateDoc(doc(db,"verification",currentUser.uid),{
              receiptURL : downloadURL
            }) 
            setIsLoading(false);
          });
        }
      );
      
    } catch (error) {
      console.log("bhaari error hogayi..");
      setError(true);
    }
  };
  const navigate = useNavigate();
  return (
    <div className="bg">
      <div>
        <img src={logo} className="image" />
        <ul className="list">
          <li>
            <NavLink to='/'  className="l1" onClick={() => navigate(-1)} style={{cursor:'pointer', fontWeight:'bold'}}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to='/redeemVouchers' className="l1" style={{fontWeight:'bold'}}>
              Vouchers
            </NavLink>
          </li>
          <li>
            <a href="#" className="l1" style={{fontWeight:'bold'}}>
              Contact Us
            </a>
          </li>
          
          <li>
            <div className="flex gap-[0.6rem] pr-[2rem]">
              <img src={search} alt="" className="w-[1.5rem] h-[1.5rem]" />
              <img src={user} alt="" className="w-[1.5rem] h-[1.5rem]" />
            </div>
          </li>
        </ul>
      </div>
      <br />
      <div className="tableback">
        <div>
          <h1 className="rec">ADD RECEIPT</h1>
        </div>
        <div className="tabfirst">
          <table className="tab  shadow-xl shadow-black">
            <tr>
              <th style={{ padding: "20px" }}>Sl No.</th>
              <th>ITEM</th>
              <th>ADD RECEIPT</th>
              <th>STATUS</th>
              <th>PROCEED</th>
            </tr>
            <tr>
              <td>1.</td>
              <td>
                <div className="item"><select className="selection">
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
              </select></div>
              </td>
              <td>
                <div className="receipt">
                  <input style={{ display: "none" }}type="file" id="file" />
                  <label htmlFor="file">
                    {!loading && 'ADD RECEIPT'}
                    {loading && 'ADDING...'}
                    <span className="material-symbols-outlined">
                      <AddIcon />
                    </span>
                  </label>
                </div>
              </td>
              <td>
                <div className={data && data.isVerified ? "greenwa" : "verified"}>{data && data.isVerified ? 'Verified' : 'Add your receipt'}</div>
              </td>
              <td>
                <div className="add" onClick={addHandler}>
                  {data && !data.isVerified &&(<span onClick={showToastMessage}>ADD</span>)}
                  {data && data.isVerified && <NavLink to='/certification'>Get Certificate</NavLink>}

                </div>
              </td>
            </tr>
            <tr>
              <td>2.</td>
              <td>
                <div className="item"><select className="selection">
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
              </select></div>
              </td>
              <td>
                <div className="receipt">
                  <input style={{ display: "none" }} type="file" id="file" />
                  <label htmlFor="file">
                    ADD RECEIPT
                    <span className="material-symbols-outlined">
                      <AddIcon />
                    </span>
                  </label>
                </div>
              </td>
              <td>
                <div className="verified">Add your receipt</div>
              </td>
              <td>
                <div className="add" onClick={addHandler}>
                  ADD
                </div>
              </td>
            </tr>
            <tr>
              <td>3.</td>
              <td>
                <div className="item"><select className="selection">
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
              </select></div>
              </td>
              <td>
                <div className="receipt">
                  <input style={{ display: "none" }} type="file" id="file" />
                  <label htmlFor="file">
                    ADD RECEIPT
                    <span className="material-symbols-outlined">
                      <AddIcon />
                    </span>
                  </label>
                </div>
              </td>
              <td>
                <div className="verified">Add your receipt</div>
              </td>
              <td>
                <div className="add" onClick={addHandler}>
                  ADD
                </div>
              </td>
            </tr>
          </table>
        </div>
      </div>
      <ToastContainer/>
    </div>
  );
}

export default ReceiptPage;
