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
const EditBannerDetails = ({ setSidebar, sidebar, setView }) => {
  const navigate = useNavigate();
  const location = useLocation();

  console.log("query>>>>>>>>", location.search);
  const [popupOpen, setPopupOpen] = useState(false);
  const [successfulPopup, setSuccessfulPopup] = useState(false);
  const [deletePopup, setDeletePopup] = useState(false);
  const [deleteSuccessfulPopup, setDeleteSuccessfulPopup] = useState(false);
  const [orderStatus, setOrderStatus] = useState("active");
  return (
    <div>
      <Popup open={popupOpen} setOpen={setPopupOpen}>
        <div className="soi-update-status">
          <h3 className="mb-4">Update Status</h3>
          <div>
            <div className="soi-checkbox my-4">
              {orderStatus === "active" ? (
                <input
                  type="radio"
                  id="active"
                  name="order-status"
                  checked
                  onClick={() => setOrderStatus("active")}
                />
              ) : (
                <input
                  type="radio"
                  id="active"
                  name="order-status"
                  onClick={() => setOrderStatus("active")}
                />
              )}
              <label for="active" onClick={() => setOrderStatus("active")}>
                Active
              </label>
            </div>
            <div className="soi-checkbox my-4">
              {orderStatus === "inactive" ? (
                <input
                  type="radio"
                  id="inactive"
                  name="order-status"
                  checked
                  onClick={() => setOrderStatus("inactive")}
                />
              ) : (
                <input
                  type="radio"
                  id="inactive"
                  name="order-status"
                  onClick={() => setOrderStatus("inactive")}
                />
              )}
              <label for="inactive" onClick={() => setOrderStatus("inactive")}>
                Inactive
              </label>
            </div>
          </div>
          <div className="soi-popup-btns d-flex">
            <button
              className="btn btn-solid btn-solid-cancel btn-outline-primary soi-popup-btn"
              onClick={() => setPopupOpen(false)}
            >
              Cancel
            </button>
            <button
              className="btn btn-solid btn-solid-primary  soi-popup-btn"
              onClick={() => {
                setPopupOpen(false);
                setSuccessfulPopup(true);
              }}
            >
              Update
            </button>
          </div>
        </div>
      </Popup>
      <Popup open={deletePopup} setOpen={setDeletePopup}>
        <div className="soi-update-status">
          <div className="successful-popup">
            <div className="sp-icon">
              <FaExclamation size={30} fill="black" />
            </div>
            <h3>
              Are You Sure You
              <br />
              Want To Delete Trade?
            </h3>
          </div>
          <div className="soi-popup-btns d-flex">
            <button
              className="btn btn-solid btn-solid-cancel btn-outline-primary soi-popup-btn"
              onClick={() => {
                setDeletePopup(false);
              }}
            >
              Cancel
            </button>
            <button
              className="btn btn-solid btn-solid-primary  soi-popup-btn"
              onClick={() => {
                setDeletePopup(false);
                setDeleteSuccessfulPopup(true);
              }}
            >
              Confirm
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
            Status Updated <br />
            Successfully
          </h3>

          <button
            className="btn btn-solid btn-solid-primary soi-success-btn"
            onClick={() => {
              setSuccessfulPopup(false);
            }}
          >
            Continue
          </button>
        </div>
      </Popup>
      <Popup open={deleteSuccessfulPopup} setOpen={setDeleteSuccessfulPopup}>
        <div className="successful-popup">
          <div className="sp-icon">
            <TiTick size={30} fill="black" />
          </div>

          <h3>
            Deleted <br />
            Successfully
          </h3>

          <button
            className="btn btn-solid btn-solid-primary soi-success-btn"
            onClick={() => {
              setDeleteSuccessfulPopup(false);
              // navigate("/user-trades");
              setView(null);
            }}
          >
            Continue
          </button>
        </div>
      </Popup>
      <NavBar
        setSidebar={setSidebar}
        sidebar={sidebar}
        title={`${
          location.pathname == "/banners/web/add/banner-details"
            ? "Add "
            : "Edit "
        }Banner Details`}
      />

      <div
        className="bg-black-pad my-5 scroll-bar-hide"
        style={{ height: "80vh", overflowY: "scroll" }}
      >
        <div>
          <div className="row mb-3">
            <div
              className="col-12 col-sm-6 col-md-6 col-lg-6"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                // padding: "10px 0px 0px 20px",
                justifyContent: "space-between",
              }}
            >
              <div
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <h4 style={{ fontWeight: "bold" }}>Banner ID:</h4>
                <h4 style={{ fontWeight: "bold" }}>1234</h4>
              </div>
              <div
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <h4 style={{ fontWeight: "bold" }}>Banner Sequence:</h4>
                {/* <h4>Filter By Your Categories</h4> */}
              </div>
              <FormControlAuth />
            </div>

            <div className="col-12 col-sm-6 col-md-6 col-lg-6  d-flex justify-content-end ">
              <h3
                className="mx-3"
                style={{ cursor: "pointer" }}
                onClick={() => {
                  navigate(-1);
                }}
              >
                <span className="vtext-primary mx-2">&#10229;</span>Back
              </h3>
            </div>
          </div>
          <div className="row">
            <div className="col-6 col-sm-5 col-md-5 col-lg-5 ">
              <div className="d-flex justify-content-between align-items-center">
                <h5
                  style={{
                    letterSpacing: "1px",
                    textAlign: "end",
                    // paddingLeft: "15px",
                  }}
                >
                  Banner Text:
                </h5>
                <label>
                  <Checkbox
                    defaultChecked
                    sx={{
                      color: "white",
                      "&.Mui-checked": {
                        color: "#14A384",
                      },
                    }}
                  />
                  <span style={{ fontSize: "10px" }}>Remove Text</span>
                </label>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-12"></div>
            <div className="col-6 col-sm-5 col-md-5 col-lg-5 mt-3">
              <textarea
                rows={6}
                style={{
                  width: "100%",
                  backgroundColor: "#1e1e1e",
                  color: "white",
                  fontSize: "14px",
                  padding: "10px",
                }}
              />
              {/* <span style={{ color: "#14A384" }}>Active</span> */}
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-12"></div>
            <div className="col-6 col-sm-5 col-md-5 col-lg-5 mt-3 ">
              <div className="d-flex justify-content-between align-items-center">
                <h5
                  style={{
                    letterSpacing: "1px",
                    textAlign: "end",
                    // paddingLeft: "15px",
                  }}
                >
                  Button Text:
                </h5>
                <label>
                  <Checkbox
                    defaultChecked
                    sx={{
                      color: "white",
                      "&.Mui-checked": {
                        color: "#14A384",
                      },
                    }}
                  />
                  <span style={{ fontSize: "10px" }}>Remove Button</span>
                </label>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-12"></div>
            <div className="col-6 col-sm-5 col-md-5 col-lg-5 mt-3">
              <input
                type="text"
                className="form-control"
                id="firstName"
                name="firstName"
                placeholder="Button Text"
                required
              />
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-12"></div>
            <div className="col-6 col-sm-5 col-md-5 col-lg-5 mt-3 ">
              <div className="d-flex justify-content-between align-items-center">
                <h5
                  style={{
                    letterSpacing: "1px",
                    textAlign: "end",
                    // paddingLeft: "15px",
                  }}
                >
                  Button Link/Url:
                </h5>
                {/* <span style={{ color: "#14A384" }}>Active</span> */}
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-12"></div>
            <div className="col-6 col-sm-5 col-md-5 col-lg-5 mt-3">
              <input
                type="text"
                className="form-control"
                id="firstName"
                name="firstName"
                placeholder="Button Link/Url"
                required
              />
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-12"></div>
            <div className="col-8 col-sm-8 col-md-8 col-lg-8 mt-3 ">
              <div className="d-flex justify-content-between align-items-center">
                <h5
                  style={{
                    letterSpacing: "1px",
                    textAlign: "end",
                    // paddingLeft: "15px",
                  }}
                >
                  Banner Image
                </h5>
              </div>
              <p>
                {" "}
                <span style={{ color: "#14A384" }}>Note: </span>Note: Preferred
                Size W 1920 x H 480. Image size limit 5 MB
              </p>
            </div>
            <div className="col-12 col-sm-4 col-md-4 col-lg-4 mt-3 d-flex justify-content-end ">
              <button
                className="btn btn-solid btn-solid-primary table-btn"
                style={{
                  marginRight: "20px",
                  paddingLeft: "20px",
                  paddingRight: "20PX",
                  width: "120px",
                }}
              >
                <div
                  style={{
                    // backgroundColor: "white",
                    margin: "5px",
                    display: "flex",
                    justifyContent: "flex-start",
                  }}
                >
                  <PlusIcon fill="white" width={17} />
                </div>
                Add Banner
              </button>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-12"></div>
            <div className="col-6 col-sm-5 col-md-5 col-lg-5 mt-3">
              <img
                style={{ height: "100px", width: "100px" }}
                src={Category1}
              />
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-12"></div>
            <div className="col-12 col-sm-8 col-md-5 col-lg-5 mt-4 d-flex justify-content-between align-items-center">
              <button
                onClick={() => {
                  setPopupOpen(true);
                }}
                className="btn btn-solid btn-solid-primary-rounded soi-btn mx-2"
                style={{ width: "50%" }}
              >
                Upload
              </button>
              <button
                className="btn  btn-solid-primary-rounded soi-btn mx-2"
                onClick={() => setDeletePopup(true)}
                style={{ width: "50%" }}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditBannerDetails;
