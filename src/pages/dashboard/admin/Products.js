import React, { useState, useEffect } from "react";
import { ReactComponent as PlusIcon } from "../../../assets/images/icons/icons8-plus.svg";
import NavBar from "./NavBar";
import InfoCards from "./Components/InfoCards";
import FormControlAuth from "./Components/formControl";
import TableComponent from "./Components/Table";
import Popup from "../../../components/popUp/popUp";
import { TiTick } from "react-icons/ti";
import { FaExclamation } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";
import { publicRequest, userRequest } from "../../../makeRequest";
import { useSelector } from "react-redux";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

function VendorProducts({ setSidebar, sidebar }) {
  const user = useSelector((state) => state.user.loggedInUser);
  const navigate = useNavigate();
  const [tableHeadData, seTableHeadData] = useState([
    { id: "code", label: "Code" },
    { id: "updatedAt", label: "Update Date" },
    { id: "name", label: "Product Name" },
    { id: "category", label: "Main Category" },
    { id: "price", label: "Price" },
    { id: "status", label: "Status" },
    { id: "action", label: "Action" },
  ]);

  const [tableRowData, setTableRowData] = useState([]);

  const [filterCard, setFilterCard] = useState([
    // { topText: "All Products", bottomText: tableRowData.length },
    // {
    //   topText: "Active Products",
    //   bottomText: tableRowData.filter((item) => item.status == "Active").length,
    // },
    // {
    //   topText: "Inactive Products",
    //   bottomText: tableRowData.filter((item) => item.status == "InActive")
    //     .length,
    // },
  ]);

  const [activeCard, setActiveCard] = useState(
    filterCard.length > 0 ? filterCard[0]?.topText : null
  );
  const [deletePopup, setDeletePopup] = useState(false);
  const [deleteSuccessfulPopup, setDeleteSuccessfulPopup] = useState(false);
  const [subCategory, setSubCategory] = useState("");
  const [subSubcategory, setSubSubCategory] = useState("");
  const [rowData, setRowData] = useState([]);
  const [sortData, setSortData] = useState("");
  const [category, setCategory] = useState("");
  const [options, setOptions] = useState([
    "All",
    "T-shirts",
    "Plant Inspired Jewelry",
    "Plant Inspired Art",
  ]);

  const getAdminProducts = async () => {
    try {
      const data = "";
      const token = user.token;
      const res = await userRequest(
        "get",
        `/products/user_products/${user._id}`,
        null,
        data,
        token
      );
      console.log("response>>>>>>>>>>>>>>>>>", res.data.products);
      let arr = [];
      res.data.products.map((item) => {
        let obj = {
          code:
            item._id.charAt(item._id.length - 2) +
            item._id.charAt(item._id.length - 2),
          updatedAt: item.updatedAt,
          name: item.name,
          category: item.category.category,
          price: item.price,
          status: item.status,
          action: "Action",
        };
        arr.push(obj);
      });

      setTableRowData(arr);
      setRowData(arr);
      let filterArray = [
        { topText: "All Products", bottomText: arr.length },
        {
          topText: "Active Products",
          bottomText: arr.filter((item) => item.status == "Active").length,
        },
        {
          topText: "Inactive Products",
          bottomText: arr.filter((item) => item.status == "inActive").length,
        },
      ];
      setFilterCard(filterArray);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    console.log("called");
    getAdminProducts();
  }, []);
  useEffect(() => {
    console.log("called 1");
    setActiveCard("All Products");
  }, [filterCard]);

  useEffect(() => {
    let temp = [];
    if (activeCard == "All Products") {
      temp = tableRowData;
    } else if (activeCard == "Active Products") {
      temp = tableRowData.filter((item) => item.status == "Active");
    } else if (activeCard == "Inactive Products") {
      temp = tableRowData.filter((item) => item.status == "inActive");
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

      <NavBar setSidebar={setSidebar} sidebar={sidebar} title="My Products" />

      <article className="vendor-profile-main">
        <div className="vendor-profile-main_form">
          {filterCard.length > 0 ? (
            <InfoCards
              data={filterCard}
              activeCard={activeCard}
              setActiveCard={setActiveCard}
              sortData={sortData}
              setSortData={setSortData}
            />
          ) : (
            <Skeleton
              animation="wave"
              variant="rectangular"
              width={130}
              height={"130px"}
              sx={{ borderRadius: "1rem" }}
            />
          )}
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
              <div style={{ marginLeft: "20px" }}>
                <h4 style={{ marginBottom: "10px" }}>
                  Filter By Your Categories
                </h4>
                <FormControlAuth setCategory={setCategory} options={options} />
                {category && (
                  <FormControlAuth
                    setSubCategory={setSubCategory}
                    isSubCategory
                  />
                )}
                {subCategory && (
                  <FormControlAuth
                    setSubSubCategory={setSubSubCategory}
                    isSubCategory
                  />
                )}
              </div>
              <div className="row">
                <div className="col-5">
                  <h4 style={{ marginLeft: "20px" }}>{activeCard}:</h4>
                </div>
                <div className="col-7 d-flex justify-content-end">
                  <button
                    onClick={() => navigate("/add-product")}
                    className="btn btn-solid btn-solid-primary table-btn"
                    style={{
                      marginRight: "20px",
                      // paddingLeft: "20px",
                      // paddingRight: "20px",
                      width: "fit-content",
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
                    Add Product
                  </button>
                </div>
              </div>
              {tableRowData.length > 0 ? (
                <TableComponent
                  tHeadData={tableHeadData}
                  tRowData={rowData}
                  edit={"products"}
                  delete1
                  activeCard={"total"}
                  open={deletePopup}
                  setOpen={setDeletePopup}
                  onClick={() => navigate("/product-details?admin")}
                />
              ) : (
                <Skeleton
                  animation="wave"
                  variant="rectangular"
                  width={"80vw"}
                  height={"200px"}
                  sx={{ borderRadius: "20px 20px 0 0", margin: "10px" }}
                />
              )}
            </div>
          </div>
        </div>
      </article>
    </>
  );
}

export default VendorProducts;
