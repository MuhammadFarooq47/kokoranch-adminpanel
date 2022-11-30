import React, { useState, useEffect } from "react";
import { ReactComponent as PlusIcon } from "../../../assets/images/icons/icons8-plus.svg";

import NavBar from "./NavBar";
import InfoCards from "./Components/InfoCards";
import FormControlAuth from "./Components/formControl";
import TableComponent from "./Components/Table";
import Popup from "../../../components/popUp/popUp";
import { TiTick } from "react-icons/ti";
import { FaExclamation } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate, useLocation } from "react-router-dom";
import FilterProp from "./Components/FilterProp";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  //   position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "start",
  justifyContent: "end",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

function AllUsers({ setSidebar, sidebar }) {
  const navigate = useNavigate();
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

  const [filterCard, setFilterCard] = useState([
    { topText: "All Users", bottomText: tableRowData.length },
    {
      topText: "All Buyers",
      bottomText: tableRowData.length,
    },
    {
      topText: "All Vendors",
      bottomText: tableRowData.length,
    },
    {
      topText: "All Traders",
      bottomText: tableRowData.length,
    },
  ]);

  const [activeCard, setActiveCard] = useState(filterCard[0].topText);
  const [deletePopup, setDeletePopup] = useState(false);
  const [deleteSuccessfulPopup, setDeleteSuccessfulPopup] = useState(false);
  const [rowData, setRowData] = useState(tableRowData);
  const [sortData, setSortData] = useState("");
  const [options, setOptions] = useState("allUsers");

  useEffect(() => {
    let temp = [];
    if (activeCard == "All Users") {
      temp = tableRowData;
      console.log("all");
    } else if (activeCard == "All Buyers") {
      //   console.log("active");
      //   temp = tableRowData.filter((item) => item.status == "Active");
      temp = tableRowData;
    } else if (activeCard == "All Traders") {
      //   console.log("inactive");
      //   temp = tableRowData.filter((item) => item.status == "Inactive");
      temp = tableRowData;
    } else if (activeCard == "All Vendors") {
      //   console.log("inactive");
      // temp = tableRowData.filter((item) => item.status == "Inactive");
      temp = tableRowData;
    }
    setRowData(temp);
  }, [activeCard]);
  useEffect(() => {
    if (sortData) {
      let temp = [];
      if (sortData == "asc") {
        temp = rowData.sort((a, b) => {
          return (
            Number(new Date(a.updateDate)) - Number(new Date(b.updateDate))
          );
        });
      } else if (sortData == "dec") {
        temp = rowData.sort((a, b) => {
          return (
            Number(new Date(b.updateDate)) - Number(new Date(a.updateDate))
          );
        });
      } else if (sortData == "low") {
        temp = rowData.sort((a, b) => {
          return Number(a.price) - Number(b.price);
        });
      } else if (sortData == "high") {
        temp = rowData.sort((a, b) => {
          return Number(b.price) - Number(a.price);
        });
      }

      setRowData(temp);
    }
  }, [sortData]);

  return (
    <>
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
              navigate("/my-products");
            }}
          >
            Continue
          </button>
        </div>
      </Popup>
      <NavBar setSidebar={setSidebar} sidebar={sidebar} title="All Users" />

      <article className="vendor-profile-main">
        <div className="vendor-profile-main_form">
          <InfoCards
            data={filterCard}
            activeCard={activeCard}
            setActiveCard={setActiveCard}
            sortData={sortData}
            setSortData={setSortData}
          />

          <div className="row mt-3">
            <div className="col-2">
              <div
                className={`d-flex justify-content-between ${
                  options == "allUsers"
                    ? "filter-option-selector-wrapper-active"
                    : "filter-option-selector-wrapper"
                }`}
              >
                <p
                  onClick={() => {
                    setOptions("allUsers");
                  }}
                >
                  All Users (135)
                </p>
                <div>
                  <div className="vr "></div>
                </div>
              </div>
            </div>
            <div className="col-2">
              <div
                className={`d-flex justify-content-between ${
                  options == "activeUsers"
                    ? "filter-option-selector-wrapper-active"
                    : "filter-option-selector-wrapper"
                }`}
              >
                <p
                  onClick={() => {
                    setOptions("activeUsers");
                  }}
                >
                  Active Users (135)
                </p>
                <div>
                  <div className="vr "></div>
                </div>
              </div>
            </div>

            <div className="col-2">
              <div
                className={`d-flex justify-content-between ${
                  options == "disabledUsers"
                    ? "filter-option-selector-wrapper-active"
                    : "filter-option-selector-wrapper"
                }`}
              >
                <p
                  onClick={() => {
                    setOptions("disabledUsers");
                  }}
                >
                  Disabled Users (135)
                </p>
                <div>
                  <div className="vr "></div>
                </div>
              </div>
            </div>

            <div className="col-2">
              <div
                className={`d-flex justify-content-between ${
                  options == "blockedUsers"
                    ? "filter-option-selector-wrapper-active"
                    : "filter-option-selector-wrapper"
                }`}
              >
                <p
                  onClick={() => {
                    setOptions("blockedUsers");
                  }}
                >
                  Blocked Users (35)
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="row"
          style={{
            marginTop: "20px",
            border: "1px black",
            borderRadius: "10px",
            boxShadow: "0px 0px 30px -10px",
            width: "100%",
            color: "black",
          }}
        >
          <div className=" col-md-12">
            <div style={{ marginTop: "20px", color: "white" }}>
              <div className="row">
                <div className="col-12 d-flex justify-content-end">
                  <div className="d-flex ">
                    <div>
                      <input
                        style={{ borderRadius: "10px" }}
                        type="text"
                        id="form1"
                        className="form-control"
                        placeholder="Enter by Name or ID"
                      />
                    </div>
                    <button type="button" className="search-btn  ">
                      <FiSearch className="search-btn-icon" />
                    </button>
                  </div>
                </div>
              </div>
              <TableComponent
                tHeadData={tableHeadData}
                tRowData={rowData}
                edit={"allUsers"}
                activeCard={"total"}
                open={deletePopup}
                setOpen={setDeletePopup}
                onClick={() => navigate("/product-details?admin")}
              />
            </div>
          </div>
        </div>
      </article>
    </>
  );
}

export default AllUsers;
