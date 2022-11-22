import React, { useState } from "react";
import { ReactComponent as PlusIcon } from "../../../assets/images/icons/icons8-plus.svg";
import NavBar from "./NavBar";
import InfoCards from "./Components/InfoCards";
import FormControlAuth from "./Components/formControl";
import TableComponent from "./Components/Table";
import { useNavigate } from "react-router-dom";

function VendorProducts({ setSidebar, sidebar }) {
  const navigate=useNavigate()
  const [tableHeadData, seTableHeadData] = useState([
    { id: "code", label: "code" },
    { id: "updateDate", label: "Update Date" },
    { id: "productName", label: "Product Name" },
    { id: "mainCategory", label: "Main Category" },
    { id: "price", label: "Price" },
    { id: "status", label: "Status" },
    { id: "action", label: "Action" },
  ]);

  const [tableRowData, setTableRowData] = useState([
    {
      code: "01",
      updateDate: "24-01-22",
      productName: "product1",
      mainCategory: "Main Category",
      price: "$21.00",
      status: "Active",
      action: "Action",
    },
    {
      code: "01",
      updateDate: "24-01-22",
      productName: "product1",
      mainCategory: "Main Category",
      price: "$21.00",
      status: "Active",
      action: "Action",
    },
    {
      code: "01",
      updateDate: "24-01-22",
      productName: "product1",
      mainCategory: "Main Category",
      price: "$21.00",
      status: "Featured",
      action: "Action",
    },
    {
      code: "01",
      updateDate: "24-01-22",
      productName: "product1",
      mainCategory: "Main Category",
      price: "$21.00",
      status: "Inactive",
      action: "Action",
    },
    {
      code: "01",
      updateDate: "24-01-22",
      productName: "product1",
      mainCategory: "Main Category",
      price: "$21.00",
      status: "Inactive",
      action: "Action",
    },
  ]);

  const [filterCard, setFilterCard] = useState([
    { topText: "All Products", bottomText: tableRowData.length },
    {
      topText: "Active Products",
      bottomText: tableRowData.filter((item) => item.status == "Active").length,
    },
    {
      topText: "Inactive Products",
      bottomText: tableRowData.filter((item) => item.status == "Inactive")
        .length,
    },
  ]);

  const [activeCard, setActiveCard] = useState(filterCard[0].topText);
  return (
    <>
      <NavBar setSidebar={setSidebar} sidebar={sidebar} title="My Products" />

      <article className="vendor-profile-main">
        <div className="vendor-profile-main_form">
          <InfoCards
            data={filterCard}
            activeCard={activeCard}
            setActiveCard={setActiveCard}
          />
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
                <h4>Filter By Your Categories</h4>
                <FormControlAuth />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  // width: "100%",
                  marginBottom: "0px",
                }}
              >
                <h4 style={{ marginLeft: "20px" }}>Product List</h4>
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
                  Add Product
                </button>
              </div>
              <div
                style={{
                  width: "95%",
                  margin: "20px",
                }}
              >
                <TableComponent
                  tHeadData={tableHeadData}
                  tRowData={tableRowData}
                  activeCard={"total"}
                  delete1={true}
                  onClick={()=>navigate('/product-details')}
                />
              </div>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}

export default VendorProducts;
