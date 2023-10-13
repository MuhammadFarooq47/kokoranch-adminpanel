import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import { FaRegEdit } from "react-icons/fa";
import Images from "../../../constants/images";
import NavBar from "./NavBar";
import { Grid } from "@mui/material";
import { useEffect } from "react";
import Manager2 from "../../../assets/images/manager2.png";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { userRequest } from "../../../makeRequest";
import { Token } from "@mui/icons-material";
import { updateProfile } from "../../../redux/userSlice";
import { PUT } from "../../../apis/requests";
export default function Profile({ setSidebar, sidebar }) {
  const user = useSelector((state) => state.user.loggedInUser);
  const dispatch = useDispatch();
  const [editAble, setEditAble] = useState(false);
  const [formData, setFormData] = useState({
    profileName: user.firstName ? user?.firstName + " " + user?.lastName : null,
    firstName: user.firstName ? user.firstName : null,
    lastName: user.lastName ? user.lastName : null,
    email: user.email ? user.email : null,
    contact: user.contact ? user.contact : "",
    image: user.image ? user.image : null,
    fileContent: null,
  });
  const [bankEditable, setBankEditable] = useState(false);
  const [show, setShow] = useState(false);
  const [loginDevices, setLoginDevices] = useState([
    {
      deviceName: "Windows PC. Canberra,Asutralia",
      browser: "Chrome",
      status: "Active Now",
    },
    {
      deviceName: "Windows PC. Canberra,Asutralia",
      browser: "Chrome",
      status: "Active Now",
    },
    {
      deviceName: "Windows PC. Canberra,Asutralia",
      browser: "Chrome",
      status: "Active Now",
    },
    {
      deviceName: "Windows PC. Canberra,Asutralia",
      browser: "Chrome",
      status: "Active Now",
    },
    {
      deviceName: "Windows PC. Canberra,Asutralia",
      browser: "Chrome",
      status: "Active Now",
    },
    {
      deviceName: "Windows PC. Canberra,Asutralia",
      browser: "Chrome",
      status: "Active Now",
    },
  ]);
  const [showingItems, setShowingItems] = useState([]);
  useEffect(() => {
    setShowingItems([...loginDevices.slice(0, 4)]);
    if (loginDevices.length > 4) {
      setShow(true);
    }
  }, []);
  const handleMore = () => {
    setShowingItems(loginDevices);
    setShow(!show);
  };
  const submitHandler = async () => {
    const data = new FormData();
    data.append("firstName", formData.firstName);
    data.append("lastName", formData.lastName);
    data.append("email", formData.email);
    data.append("contact", formData.contact);
    if (formData.fileContent) {
      data.append("image", formData.fileContent);
    }
    try {
      const res = await userRequest(
        "PUT",
        `/users/update/${user?._id}`,
        data,
        "",
        user.token
      );
      if (res.status == 200) {
        dispatch(updateProfile(res.data.message.user));
        toast.success("Profile Updated Successfully");
      }
    } catch (e) {
      toast.error(e.message);
    }
  };
  return (
    <>
      <NavBar setSidebar={setSidebar} sidebar={sidebar} title="My Profile" />

      <article className="vendor-profile-main">
        <div className="vendor-profile-main_form">
          <div className="row mb-5">
            <div className="col-3 col-sm-2 col-md-2 col-lg-2">
              <div className="vendor-profile-main_form_image-input-wrapper">
                <img
                  src={formData?.image}
                  className="vendor-profile-main_form_image-input-wrapper_preview"
                  alt="vendor-preview"
                  style={{ width: "10rem", height: "10rem" }}
                />

                {editAble ? (
                  <>
                    <input
                      type="file"
                      onChange={(e) => {
                        console.log(
                          "target",
                          URL.createObjectURL(e.target.files[0])
                        );
                        setFormData({
                          ...formData,
                          image: URL.createObjectURL(e.target.files[0]),
                          fileContent: e.target.files[0],
                        });
                        let reader = new FileReader();
                        reader.onload = (e) => {};
                        console.log(e.target.files[0]);
                        reader.readAsDataURL(e.target.files[0]);
                        console.log(reader?.result);
                        // setFormData({
                        //   ...formData,

                        //   image: reader?.result,
                        // });
                      }}
                      className="vendor-profile-main_form_image-input-wrapper_input"
                    />
                    <div className="vendor-profile-main_form_image-input-wrapper_icon-wrapper">
                      <FaRegEdit className="vendor-profile-main_form_image-input-wrapper_icon-wrapper_icon" />
                    </div>
                  </>
                ) : (
                  ""
                )}
              </div>
            </div>
            <div className="col-6 col-sm-7 col-md-7 col-lg-7 d-flex flex-column justify-content-center vendor-profile-info">
              <label htmlFor="firstName" className="form-label">
                Public Profile Name
              </label>
              {editAble ? (
                <input
                  type="text"
                  className="form-control"
                  id="profileName"
                  name="profileName"
                  value={formData.firstName}
                  onChange={(event) => {
                    setFormData({ ...formData, firstName: event.target.value });
                  }}
                  placeholder="Enter Your Profile Name"
                  required
                  style={{ borderColor: "#FFFFFF" }}
                />
              ) : (
                <p className="preview">{user?.firstName}</p>
              )}
            </div>
            {/* <div className="col-3 col-lg-3 col-md-3 col-sm-3 d-flex flex-column justify-content-center vendor-system-id">
              <p className="vendor-id">User Id : 123456</p>
              <p className="vendor-text">(System Generated)</p>
            </div> */}
          </div>
          <div className="row" style={{ marginTop: "30px" }}>
            <div className="col-12 col-md-6 col-lg-6 mb-4">
              <label htmlFor="firstName" className="form-label">
                First Name
              </label>
              {editAble ? (
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={(event) => {
                    setFormData({ ...formData, firstName: event.target.value });
                  }}
                  placeholder="Enter Your First Name"
                  required
                  style={{ borderColor: "#FFFFFF" }}
                />
              ) : (
                <p className="vendor-preview">{user?.firstName}</p>
              )}
            </div>
            <div className="col-12 col-md-6 col-lg-6">
              <label htmlFor="lastName" className="form-label">
                Last Name
              </label>
              {editAble ? (
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={(event) => {
                    setFormData({ ...formData, lastName: event.target.value });
                  }}
                  placeholder="Enter Your Last Name"
                  required
                  style={{ borderColor: "#FFFFFF" }}
                />
              ) : (
                <p className="vendor-preview">{user?.lastName}</p>
              )}
            </div>
          </div>
          <div className="row" style={{ marginTop: "50px" }}>
            <div className="col-12 col-md-6 col-lg-6">
              <label htmlFor="email" className="form-label">
                Email Address
              </label>
              {editAble ? (
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={(event) => {
                    setFormData({ ...formData, email: event.target.value });
                  }}
                  placeholder="Enter Your Email Address"
                  required
                  style={{ borderColor: "#FFFFFF" }}
                />
              ) : (
                <p className="vendor-preview">{user?.email}</p>
              )}
            </div>
            <div className="col-12 col-md-6 col-lg-6">
              <label htmlFor="contact" className="form-label">
                {editAble ? "Phone Number" : "Contact No."}
              </label>
              {editAble ? (
                <PhoneInput
                  country={"us"}
                  enableSearch={true}
                  // id="contact"
                  // name="contact"
                  placeholder="Phone Number"
                  value={formData.contact.toString()}
                  onChange={(event) => {
                    console.log(event);
                    setFormData({
                      ...formData,
                      contact: Number(event),
                    });
                  }}
                  required
                  inputStyle={{ borderColor: "#FFFFFF" }}
                  dropdownStyle={{ borderColor: "#FFFFFF" }}
                  containerStyle={{ borderColor: "#FFFFFF" }}
                  searchStyle={{ borderColor: "#FFFFFF" }}
                  buttonStyle={{ borderColor: "#FFFFFF" }}
                />
              ) : (
                <p className="vendor-preview">{user?.contact}</p>
              )}
            </div>
          </div>
          {editAble ? (
            <div className="row" style={{ marginTop: "80px" }}>
              <div className="col-12 col-md-6 col-lg-5">
                <button
                  className="btn btn-outline-primary-rounded w-50 py-3"
                  onClick={() => {
                    setEditAble(false);
                  }}
                >
                  Cancel
                </button>
              </div>
              <div className="col-12 col-md-6 col-lg-5">
                <button
                  onClick={() => {
                    submitHandler();
                  }}
                  className="btn btn-solid btn-solid-primary-rounded w-50 py-3"
                >
                  Save
                </button>
              </div>
            </div>
          ) : (
            <>
              <div className="row mt-5">
                <div className="col-12 col-md-6 col-lg-4">
                  <button
                    className="btn btn-solid btn-solid-primary-rounded w-50 py-3"
                    onClick={() => {
                      setEditAble(true);
                    }}
                  >
                    Edit
                  </button>
                </div>
                <div className="col-12 col-md-6 col-lg-6"></div>
              </div>
            </>
          )}
        </div>
        {/* ******************************************************* */}
        {!editAble && (
          <>
            <hr className="hr-rule" />
            <div className="vendor-profile-main_form">
              <div className="bank-details">
                <h4 className="bank-details-heading">
                  {bankEditable && "Edit "}Security and Login :
                </h4>
                {!bankEditable && (
                  <Grid container>
                    <Grid
                      item
                      lg={6}
                      className="security-login-mainDiv"
                      p={"2rem"}
                      alignItems="center"
                      direction="column"
                    >
                      {/* <div className='security-and-login'> */}
                      <div className="security-and-login-textWithButton">
                        <span
                          style={{
                            fontFamily: "var(--font-style)",
                            fontSize: "14px",
                          }}
                        >
                          Change Password
                        </span>
                        <button className="button-2">Edit</button>
                      </div>
                      <hr style={{ margin: "10px 0px 10px 0px " }} />
                      <h5 style={{ marginBottom: "1rem" }}>
                        Where you're logged in
                      </h5>

                      {showingItems?.map((item) => {
                        return (
                          <div className="security-and-login-details">
                            <span
                              style={{
                                fontFamily: "var(--font-style)",
                                fontSize: "14px",
                              }}
                            >
                              {item.deviceName}
                            </span>
                            <div
                              style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "1rem",
                              }}
                            >
                              <span style={{ fontSize: "12px" }}>
                                {item.browser}{" "}
                              </span>
                              <span
                                style={{ fontSize: "12px", color: "green" }}
                              >
                                {item.status}
                              </span>
                            </div>
                          </div>
                        );
                      })}
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: show ? "space-between" : "flex-end",
                        }}
                      >
                        {show == true && (
                          <span
                            style={{
                              fontSize: "12px",
                              color: "blueviolet",
                              cursor: "pointer",
                            }}
                            onClick={handleMore}
                          >
                            {" "}
                            See More{" "}
                          </span>
                        )}
                        <span style={{ fontSize: "12px", color: "green" }}>
                          Logout of all sessions
                        </span>
                      </div>
                      {/* </div> */}
                    </Grid>
                  </Grid>
                  // {/* <p className="bank-detail mb-4">
                  //   Bank Name :
                  //   <span className="bank-detail-light">
                  //     &nbsp; Bank Of America
                  //   </span>
                  // </p> */}
                )}
                {bankEditable && (
                  <div className="row">
                    <div className="col-12 col-md-6 col-lg-6">
                      <label htmlFor="firstName" className="form-label">
                        Bank Name
                      </label>

                      <input
                        type="text"
                        className="form-control"
                        id="bank-name"
                        name="bank-name"
                        placeholder="Enter Your Bank Name"
                        required
                      />
                    </div>
                    <div className="col-12 col-md-6 col-lg-6">
                      <label htmlFor="firstName" className="form-label">
                        Bank Account Number
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="bank-name"
                        name="bank-name"
                        placeholder="Enter Your Bank Account Number"
                        required
                      />
                    </div>
                    <div className="col-12 col-md-6 col-lg-6 mt-4">
                      <label htmlFor="firstName" className="form-label">
                        Routing No
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="bank-name"
                        name="bank-name"
                        placeholder="Enter Your Routing Number"
                        required
                      />
                    </div>
                  </div>
                )}
                {/* {!bankEditable && (
              <div className="row mt-5">
                <div className="col-12 col-md-6 col-lg-4">
                  <button
                    className="btn btn-solid btn-solid-primary-rounded w-50 py-3"
                    onClick={() => {
                      setBankEditable(true);
                    }}
                  >
                    Edit
                  </button>
                </div>
              </div>
            )} */}
                {bankEditable && (
                  <div className="row mt-5">
                    <div className="col-12 col-md-6 col-lg-4">
                      <button className="btn btn-solid btn-solid-primary w-100 py-3">
                        Save
                      </button>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                      <button
                        className="btn btn-outline-primary w-100 py-3"
                        onClick={() => {
                          setBankEditable(false);
                        }}
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </>
        )}
      </article>
    </>
  );
}
