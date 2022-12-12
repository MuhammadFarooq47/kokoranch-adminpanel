import { Grid } from "@mui/material";
import React from "react";
import { useState } from "react";
import NavBar from "./NavBar";
import { useNavigate, useLocation } from "react-router-dom";
import Popup from "../../../components/popUp/popUp";
import { TiTick } from "react-icons/ti";
import { FaExclamation } from "react-icons/fa";

const AddNewCategory = ({ setSidebar, sidebar }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [popupOpen, setPopupOpen] = useState(false);
  const [successfulPopup, setSuccessfulPopup] = useState(false);
  const condition = location.pathname.split("/")[1];
  const [data, setData] = useState(
    condition == "add"
      ? {
          label: "",
          subCategory: [],
        }
      : {
          label: "plants",
          subCategory: [
            {
              label: "flowers",
              subSubCategory: [
                { label: "a" },
                { label: "cc" },
                { label: "dd" },
              ],
            },
            {
              label: "b",
              subSubCategory: [
                { label: "a" },
                { label: "cc" },
                { label: "dd" },
              ],
            },
            {
              label: "c",
              subSubCategory: [
                { label: "a" },
                { label: "cc" },
                { label: "dd" },
              ],
            },
            {
              label: "d",
              subSubCategory: [
                { label: "a" },
                { label: "cc" },
                { label: "dd" },
              ],
            },
            {
              label: "sunflowers",
              subSubCategory: [
                { label: "a" },
                { label: "cc" },
                { label: "dd" },
              ],
            },
            {
              label: "abcd",
              subSubCategory: [
                { label: "a" },
                { label: "cc" },
                { label: "dd" },
              ],
            },
            {
              label: "efgh",
              subSubCategory: [
                { label: "a" },
                { label: "cc" },
                { label: "dd" },
              ],
            },
            {
              label: "ijklmnop",
              subSubCategory: [
                { label: "a" },
                { label: "cc" },
                { label: "dd" },
              ],
            },
          ],
        }
  );
  return (
    <div>
      <Popup open={popupOpen} setOpen={setPopupOpen}>
        <div className="soi-update-status">
          <div className="successful-popup">
            <div className="sp-icon">
              <FaExclamation size={30} fill="black" />
            </div>
            <h3>
              Are You Sure You Want To Add
              <br />
              This New Category?
            </h3>
          </div>
          <div className="soi-popup-btns d-flex">
            <button
              className="btn btn-solid btn-solid-cancel btn-outline-primary soi-popup-btn"
              onClick={() => {
                setPopupOpen(false);
              }}
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
            Category Added <br />
            Successfully
          </h3>

          <button
            className="btn btn-solid btn-solid-primary soi-success-btn"
            onClick={() => {
              setSuccessfulPopup(false);
              // navigate("/user-trades");
              // setView(null);
            }}
          >
            Close
          </button>
        </div>
      </Popup>
      <NavBar
        setSidebar={setSidebar}
        sidebar={sidebar}
        title={condition == "add" ? "Add New Category" : "Edit Category"}
      />
      <div
        className="bg-black-pad my-5 "
        style={{ height: "80vh", padding: "30px" }}
      >
        <div className="soi-main" style={{ height: "100%" }}>
          <div className="soi-top ">
            <div className="row">
              <div className="col-4 soi-orderNo">
                <h3>{condition == "add" ? "Main" : ""} Category:</h3>
              </div>
              <div className="col-8 d-flex justify-content-end align-items-center">
                <h3
                  className="mx-3 cursor-pointer"
                  onClick={() => {
                    navigate(-1);
                  }}
                >
                  <span className="vtext-primary mx-2 ">&#10229;</span>Back
                </h3>
              </div>
            </div>
          </div>
          <div
            className="chat-sidebar"
            style={{ height: "55vh", overflowY: "scroll" }}
          >
            <div
              style={{
                height: "fit-content",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <div style={{ height: "fit-content", width: "60%" }}>
                <div
                  style={{
                    backgroundColor: condition == "add" ? "#3c3c3c" : "#FFFFFF",
                    height: "50px",
                    width: "250px",
                    borderRadius: "5px",
                    display: "flex",
                    alignItems: "center",
                    padding: "10px",
                  }}
                >
                  <input
                    placeholder="Enter Main Category"
                    value={data.label}
                    style={{
                      height: "100%",
                      width: "90%",
                      border: "none",
                      backgroundColor:
                        condition == "add" ? "#3c3c3c" : "#FFFFFF",
                      color: condition == "add" ? "gray" : "black",
                    }}
                  />
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  aligntItems: "center",
                  justifyContent: "space-evenly",
                  width: "30%",
                }}
              >
                <button
                  className="btn btn-solid btn-solid soi-success-btn"
                  style={{
                    backgroundColor: "#FFFFFF",
                    color: "gray",
                    borderRadius: "5px",
                    width: "60%",
                  }}
                  onClick={() => {
                    //   setDeleteSuccessfulPopup(false);
                    // navigate('/add-category');

                    let obj1 = {
                      label: "",
                      subSubCategory: [],
                    };
                    let obj = data;
                    obj.subCategory.push(obj1);
                    // arr.push('1');
                    setData({
                      ...obj,
                    });
                  }}
                >
                  Add Sub Category
                </button>
                <button
                  className="btn btn-solid btn-solid soi-success-btn"
                  style={{
                    backgroundColor: "#CE0000",
                    color: "#FFFFFF",
                    borderRadius: "5px",
                    width: "30%",
                  }}
                  onClick={() => {
                    //   setDeleteSuccessfulPopup(false);
                    // navigate('/add-category');
                  }}
                >
                  Delete
                </button>
              </div>
            </div>

            {data.subCategory.length > 0 &&
              data.subCategory.map((item, index) => (
                <>
                  <div
                    style={{
                      height: "fit-content",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      width: "100%",
                    }}
                  >
                    <div style={{ height: "fit-content", width: "60%" }}>
                      {/* <div style={{display:'flex',alignItems:'end'}} >
                                {data.subCategory.length>1 && (<div className='vr' style={{height:index == data.subCategory.length-1 ? '30px':'60px',position:'absolute',marginLeft:30}} ></div> )}          
                                    <div className='vr' style={{height:'30px',marginLeft:'30px',position:'relative' }} ></div>
                                    <div style={{height:'60px',display:'flex',alignItems:'center',justifyContent:'center'}}>
                                    <hr style={{width:'70px'}} />
                                    <div style={{border:'1px solid white', backgroundColor:'#FFFFFF',width:'7px',height:'7px',borderRadius:'50%'}}></div>
                                    </div>
                                    <div style={{backgroundColor:'#3c3c3c',height:'50px',width:'150px',borderRadius:'5px',display:'flex',alignItems:'center',padding:'10px'}}>
                                    <input placeholder={item} style={{height:'100%',width:'90%',border:'none',backgroundColor:'#3c3c3c',color:'gray'}} />
                                    </div>
                                </div> */}

                      <div
                        style={{
                          display: "flex",
                          alignItems: "end",
                          position: "relative",
                        }}
                      >
                        {/* <div className='vr' style={{height:'60px',position:'absolute',left:30}} ></div> */}

                        <div
                          className="vr"
                          style={{
                            height:
                              index == data.subCategory.length - 1
                                ? "30px"
                                : "60px",
                            marginLeft: "30px",
                          }}
                        ></div>
                        {/* <div className='vr' style={{height:'30px'}} ></div> */}
                        <div
                          style={{
                            height: "60px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <hr style={{ width: "70px" }} />
                          <div
                            style={{
                              border: "1px solid white",
                              backgroundColor: "#FFFFFF",
                              width: "7px",
                              height: "7px",
                              borderRadius: "50%",
                            }}
                          ></div>
                        </div>
                        <div
                          style={{
                            backgroundColor:
                              condition == "add" ? "#3c3c3c" : "#FFFFFF",
                            height: "50px",
                            width: "150px",
                            borderRadius: "5px",
                            display: "flex",
                            alignItems: "center",
                            padding: "10px",
                          }}
                        >
                          <input
                            placeholder={item.label}
                            onChange={(e) => {
                              let obj = data;
                              console.log("index>>>>>>>>", index);
                              obj.subCategory[index].label = e.target.value;
                              setData({ ...obj });
                            }}
                            value={item.label}
                            style={{
                              height: "100%",
                              width: "90%",
                              border: "none",
                              backgroundColor:
                                condition == "add" ? "#3c3c3c" : "#FFFFFF",
                              color: condition == "add" ? "gray" : "black",
                            }}
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      style={{
                        width: "30%",
                        display: "flex",
                        aligntItems: "center",
                        justifyContent: "space-evenly",
                      }}
                    >
                      <button
                        className="btn btn-solid btn-solid soi-success-btn"
                        style={{
                          backgroundColor: "#FFFFFF",
                          color: "gray",
                          borderRadius: "5px",
                          width: "60%",
                        }}
                        onClick={() => {
                          let obj1 = {
                            label: "",
                          };
                          let obj = data;

                          obj.subCategory[index].subSubCategory.push(obj1);
                          setData({
                            ...obj,
                          });
                        }}
                      >
                        Add Sub Sub Category
                      </button>
                      <button
                        className="btn btn-solid btn-solid soi-success-btn"
                        style={{
                          backgroundColor: "#CE0000",
                          color: "#FFFFFF",
                          borderRadius: "5px",
                          width: "30%",
                        }}
                        onClick={() => {
                          let obj = data;
                          console.log("index>>>>>>>>", index);
                          obj.subCategory.splice(index, 1);
                          setData({ ...obj });
                        }}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                  {data.subCategory[index].subSubCategory.length > 0 &&
                    data.subCategory[index].subSubCategory.map(
                      (subSubCategory, i) => (
                        <div style={{ display: "flex" }}>
                          <div style={{ height: "fit-content", width: "69%" }}>
                            <div
                              style={{
                                display: "flex",
                                alignItems: "end",
                                position: "relative",
                              }}
                            >
                              {data.subCategory.length - 1 != index && (
                                <div
                                  className="vr"
                                  style={{ height: "60px", marginLeft: "30px" }}
                                ></div>
                              )}
                              <div
                                className="vr"
                                style={{
                                  height:
                                    i ==
                                    data.subCategory[index].subSubCategory
                                      .length -
                                      1
                                      ? "30px"
                                      : "60px",
                                  marginLeft: "150px",
                                }}
                              ></div>
                              {/* <div className='vr' style={{height:'30px'}} ></div> */}
                              <div
                                style={{
                                  height: "60px",
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                }}
                              >
                                <hr style={{ width: "70px" }} />
                                <div
                                  style={{
                                    border: "1px solid white",
                                    backgroundColor: "#FFFFFF",
                                    width: "7px",
                                    height: "7px",
                                    borderRadius: "50%",
                                  }}
                                ></div>
                              </div>
                              <div
                                style={{
                                  backgroundColor:
                                    condition == "add" ? "#3c3c3c" : "#FFFFFF",
                                  height: "50px",
                                  width: "150px",
                                  borderRadius: "5px",
                                  display: "flex",
                                  alignItems: "center",
                                  padding: "10px",
                                }}
                              >
                                <input
                                  placeholder={subSubCategory.label}
                                  value={subSubCategory.label}
                                  onChange={(e) => {
                                    let obj = data;
                                    obj.subCategory[index].subSubCategory[
                                      i
                                    ].label = e.target.value;
                                    setData({ ...obj });
                                  }}
                                  style={{
                                    height: "100%",
                                    width: "90%",
                                    border: "none",
                                    backgroundColor:
                                      condition == "add"
                                        ? "#3c3c3c"
                                        : "#FFFFFF",
                                    color:
                                      condition == "add" ? "gray" : "black",
                                  }}
                                />
                              </div>
                            </div>
                          </div>
                          <div
                            style={{
                              width: "30%",
                              display: "flex",
                              aligntItems: "center",
                              justifyContent: "flex-end",
                            }}
                          >
                            <button
                              className="btn btn-solid btn-solid soi-success-btn"
                              style={{
                                backgroundColor: "#CE0000",
                                color: "#FFFFFF",
                                borderRadius: "5px",
                                width: "30%",
                              }}
                              onClick={() => {
                                console.log("pres");
                                let obj = data;
                                obj.subCategory[index].subSubCategory.splice(
                                  i,
                                  1
                                );
                                setData({ ...obj });
                              }}
                            >
                              Delete
                            </button>
                          </div>
                        </div>
                      )
                    )}
                </>
              ))}
          </div>
          <div className="row">
            <div className="col-12 col-sm-8 col-md-5 col-lg-5 mt-4 d-flex justify-content-end align-items-center">
              <button
                onClick={() => {
                  setPopupOpen(true);
                }}
                className="btn btn-solid btn-solid-primary-rounded soi-btn mx-2"
                style={{ width: "50%" }}
              >
                Save
              </button>
              <button
                className="btn  btn-solid-primary-rounded soi-btn mx-2"
                // onClick={() => setDeletePopup(true)}
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

export default AddNewCategory;
