import React, { useState } from "react";
import NavBar from "../NavBar";
import Popup from "../../../../components/popUp/popUp";
import { TiTick } from "react-icons/ti";
import { FaExclamation } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";
import Category1 from "../../../../assets/images/category1.png";
const TradeDetails = ({ setSidebar, sidebar, setView }) => {
  const navigate = useNavigate();
  const location = useLocation();
  // console.log('query>>>>>>>>',req.query);
  console.log("query>>>>>>>>", location.search);
  const arr = location.search.split("?");
  const admin = arr[1] == "admin" ? true : false;
  const checkUser = arr[1] == "user" ? true : false;
  const vendorProduct = arr[1] == "vendorProduct" ? true : false;
  const vendorService = arr[1] == "vendorService" ? true : false;

  const [popupOpen, setPopupOpen] = useState(false);
  const [deletePopup, setDeletePopup] = useState(false);
  const [successfulPopup, setSuccessfulPopup] = useState(false);
  const [deleteSuccessfulPopup, setDeleteSuccessfulPopup] = useState(false);
  const [orderStatus, setOrderStatus] = useState("completed");
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
      <div className="row">
        <div
          className="col-12 col-sm-12 col-md-12 col-lg-6"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            padding: "10px 0px 0px 20px",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <h4 style={{ fontWeight: "bold" }}>Trade Owner</h4>
            <h4 style={{ color: "#14A384", fontWeight: "bold" }}>
              Sara Miller
            </h4>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <h4 style={{ fontWeight: "bold" }}>Owner UserId:</h4>
            <h4 style={{ color: "#14A384", fontWeight: "bold" }}>1234</h4>
          </div>
        </div>

        <div className="col-12 col-sm-12 col-md-12 col-lg-12  d-flex justify-content-end align-items-center">
          <button
            onClick={() => {
              setPopupOpen(true);
            }}
            className="btn btn-solid btn-solid-primary soi-btn mx-2"
            style={{ width: "fit-content" }}
          >
            View Trade Page
          </button>

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
      <div className="bg-black-pad my-5 " style={{ height: "69vh" }}>
        <div className="soi-top">
          <div className="row">
            <div className="col-6 col-sm-12 col-md-6 col-lg-6 soi-orderNo">
              <h2 style={{ color: "#14A384" }}>Trade Code. 21385</h2>
            </div>
            {/* <div className="col-2 col-sm-12 col-md-6 col-lg-2 soi-orderNo"></div> */}
            <div className="col-6 col-sm-12 col-md-6 col-lg-6 d-flex justify-content-end align-items-center">
              <button
                className="btn btn-solid btn-solid-danger soi-btn mx-3"
                onClick={() => setDeletePopup(true)}
                style={{ width: "fit-content" }}
              >
                Delete
              </button>
              <button
                onClick={() => {
                  setPopupOpen(true);
                }}
                className="btn btn-solid btn-solid-primary soi-btn mx-2"
                style={{ width: "fit-content" }}
              >
                Update Status
              </button>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-between align-items-center mb-3">
          <div>
            <h5
              style={{
                letterSpacing: "1px",
                textAlign: "end",
              }}
            >
              Status:
              <span style={{ color: "#14A384" }}>Active</span>
            </h5>
          </div>
        </div>
        <div className="soi-main">
          <div className="row ">
            <div className="col-12">
              <label style={{ fontWeight: "bold" }}>In Search Of:</label>
            </div>
            <div className="col-12 mt-3 mx-3 mb-4">
              <p>product name</p>
            </div>
            <div className="col-12">
              <label style={{ fontWeight: "bold" }}>To Exchange With:</label>
            </div>
            <div className="col-12 mt-3 mx-3 mb-4">
              <p>In Search Of</p>
            </div>
            <div className="col-12 ">
              <label style={{ fontWeight: "bold" }}>Ad Description:</label>
            </div>
            <div className="col-12 mt-3 mx-3 mb-4">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                porttitor lacinia ex, sit amet eleifend enim ultrices non.
                Praesent tincidunt leo enim, et eleifend metus efficitur id.
                Praesent mollis risus elit, nec sagittis sem cursus in. Cras in
                augue ut augue suscipit interdum. Ut gravida odio sagittis arcu
                dictum tincidunt nec eu mauris. Maecenas dolor augue, consequat
                ut risus lacinia, blandit congue velit. Vivamus sit amet viverra
                est. Nullam a semper est. Fusce ac arcu sodales, molestie lectus
                in, gravida dolor. Morbi ut augue faucibus, blandit dui quis,
                congue mauris. Etiam mattis urna sagittis, blandit est a,
                elementum purus. Sed in arcu sed est sollicitudin suscipit.
                Donec scelerisque mi blandit lacus condimentum interdum
              </p>
            </div>

            <div className="col-12">
              <h3 className="mb-4">Uploaded Picture:</h3>
            </div>
            <div className="col-8 d-flex justify-content-start">
              <img style={{ height: "80px", width: "80px" }} src={Category1} />
              <img style={{ height: "80px", width: "80px" }} src={Category1} />
              <img style={{ height: "80px", width: "80px" }} src={Category1} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TradeDetails;
