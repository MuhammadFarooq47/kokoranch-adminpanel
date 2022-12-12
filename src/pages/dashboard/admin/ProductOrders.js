import React, { useState } from "react";
import {
  FaRegUser,
  FaTradeFederation,
  FaRegFile,
  FaRegCommentAlt,
  FaRegSun,
  FaSignOutAlt,
  FaExclamation,
} from "react-icons/fa";
import { ReactComponent as PlusIcon } from "../../../assets/images/icons/icons8-plus.svg";
import NavBar from "./NavBar";
import InfoCards from "./Components/InfoCards";
import Table from "./Components/Table";
import FormControlAuth from "./Components/formControl";
import TableComponent from "./Components/Table";
import SearchBar from "./Components/SearchBar";
import { useNavigate } from "react-router-dom";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import Button from "react-bootstrap/Button";
import { useLocation } from "react-router-dom";
function VendorProductOrders({ setSidebar, sidebar }) {
  const navigate = useNavigate();
  const location = useLocation();
  // console.log(location.pathname);
  // location.pathname == "/admin-productorders";
  const [tableHeadData, seTableHeadData] = useState([
    { id: "orderNo", label: "Order No" },
    { id: "userId", label: "User Id" },
    { id: "date", label: "Date" },
    { id: "amountPaid", label: "Amount Paid" },
    { id: "status", label: "Status" },
    { id: "action", label: "Action" },
  ]);
  const renderTooltip = (props) => (
    <Tooltip
      style={{ ".tooltip_inner": { background: "#14A384" } }}
      id="button-tooltip"
      {...props}
    >
      <span style={{ backgroundColor: "#14A384" }}>
        You can search orders by User Id and Order no
      </span>
    </Tooltip>
  );
  const [tableRowData, setTableRowData] = useState([
    {
      orderNo: "01",
      date: "24-01-22",
      userId: "001",
      amountPaid: "$21.00",
      status: "Pending",
      action: "Action",
    },
    {
      orderNo: "01",
      date: "24-01-22",
      userId: "001",
      amountPaid: "$21.00",
      status: "Pending",
      action: "Action",
    },
    {
      orderNo: "01",
      date: "24-01-22",
      userId: "001",
      amountPaid: "$21.00",
      status: "Delivered",
      action: "Action",
    },
    {
      orderNo: "01",
      date: "24-01-22",
      userId: "001",
      amountPaid: "$21.00",
      status: "Pending",
      action: "Action",
    },
    {
      orderNo: "01",
      date: "24-01-22",
      userId: "001",
      amountPaid: "$21.00",
      status: "Booked",
      action: "Action",
    },
  ]);

  const [filterCard, setFilterCard] = useState([
    { topText: "Total Orders", bottomText: tableRowData.length },
    {
      topText: "Pending Orders",
      bottomText: tableRowData.filter((item) => item.status == "Pending")
        .length,
    },
    {
      topText: "Orders On The Way",
      bottomText: tableRowData.filter((item) => item.status == "Booked").length,
    },
    {
      topText: "Delevered Orders",
      bottomText: tableRowData.filter((item) => item.status == "Completed")
        .length,
    },
    {
      topText: "Cancelled Orders",
      bottomText: tableRowData.filter((item) => item.status == "Cancelled")
        .length,
    },
    {
      topText: "Total Amount",
      bottomText: "$400k",
    },
  ]);

  const [activeCard, setActiveCard] = useState(filterCard[0].topText);
  return (
    <>
      <NavBar
        setSidebar={setSidebar}
        sidebar={sidebar}
        title={
          location.pathname == "/admin-productorders"
            ? "Admin Product Orders"
            : "Vendor Product Orders"
        }
      />

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
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "95%",
                }}
              >
                <h4 style={{ marginLeft: "20px", width: "35%" }}>
                  {location.pathname == "/admin-productorders"
                    ? "Total List"
                    : "Product Order List (Total List)"}
                </h4>
                <div style={{ width: "60%" }}>
                  <SearchBar />
                </div>

                <OverlayTrigger
                  placement="bottom"
                  delay={{ show: 250, hide: 500 }}
                  overlay={renderTooltip}
                >
                  <div
                    className="d-inline-block onhover"
                    tabindex="0"
                    data-bs-toggle="popover"
                    data-bs-trigger="hover focus"
                    data-bs-content="Disabled popover"
                    style={{
                      borderRadius: "50%",
                      border: "2px solid #14A384",
                      // backgroundColor: "green",
                      height: "25px",
                      width: "25px",
                    }}
                  >
                    <FaExclamation
                      size={13}
                      fill="#14A384"
                      style={{ padding: "2px 0 0 8px" }}
                    />
                  </div>
                </OverlayTrigger>
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
                  onClick={() => navigate("/admin-product-details")}
                />
              </div>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}

export default VendorProductOrders;
