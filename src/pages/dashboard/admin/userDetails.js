import React, { useState } from "react";
import NavBar from "./NavBar";
import Popup from "../../../components/popUp/popUp";
import { TiTick } from "react-icons/ti";
import { FaExclamation, FaRegEdit } from "react-icons/fa";
import { useNavigate, useLocation, Link } from "react-router-dom";
import Category1 from "../../../assets/images/category1.png";
import Images from "../../../constants/images";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import TableComponent from "./Components/Table";

const UserDetails = ({ setSidebar, sidebar }) => {
  const navigate = useNavigate();
  const location = useLocation();

  // console.log('query>>>>>>>>',req.query);
  console.log("query>>>>>>>>", location.search);
  const arr = location.search.split("?");
  const admin = arr[1] == "admin" ? true : false;
  const [popupOpen, setPopupOpen] = useState(false);
  const [deletePopup, setDeletePopup] = useState(false);
  const [successfulPopup, setSuccessfulPopup] = useState(false);
  const [deleteSuccessfulPopup, setDeleteSuccessfulPopup] = useState(false);
  const [orderStatus, setOrderStatus] = useState("completed");
  const [tableHeadData, seTableHeadData] = useState([
    { id: "userId", label: "User ID" },
    { id: "signUpDate", label: "Signup Date" },
    { id: "userName", label: "User Name" },
    { id: "category", label: "Category" },
    { id: "status", label: "Status" },
    { id: "action", label: "Action" },
  ]);

  const [tableRowData, setTableRowData] = useState([
    {
      userId: "01",
      signUpDate: "2022-01-22",
      userName: "product1",
      category: "Main Category",
      status: "Active",
      action: "Action",
    },
    {
      userId: "01",
      signUpDate: "2022-01-23",
      userName: "product1",
      category: "Main Category",
      status: "Active",
      action: "Action",
    },
    {
      userId: "01",
      signUpDate: "2022-01-24",
      userName: "product1",
      category: "Main Category",
      status: "Featured",
      action: "Action",
    },
    {
      userId: "01",
      signUpDate: "2022-01-25",
      userName: "product1",
      category: "Main Category",
      status: "Inactive",
      action: "Action",
    },
    {
      userId: "01",
      signUpDate: "2022-01-26",
      userName: "product1",
      category: "Main Category",
      status: "Inactive",
      action: "Action",
    },
  ]);
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
              Are You Sure You Want To
              <br />
              Delete This Product?
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
            Product Deleted <br />
            Successfully
          </h3>

          <button
            className="btn btn-solid btn-solid-primary soi-success-btn"
            onClick={() => {
              setDeleteSuccessfulPopup(false);
              navigate(-1);
            }}
          >
            Continue
          </button>
        </div>
      </Popup>
      <NavBar
        setSidebar={setSidebar}
        sidebar={sidebar}
        title={"User Details"}
      />

      {/* <div className="row">
        {!admin && (
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
              <h4 style={{ fontWeight: "bold" }}>Product Owner:</h4>
              <h4 style={{ color: "#14A384", fontWeight: "bold" }}>
                Sara Miller
              </h4>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <h4 style={{ fontWeight: "bold" }}>Owner UserId:</h4>
              <h4 style={{ color: "#14A384", fontWeight: "bold" }}>1234</h4>
            </div>
          </div>
        )}
        <div className="col-12 col-sm-12 col-md-12 col-lg-12  d-flex justify-content-end align-items-center">
          {!admin && (
            <button
              onClick={() => {
                setPopupOpen(true);
              }}
              className="btn btn-solid btn-solid-primary soi-btn mx-2"
              style={{ width: "fit-content" }}
            >
              View Product Page
            </button>
          )}
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
      </div> */}
      <div className="bg-black-pad my-5 " style={{ height: "81vh" }}>
        <div className="soi-top ">
          <Link to="/all-users">
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
                marginBottom: 5,
              }}
            >
              <ArrowBackIcon style={{ color: "#14A384", cursor: "pointer" }} />
              <span
                style={{
                  color: "#F5F5F5",
                  fontSize: "18px",
                  fontFamily: "var(--font-style)",
                }}
              >
                Back
              </span>
            </div>
          </Link>
          <div className="row">
            <div className="col-12 col-sm-12 col-md-4 col-lg-4 soi-orderNo">
              <div className="row mb-5">
                <div className="col-5">
                  <div className="vendor-profile-main_form_image-input-wrapper">
                    <img
                      src={Images.Pictures.profile}
                      className="vendor-profile-main_form_image-input-wrapper_preview"
                      alt="vendor-preview"
                      style={{ width: "7rem", height: "7rem" }}
                    />
                  </div>
                </div>
                <div className="col-6  d-flex flex-column justify-content-center vendor-profile-info">
                  <label htmlFor="firstName" className="form-label">
                    Sara Miller
                  </label>
                  <p>User ID:2356</p>
                  <p>
                    status:<span style={{ color: "#14A384" }}>Active</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-2 col-sm-12 col-md-2 col-lg-2 soi-orderNo"></div>
            <div className="col-6 col-sm-12 col-md-6 col-lg-6 d-flex justify-content-end">
              <div className="row">
                <div className="col-6">
                  <button
                    onClick={() => {
                      navigate("/product-details/edit");
                    }}
                    className="btn btn-solid btn-outline-blue-rounded soi-btn mx-2"
                    style={{ width: "100%" }}
                  >
                    View User Dashboard
                  </button>
                </div>
                <div className="col-6">
                  <button
                    onClick={() => {
                      navigate("/product-details/edit");
                    }}
                    className="btn btn-solid  btn-solid-blue-rounded soi-btn mx-2"
                    style={{ width: "100%" }}
                  >
                    Delete User
                  </button>
                </div>
                <div className="col-6">
                  <button
                    onClick={() => {
                      navigate("/product-details/edit");
                    }}
                    className="btn btn-solid btn-solid-process-rounded soi-btn mx-2"
                    style={{ width: "100%" }}
                  >
                    Send Email
                  </button>
                </div>
                <div className="col-6">
                  <button
                    onClick={() => {
                      navigate("/product-details/edit");
                    }}
                    className="btn btn-solid btn-solid-primary-rounded soi-btn mx-2"
                    style={{ width: "100%" }}
                  >
                    Update Status
                  </button>
                </div>
              </div>
              {/* {admin && (
                <button
                  onClick={() => {
                    navigate("/product-details/edit");
                  }}
                  className="btn btn-solid btn-solid-primary soi-btn mx-2"
                  style={{ width: "fit-content" }}
                >
                  Edit
                </button>
              )} */}
              {/* <button
                className="btn btn-solid btn-solid-danger soi-btn mx-3"
                onClick={() => setDeletePopup(true)}
                style={{ width: "fit-content" }}
              >
                Delete
              </button> */}
              {/* {admin && (
                <button
                  className="btn btn-solid btn-solid-process soi-btn "
                  onClick={() => navigate("/make-it-featured")}
                  style={{ width: "fit-content" }}
                >
                  Make it Featured
                </button>
              )} */}
            </div>
          </div>
        </div>
        <div className="soi-main1">
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <h3 className="soi-main1-label-wrapper">Personal Information:</h3>
            </div>
            <div></div>
          </div>
          <div className="row mt-5">
            <div className="col-4 ">
              <label className="mb-4">First Name</label>
            </div>
            <div className="col-8 d-flex justify-content-end">
              <p className="mb-4 ">Sara</p>
            </div>
            <div className="col-4 ">
              <label className="mb-4">Last Name</label>
            </div>
            <div className="col-8 d-flex justify-content-end">
              <p className="mb-4 ">Miller</p>
            </div>
            <div className="col-4 ">
              <label className="mb-4">Category</label>
            </div>
            <div className="col-8 d-flex justify-content-end">
              <p className="mb-4 ">Vendors</p>
            </div>
            <div className="col-4 ">
              <label className="mb-4">Email Address</label>
            </div>
            <div className="col-8 d-flex justify-content-end">
              <p className="mb-4 ">sara@gmail.com</p>
            </div>
            <div className="col-4 ">
              <label className="mb-4">Phone Number</label>
            </div>
            <div className="col-8 d-flex justify-content-end">
              <p className="mb-4 ">1234567897</p>
            </div>
            <div className="col-4 ">
              <label className="mb-4">Password</label>
            </div>
            <div className="col-8 d-flex justify-content-end">
              <p className="mb-4 ">ksjdfljsdlfjdjf45464</p>
            </div>
            <hr className="hr-rule" />
            <div className="d-flex justify-content-between align-items-center mb-5">
              <div>
                <h3 className="soi-main1-label-wrapper">
                  Bank Account Details
                </h3>
              </div>
              <div></div>
            </div>
            <div className="col-4 ">
              <label className="mb-4">Bank Name</label>
            </div>
            <div className="col-8 d-flex justify-content-end">
              <p className="mb-4 ">Bank Of America</p>
            </div>
            <div className="col-4 ">
              <label className="mb-4">Bank Account Number </label>
            </div>
            <div className="col-8 d-flex justify-content-end">
              <p className="mb-4 ">51247856321678</p>
            </div>
            <div className="col-4 ">
              <label className="mb-4">Routing Number</label>
            </div>
            <div className="col-8 d-flex justify-content-end">
              <p className="mb-4 ">ksjdfljsdlfjdjf45464</p>
            </div>
            <div className="col-4 ">
              <label className="mb-4">Bank Account Title</label>
            </div>
            <div className="col-8 d-flex justify-content-end">
              <p className="mb-4 ">Sara Miller</p>
            </div>
            <hr className="hr-rule" />
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <h3 className="soi-main1-label-wrapper">User Orders</h3>
              </div>
              <button
                onClick={() => {
                  //   setPopupOpen(true);
                }}
                className="btn btn-solid btn-solid-primary soi-btn mx-2"
                style={{ width: "fit-content" }}
              >
                View All Products
              </button>
            </div>
            <div className="col-12">
              <TableComponent
                tHeadData={tableHeadData}
                tRowData={tableRowData}
                edit={"allUsers"}
                activeCard={"total"}
                open={deletePopup}
                setOpen={setDeletePopup}
                onClick={() => navigate("/product-details?user")}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
