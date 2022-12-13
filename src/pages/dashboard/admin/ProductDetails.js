import React, { useState } from "react";
import NavBar from "./NavBar";
import Popup from "../../../components/popUp/popUp";
import { TiTick } from "react-icons/ti";
import { FaExclamation } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";
import Category1 from "../../../assets/images/category1.png";
const ProductDetails = ({ setSidebar, sidebar }) => {
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
  const [successfulPopup, setSuccessfulPopup] = useState(false);
  const [deletePopup, setDeletePopup] = useState(false);
  const [deleteSuccessfulPopup, setDeleteSuccessfulPopup] = useState(false);
  const [orderStatus, setOrderStatus] = useState("cancelled");
  return (
    <div>
      <Popup open={popupOpen} setOpen={setPopupOpen}>
        <div className="soi-update-status">
          <h3 className="mb-4">Update Status</h3>
          <div>
            <div className="soi-checkbox my-4">
              {orderStatus === "cancelled" ? (
                <input
                  type="radio"
                  id="cancelled"
                  name="order-status"
                  checked
                  onClick={() => setOrderStatus("cancelled")}
                />
              ) : (
                <input
                  type="radio"
                  id="cancelled"
                  name="order-status"
                  onClick={() => setOrderStatus("cancelled")}
                />
              )}
              <label
                for="cancelled"
                onClick={() => setOrderStatus("cancelled")}
              >
                Cancelled
              </label>
            </div>
            <div className="soi-checkbox my-4">
              {orderStatus === "pending" ? (
                <input
                  type="radio"
                  id="pending"
                  name="order-status"
                  checked
                  onClick={() => setOrderStatus("pending")}
                />
              ) : (
                <input
                  type="radio"
                  id="pending"
                  name="order-status"
                  onClick={() => setOrderStatus("pending")}
                />
              )}
              <label for="pending" onClick={() => setOrderStatus("pending")}>
                Pending
              </label>
            </div>
            <div className="soi-checkbox my-4">
              {orderStatus === "onTheWay" ? (
                <input
                  type="radio"
                  id="onTheWay"
                  name="order-status"
                  checked
                  onClick={() => setOrderStatus("onTheWay")}
                />
              ) : (
                <input
                  type="radio"
                  id="onTheWay"
                  name="order-status"
                  onClick={() => setOrderStatus("onTheWay")}
                />
              )}
              <label for="onTheWay" onClick={() => setOrderStatus("onTheWay")}>
                On The Way
              </label>
            </div>

            <div className="soi-checkbox my-4">
              {orderStatus === "delivered" ? (
                <input
                  type="radio"
                  id="delivered"
                  name="order-status"
                  checked
                  onClick={() => setOrderStatus("delivered")}
                />
              ) : (
                <input
                  type="radio"
                  id="delivered"
                  name="order-status"
                  onClick={() => setOrderStatus("delivered")}
                />
              )}
              <label
                for="delivered"
                onClick={() => setOrderStatus("delivered")}
              >
                Delivered
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
              Delete This {vendorService ? "Service" : "Product"}?
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
        title={
          admin
            ? "Admin Product Details"
            : checkUser
            ? "User Product Details"
            : vendorProduct
            ? "Vendor Product Details"
            : vendorService
            ? "Vendor Agricultural Service Details"
            : "Product Details"
        }
      />

      <div className="row">
        {!admin && !checkUser && (
          <div
            className="col-12 col-sm-12 col-md-6 col-lg-6"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              padding: "10px 0px 0px 20px",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <h4 style={{ fontWeight: "bold" }}>
                {vendorProduct
                  ? "Product Owner"
                  : vendorService && "Service Provider"}
              </h4>
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
        <div className="col-12 col-sm-12 col-md-6 col-lg-6 mt-3  d-flex justify-content-end align-items-center">
          {!checkUser && (
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
      </div>
      <div
        className="bg-black-pad my-5 "
        style={{ height: admin ? "75vh" : "69vh" }}
      >
        <div className="soi-top">
          <div className="row">
            <div className="col-6 col-sm-12 col-md-6 col-lg-6">
              {checkUser ? (
                <div className="d-flex align-items-end">
                  <h2 style={{ marginRight: "10px" }}>
                    Sara Miller's Product:
                  </h2>
                  <p className="color-primary-dark">Product Code. 21385</p>
                </div>
              ) : (
                <>
                  <h2
                    style={{
                      color: vendorService || admin ? "#14A384" : "white",
                    }}
                  >
                    {vendorProduct || admin ? "Product" : "Service"} Code. 21385
                  </h2>
                  {(vendorProduct || vendorService) && (
                    <>
                      <h4 style={{ marginTop: "10px" }}>
                        Featured: <span style={{ color: "#14A384" }}>Yes</span>
                      </h4>

                      <h5
                        style={{
                          letterSpacing: "1px",
                          // textAlign: "end",
                          marginTop: "5px",
                        }}
                      >
                        Status:
                        <span style={{ color: "#14A384" }}>Active</span>
                      </h5>
                    </>
                  )}
                </>
              )}
            </div>
            {/* <div className="col-2 col-sm-12 col-md-6 col-lg-2 soi-orderNo"></div> */}
            <div className="col-6 col-sm-12 col-md-6 col-lg-6 d-flex justify-content-end align-items-center">
              {(admin || checkUser) && (
                <button
                  onClick={() => {
                    navigate("/product-details/edit");
                  }}
                  className="btn btn-solid btn-solid-primary soi-btn mx-2"
                  style={{ width: "fit-content" }}
                >
                  Edit
                </button>
              )}
              <button
                className="btn btn-solid btn-solid-danger soi-btn mx-3"
                onClick={() => setDeletePopup(true)}
                style={{ width: "fit-content" }}
              >
                Delete
              </button>
              {(admin || checkUser) && (
                <button
                  className="btn btn-solid btn-solid-process soi-btn "
                  onClick={() => navigate("/make-it-featured")}
                  style={{ width: "fit-content" }}
                >
                  Make it Featured
                </button>
              )}
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-between align-items-center mb-3">
          {/* <div>
            <h5
              style={{
                letterSpacing: "1px",
                textAlign: "end",
              }}
            >
              Status:
              <span style={{ color: "#14A384" }}>Active</span>
            </h5>
          </div> */}
          {!vendorProduct && !vendorService && (
            <button
              onClick={() => {
                setPopupOpen(true);
              }}
              className="btn btn-solid btn-solid-primary soi-btn mx-2"
              style={{ width: "fit-content" }}
            >
              Update Status
            </button>
          )}
        </div>
        <div className="soi-main">
          {/* <hr className="hr-rule" /> */}
          <div className="row ">
            <div className="col-4 ">
              <h3 className="mb-4">
                {vendorService ? (
                  <span
                    style={{
                      color: "#14A384",

                      textDecorationLine: "underline",
                    }}
                  >
                    Service Name:
                  </span>
                ) : (
                  <span
                    style={{
                      fontSize: "20px",
                      color: "#14A384",
                      textDecorationLine: "underline",
                    }}
                  >
                    Product Name:
                  </span>
                )}
              </h3>
            </div>
            <div className="col-8 d-flex justify-content-end">
              <h5 className="mb-4 ">{vendorService ? "Service" : "Product"}</h5>
            </div>
            <hr className="hr-rule" />
            <div className="col-4 ">
              <h3 className="mb-4">Category:</h3>
            </div>
            <div className="col-8 d-flex justify-content-end">
              <h5 className="mb-4 ">Plant</h5>
            </div>
            <hr className="hr-rule" />
            <div className="col-4 ">
              <h3 className="mb-4">Sub Category:</h3>
            </div>
            <div className="col-8 d-flex justify-content-end">
              <h5 className="mb-4 ">flowering plant</h5>
            </div>
            <hr className="hr-rule" />
            {!vendorService && (
              <>
                <div className="col-4 ">
                  <h3 className="mb-4">Sub Sub Category:</h3>
                </div>
                <div className="col-8 d-flex justify-content-end">
                  <h5 className="mb-4 ">hoya</h5>
                </div>
                <hr className="hr-rule" />
              </>
            )}
            <div className="col-4 ">
              <h3 className="mb-4">Price:</h3>
            </div>
            <div className="col-8 d-flex justify-content-end">
              <h5 className="mb-4 ">$122</h5>
            </div>
            <hr className="hr-rule" />
            <div className="col-2 ">
              <h3 className="mb-4">
                {vendorService ? "Pricing Details:" : "Description 1:"}:
              </h3>
            </div>
            <div className="col-10 d-flex justify-content-end">
              <p className="mb-4 ">
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
            <hr className="hr-rule" />
            <div className="col-2 ">
              <h3 className="mb-4">
                {vendorService ? "Service Description:" : "Description 2:"}
              </h3>
            </div>
            <div className="col-10 d-flex justify-content-end">
              <p className="mb-4 ">
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
            <hr className="hr-rule" />
            <div className="col-2 ">
              <h3 className="mb-4">
                {vendorService ? "Service Area:" : "Description 3:"}
              </h3>
            </div>
            <div className="col-10 d-flex justify-content-end">
              <p className="mb-4 ">
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
            <hr className="hr-rule" />
            {!vendorService && (
              <>
                <div className="col-4 ">
                  <h3 className="mb-4">In Stock:</h3>
                </div>
                <div className="col-8 d-flex justify-content-end">
                  <h5
                    className="mb-4 active-color"
                    style={{ color: "#14A384" }}
                  >
                    500
                  </h5>
                </div>
                <hr className="hr-rule" />
              </>
            )}
            <div className="col-4">
              <h3 className="mb-4">Uploaded Picture:</h3>
            </div>
            <div className="col-8 d-flex ">
              <img style={{ height: "80px", width: "80px" }} src={Category1} />
              <img style={{ height: "80px", width: "80px" }} src={Category1} />
              <img style={{ height: "80px", width: "80px" }} src={Category1} />
            </div>
            {!vendorService && (
              <>
                <hr className="hr-rule" />
                <div className="col-4 ">
                  <h3 className="mb-4">New Location:</h3>
                </div>
                <div className="col-8 d-flex justify-content-end">
                  <h5 className="mb-4 ">Wisconsin</h5>
                </div>
                <hr className="hr-rule" />

                <div className="col-4 ">
                  <h3 className="mb-4">Shipping To:</h3>
                </div>
                <div className="col-8 d-flex justify-content-end">
                  <h5 className="mb-4 ">Globally</h5>
                </div>
                <hr className="hr-rule" />
                <div className="col-4 ">
                  <h3 className="mb-4">Delivery:</h3>
                </div>
                <div className="col-8 d-flex justify-content-end">
                  <h5 className="mb-4 ">locally 123 sdjkhfkjh</h5>
                </div>
                <hr className="hr-rule" />
                <div className="col-4 ">
                  <h3 className="mb-4">Return :</h3>
                </div>
                <div className="col-8 d-flex justify-content-end">
                  <h5 className="mb-4 ">30 days return poslicy</h5>
                </div>
                <hr className="hr-rule" />
                <div className="col-4 ">
                  <h3 className="mb-4">Shipping And Handling:</h3>
                </div>
                <div className="col-8 d-flex justify-content-end">
                  <h5 className="mb-4 ">Free shipping</h5>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
