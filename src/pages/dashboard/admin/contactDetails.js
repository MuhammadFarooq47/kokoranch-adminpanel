import React, { useState } from "react";

import { TiTick } from "react-icons/ti";
import { FaExclamation } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";
import Category1 from "../../../assets/images/category1.png";
import { ReactComponent as PlusIcon } from "../../../assets/images/icons/icons8-plus.svg";
import Popup from "../../../components/popUp/popUp";
import NavBar from "./NavBar";
import FormControlAuth from "./Components/formControl";
import { Checkbox } from "@mui/material";
const ContactDetails = ({ setSidebar, sidebar, setView }) => {
  const navigate = useNavigate();
  const location = useLocation();

  console.log("query>>>>>>>>", location.search);
  const [popupOpen, setPopupOpen] = useState(false);
  const [deletePopup, setDeletePopup] = useState(false);
  const [successfulPopup, setSuccessfulPopup] = useState(false);
  const [deleteSuccessfulPopup, setDeleteSuccessfulPopup] = useState(false);
  const [orderStatus, setOrderStatus] = useState("active");
  const [edit, setEdit] = useState(false);
  return (
    <div>
      <Popup open={popupOpen} setOpen={setPopupOpen}>
        <div className="soi-update-status">
          <div className="successful-popup">
            <div className="sp-icon">
              <FaExclamation size={30} fill="black" />
            </div>
            <h3>
              Are You Sure You Want To
              <br />
              Update Contact Details?
            </h3>
            <p style={{ color: "#E4201E" }}>
              NOTE: These contact details will be updated on both Website and
              Mobile Application.
            </p>
          </div>
          <div className="soi-popup-btns d-flex">
            <button
              className="btn btn-solid btn-solid-cancel btn-outline-primary soi-popup-btn"
              onClick={() => {
                setPopupOpen(false);
              }}
            >
              No
            </button>
            <button
              className="btn btn-solid btn-solid-primary  soi-popup-btn"
              onClick={() => {
                setPopupOpen(false);
                setSuccessfulPopup(true);
              }}
            >
              Yes
            </button>
          </div>
        </div>
      </Popup>
      <Popup open={successfulPopup} setOpen={setSuccessfulPopup}>
        <div className="successful-popup">
          <div className="sp-icon">
            <TiTick size={30} fill="black" />
          </div>

          <h3>
            Contact Details
            <br />
            Updated Successfully
          </h3>

          <button
            className="btn btn-solid btn-solid-primary soi-success-btn"
            onClick={() => {
              setSuccessfulPopup(false);
            }}
          >
            Close
          </button>
        </div>
      </Popup>

      <NavBar
        setSidebar={setSidebar}
        sidebar={sidebar}
        title="Koko Ranch Contact Details"
      />

      <div
        className="bg-black-pad my-5 scroll-bar-hide"
        style={{ height: "80vh", overflowY: "scroll" }}
      >
        <div style={{ padding: "10px" }}>
          <h4 style={{ color: "#14A384", marginBottom: "20px" }}>
            NOTE: These contact details will be updated on website and Mobile
            Application.
          </h4>
          <div
            style={{
              border: "1px solid #FFFFFF ",
              padding: "20px",
              borderRadius: "15px",
            }}
          >
            {edit && (
              <div className="d-flex justify-content-end">
                <h3
                  className="mx-3"
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    setEdit(false);
                  }}
                >
                  <span className="vtext-primary mx-2">&#10229;</span>Back
                </h3>
              </div>
            )}
            <label style={{ fontWeight: "bold", marginBottom: "20px"}}>
              Contact No:
            </label>
            {edit ? (
              <div style={{ width: "160px" }}>
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  name="firstName"
                  placeholder="+1 123 456 7890"
                  required
                />
              </div>
            ) : (
              <p style={{ color: "#14A384", marginBottom: "20px" }}>
                +1 123 456 7890
              </p>
            )}

            <label style={{ fontWeight: "bold", marginBottom: "20px",marginTop:'10px'  }}>
              Email:
            </label>
            {edit ? (
              <div style={{ width: "160px" }}>
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  name="firstName"
                  placeholder="info@kokoranch.com"
                  required
                />
              </div>
            ) : (
              <p style={{ color: "#14A384", marginBottom: "20px" }}>
                info@kokoranch.com
              </p>
            )}
            <label style={{ fontWeight: "bold", marginBottom: "20px",marginTop:'10px'  }}>
              Address Line 1:
            </label>
            {edit ? (
              <div style={{ width: "200px" }}>
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  name="firstName"
                  placeholder="ABC"
                  required
                />
              </div>
            ) : (
              <p style={{ color: "#14A384", marginBottom: "20px" }}>ABC</p>
            )}
            <label style={{ fontWeight: "bold", marginBottom: "20px",marginTop:'10px'  }}>
              Address Line 2:
            </label>
            {edit ? (
              <div style={{ width: "200px" }}>
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  name="firstName"
                  placeholder="Texas, USA"
                  required
                />
              </div>
            ) : (
              <p style={{ color: "#14A384", marginBottom: "20px" }}>
                Texas, USA
              </p>
            )}
            <div className="row">
              <div className="col-12 col-sm-8 col-md-5 col-lg-5 mt-4 d-flex justify-content-between align-items-center">
                {edit ? (
                  <>
                    <button
                      className="btn  btn-solid-primary-rounded soi-btn mx-2"
                      onClick={() => setEdit(false)}
                      style={{ width: "50%" }}
                    >
                      Cancel
                    </button>
                    <button
                      onClick={() => {
                        setPopupOpen(true);
                      }}
                      className="btn btn-solid btn-solid-primary-rounded soi-btn mx-2"
                      style={{ width: "50%" }}
                    >
                      Save
                    </button>
                  </>
                ) : (
                  <button
                    onClick={() => {
                      //   setPopupOpen(true);
                      setEdit(true);
                    }}
                    className="btn btn-solid btn-solid-primary-rounded soi-btn mx-2"
                    style={{ width: "50%" }}
                  >
                    Edit
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;
