import React, { useState } from "react";
import NavBar from "./NavBar";
import InfoCards from "./Components/InfoCards";
import TableComponent from "./Components/Table";
import SearchBar from "./Components/SearchBar";
import { ReactComponent as FilterIcon } from "../../../assets/images/icons/filter-icon.svg";
import FilterProp from "./Components/FilterProp";
import { useNavigate } from "react-router-dom";
function Featured({ setSidebar, sidebar }) {
  const [showFilterProp, setShowFilterProp] = useState(false);
  const navigate=useNavigate()
    const [tableHeadData, seTableHeadData] = useState([
    { id: "Code", label: "Code" },
    { id: "userId", label: "User Id" },
    { id: "Type", label: "Type" },
    { id: "ItemName", label: "Item Name" },
    { id: "SubscriptionDate", label: "Subscription Date" },
    { id: "ExpiryDate", label: "Expiry Date" },
    { id: "action", label: "Action" },
  ]);

  const [tableRowData, setTableRowData] = useState([
    {
      Code: "01",
      SubscriptionDate: "24-01-22",
      ExpiryDate:"24-01-22",
      userId: "001",
      Type: "Agriculture Services",
      ItemName:'Lorem ipsum',
      action: "Action",
    },
    {
      Code: "01",
      SubscriptionDate: "24-01-22",
      ExpiryDate:"24-01-22",
      userId: "001",
      Type: "Agriculture Services",
      ItemName:'Lorem ipsum',
      action: "Action",
    },
    {
      Code: "01",
      SubscriptionDate: "24-01-22",
      ExpiryDate:"24-01-22",
      userId: "001",
      Type: "Agriculture Services",
      ItemName:'Lorem ipsum',
      action: "Action",
    },
    {
      Code: "01",
      SubscriptionDate: "24-01-22",
      ExpiryDate:"24-01-22",
      userId: "001",
      Type: "Agriculture Services",
      ItemName:'Lorem ipsum',
      action: "Action",
    },
    {
      Code: "01",
      SubscriptionDate: "24-01-22",
      ExpiryDate:"24-01-22",
      userId: "001",
      Type: "Agriculture Services",
      ItemName:'Lorem ipsum',
      action: "Action",
    },
  ]);
  const [button, setButton] = useState({
    all: true,
    product: false,
    service: false,
  });
  return (
    <>
      <NavBar
        setSidebar={setSidebar}
        sidebar={sidebar}
        title="Featured Products and Details"
      />
      <div style={{width:'fit-content',backgroundImage: 'linear-gradient(#BEDC7C, #14A384)',display:'flex',alignItems:'center',justifyContent:'center',fontWeight:'bold',height:'60px',borderRadius:'10px',color:'#FFFFFF',padding:'5px'}}>
      <h3 style={{fontWeight:'bold'}}>Total Amount Received from Featured Section: $350</h3>
      </div>
      <article className="vendor-profile-main">
        <div>
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <FilterIcon
              width={20}
              onClick={() => setShowFilterProp(!showFilterProp)}
            />
          </div>
          <div style={{ marginTop: "20px", color: "white" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                width: "95%",
              }}
            >
              <h3 style={{ marginLeft: "20px" }}>{button.all?'All':button.product?'Products':'Agricultural Services'}</h3>
              <div
            //    className="featured-button-container"
                style={{display:'flex',alignItems:'center',gap:'10px'}}
               >
                <button
                  onClick={() => {
                    setButton({
                      all: true,
                      product: false,
                      service: false,
                    });
                  }}
                  style={{
                    backgroundColor: "transparent",
                    border: "none",
                    color: button?.all ? "#14A384" : "white",
                    fontWeight: button?.all && "bold",
                  }}
                >
                  <p>All</p>
                </button>
                <div className="d-flex featured-vertical-line">
                  <div className="vr"></div>
                </div>
                <button
                  onClick={() => {
                    setButton({
                      all: false,
                      product: true,
                      service: false,
                    });
                  }}
                  style={{
                    backgroundColor: "transparent",
                    border: "none",
                    color: button?.product ? "#14A384" : "white",
                    fontWeight: button?.product && "bold",
                  }}
                >
                  <p>Products</p>
                </button>
                <div className="d-flex featured-vertical-line">
                  <div className="vr"></div>
                </div>
                <button
                  onClick={() => {
                    setButton({
                      all: false,
                      product: false,
                      service: true,
                    });
                  }}
                  style={{
                    backgroundColor: "transparent",
                    border: "none",
                    color: button?.service ? "#14A384" : "white",
                    fontWeight: button?.service && "bold",
                  }}
                >
                  <p>Services</p>
                </button>
              </div>
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
                edit={"featured"}
                activeCard={"total"}
                delete={false}
                onClick={()=>navigate(`/view-featured-productandservices/${123456}`)}
              />
            </div>
          </div>
        </div>
        <div
          className="so-top-filtericon"
          onClick={() => setShowFilterProp(!showFilterProp)}
        ></div>
        {showFilterProp && <FilterProp featured />}
      </article>
    </>
  );
}

export default Featured;
