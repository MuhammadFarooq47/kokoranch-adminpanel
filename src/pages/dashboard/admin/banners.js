import { Paper } from "@mui/material";
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { ReactComponent as PlusIcon } from "../../../assets/images/icons/icons8-plus.svg";
import TableComponent from "./Components/Table";
import NavBar from "./NavBar";

function Banners({ sidebar, setSidebar }) {
  const [state, setState] = useState("COMMING SOON");
  const [tableHeadData, seTableHeadData] = useState([
    { id: "sequence", label: "Sequence" },
    { id: "BannerId", label: "Banner ID" },
    { id: "updatedate", label: "Update Date" },
    { id: "status", label: "Status" },
    { id: "action", label: "Action" },
  ]);

  const [tableRowData, setTableRowData] = useState([
    {
      sequence: "01",
      updatedate: "24-01-22",
      BannerId: "001",
      amountPaid: "$21.00",
      status: "Active",
      action: "Action",
    },
    {
      sequence: "01",
      updatedate: "24-01-22",
      BannerId: "001",
      amountPaid: "$21.00",
      status: "Active",
      action: "Action",
    },
    {
      sequence: "01",
      updatedate: "24-01-22",
      BannerId: "001",
      amountPaid: "$21.00",
      status: "Inactive",
      action: "Action",
    },
    {
      sequence: "01",
      updatedate: "24-01-22",
      BannerId: "001",
      amountPaid: "$21.00",
      status: "Active",
      action: "Action",
    },
    {
      sequence: "01",
      updatedate: "24-01-22",
      BannerId: "001",
      amountPaid: "$21.00",
      status: "Inactive",
      action: "Action",
    },
  ]);
  return (
    <>
      <NavBar setSidebar={setSidebar} sidebar={sidebar} title="Web Banners" />
      <Paper
        sx={{
          backgroundColor: "#1e1e1e",
          height: "81vh",
          overflowY: "scroll",
          color: "white",
          padding: "30px",
          boxShadow: "0rem 0rem 0px 0.1rem #00000047",
        }}
        className="scroll-bar-hide"
        elevation={20}
      >
        <div className="row mt-5">
          <div className="col-5">
            <h3>Top Banners</h3>
          </div>

          <div className="col-7 d-flex justify-content-end">
            <button
              onClick={() => {
                // navigate("/add-product")
              }}
              className="btn btn-solid btn-solid-primary table-btn"
              style={{
                marginRight: "20px",

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
          <div className="col-12">
            <TableComponent
              tHeadData={tableHeadData}
              tRowData={tableRowData}
              activeCard={"total"}
              delete1
              onClick={() => {
                // navigate("/vendor-serviceorder-details")
              }}
            />
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-5">
            <h3>Bottom Banners</h3>
          </div>

          <div className="col-7 d-flex justify-content-end">
            <button
              onClick={() => {
                // navigate("/add-product")
              }}
              className="btn btn-solid btn-solid-primary table-btn"
              style={{
                marginRight: "20px",

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
          <div className="col-12">
            <TableComponent
              tHeadData={tableHeadData}
              tRowData={tableRowData}
              activeCard={"total"}
              delete1
              onClick={() => {
                // navigate("/vendor-serviceorder-details")
              }}
            />
          </div>
        </div>
      </Paper>
    </>
  );
}

export default Banners;
