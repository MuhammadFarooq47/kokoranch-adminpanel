import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";
import {
  FaRegUser,
  FaTradeFederation,
  FaRegFile,
  FaRegCommentAlt,
  FaRegSun,
  FaSignOutAlt,
} from "react-icons/fa";
import { ReactComponent as WineBottle } from "../../../assets/images/icons/wine-bottle.svg";
import { ReactComponent as AgriService } from "../../../assets/images/icons/agri-service.svg";
import { ReactComponent as FeatherList } from "../../../assets/images/icons/feather-list.svg";
import { ReactComponent as Inbox } from "../../../assets/images/icons/inbox.svg";
import { ReactComponent as Marijuana } from "../../../assets/images/icons/marijuana.svg";
import { ReactComponent as Medal } from "../../../assets/images/icons/medal.svg";
import { ReactComponent as Ratings } from "../../../assets/images/icons/ratings.svg";
import { ReactComponent as Settings } from "../../../assets/images/icons/settings.svg";
import { ReactComponent as Shipping } from "../../../assets/images/icons/shipping.svg";
import { ReactComponent as Notifications } from "../../../assets/images/icons/Notifications.svg";
import { ReactComponent as DownArrow } from "../../../assets/images/icons/down-arrow.svg";
import { ReactComponent as PeoplesGroup } from "../../../assets/images/icons/peoples-group.svg";
import { ReactComponent as Agriculture } from "../../../assets/images/icons/agriculture.svg";
import { ReactComponent as UserTrades } from "../../../assets/images/icons/user-trades.svg";
import { ReactComponent as AdsIcon } from "../../../assets/images/icons/AdsIcon.svg";
import { ReactComponent as Categories } from "../../../assets/images/icons/categories.svg";
import { ReactComponent as Mobile } from "../../../assets/images/icons/mobile.svg";
import { ReactComponent as ContactIcon } from "../../../assets/images/icons/contacts-icon.svg";



import Images from "../../../constants/images";
import { LOGOUT } from "../../../redux/actions/authentication";

export default function VendorSideBar({ children }) {
  const [sidebar, setSidebar] = useState(true);
  const [state,setState]=useState({
    userManagement:true,
    userOrders:true,
    specialServices:true,
    WebAndApp:true,
  })
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const childrenWithProps = React.Children.map(children, (child) => {
    // Checking isValidElement is the safe way and avoids a typescript
    // error too.
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { setSidebar, sidebar });
    }
    return child;
  });
  return (
    <div className="vendor-board-wrapper">
      <div id="vendor-board-container">
        <aside className={`side-navbar ${sidebar && "active-nav"}`}>
          <div className="logo-div">
            <img
              src={Images.Pictures.logo}
              style={{ margin: "0 auto", width: "7rem" }}
              alt="sunset"
            />
            <span style={{ fontSize: "2rem", marginLeft: "1rem" }}>
              KOKO Ranch
            </span>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <h4 className="fs-4 title-color">Admin Dashboard</h4>
            <div>
              <h4 className="fs-5 text-bold">
                {/* <Link
                to={"/"}
                onClick={(e) => {
                  e.preventDefault();
                  dispatch(LOGOUT(navigate));
                }} */}
                {/* > */}
                <FaSignOutAlt />
                {/* <Logout width={15} fill="white" /> */}
                &nbsp;Logout
                {/* </Link> */}
              </h4>
            </div>
          </div>
          <div className="sidebar-content">
          <h4 className="fs-5">
            <NavLink to="/admin-profile" className="vendor-link" end>
              <div>
                <FaRegUser fill="white" />
                &nbsp; Admin Profile
              </div>
            </NavLink>
          </h4>
          <h4 className="fs-5">
            <NavLink to="/my-products" className="vendor-link">
              <div>
                <WineBottle  fill="white" width={15} />
                &nbsp; Admin Products
              </div>
            </NavLink>
          </h4>
          <h4 className="fs-5">
            <NavLink
              to="/vendor-productshippingdetails"
              className="vendor-link"
            >
              <div className="vendor-inbox-link">
                {/* <img src={shipping} style={{ width: "8%", marginRight: "5px" }} /> */}
                <Shipping fill="white" width={15} />
                &nbsp; Admin Shipping Details
              </div>
            </NavLink>
          </h4>
          <h4 className="fs-5">
            <NavLink to="/featured-productandservices" className="vendor-link">
            <div className="vendor-inbox-link">
              {/* <img src={medal} style={{ width: "8%", marginRight: "5px" }} /> */}
              <Medal fill="white" width={15} />
              &nbsp; Featured Products And Services
            </div>
            </NavLink>
          </h4>
          <h4 className="fs-5">
            <NavLink to="/vendor-productorders" className="vendor-link">
              <div className="vendor-inbox-link">
                <FeatherList fill="white" width={15} />
                &nbsp; Admin Product Orders
              </div>
            </NavLink>
          </h4>
          <h4 className="fs-5">
            <NavLink to="/inbox" className="vendor-link">
            <div className="vendor-inbox-link">
              {/* <img src={inbox} style={{ width: "8%", marginRight: "5px" }} /> */}
              <Inbox fill="white" width={15} />
              &nbsp; Messages
              <span className="count">3</span>
            </div>
            </NavLink>
          </h4>
          <h4 className="fs-5">
            <NavLink to="/rating-reviews" className="vendor-link">
            <div className="vendor-inbox-link">
              {/* <img src={ratings} style={{ width: "8%", marginRight: "5px" }} /> */}
              <Ratings fill="white" width={15} />
              &nbsp; Ratings & Reviews
              <span className="count">2</span>
            </div>
            </NavLink>
          </h4>
          <h4 className="fs-5">
            <NavLink to="/managers" className="vendor-link">
            <div className="vendor-inbox-link">

              <Notifications  width={15} />
              &nbsp; Managers
            </div>
            </NavLink>
          </h4>
          <h4 className="fs-5">
            <NavLink to="/all-notifications" className="vendor-link">
            <div className="vendor-inbox-link">

              <Notifications  width={15} />
              &nbsp; All Notifications
            </div>
            </NavLink>
      
          </h4>
          <h4 className="fs-5">
            <NavLink to="/notification-settings" className="vendor-link">
            <div className="vendor-inbox-link">

              <Settings fill="white" width={15} />
              &nbsp; Admin Notification Settings
            </div>
            </NavLink>
          </h4>
              {/* second Heading */}
              <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
          <h4 className="fs-4 title-color">User Management</h4>  
          <div style={{cursor:'pointer'}}>
          <DownArrow fill={'#14A384'} width={15} onClick={()=>setState({...state,userManagement:!state.userManagement})} />
          </div>
          </div>
          {state.userManagement == true && (
            <>
            <h4 className="fs-5">
            {/* <NavLink to="/vendor-profile" className="vendor-link"> */}
            <div className="vendor-inbox-link">

              <PeoplesGroup fill="white" width={15} />
              &nbsp; All Users
            </div>
          </h4>
          <h4 className="fs-5">
            {/* <NavLink to="/vendor-profile" className="vendor-link"> */}
            <div className="vendor-inbox-link">

              <FeatherList fill="white" width={15} />
              &nbsp; Vendor Products
            </div>
          </h4>
          <h4 className="fs-5">
            {/* <NavLink to="/vendor-profile" className="vendor-link"> */}
            <div className="vendor-inbox-link">

              <Agriculture fill="white" width={15} />
              &nbsp; Vendor Agricultural Service
            </div>
          </h4>
          <h4 className="fs-5">
            {/* <NavLink to="/vendor-profile" className="vendor-link"> */}
            <div className="vendor-inbox-link">

              <UserTrades fill="white" width={15} />
              &nbsp; User Trades
            </div>
          </h4>
          </>

            )}

          {/* third Heading */}
          <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
          >
          <h4 className="fs-4 title-color">User Orders</h4>  
          <div style={{cursor:'pointer'}}>
          <DownArrow fill={'#14A384'} width={15} onClick={()=>setState({...state,userOrders:!state.userOrders})} />
          </div>
          </div>
          {state.userOrders ==true &&
           ( 
            <>
           <h4 className="fs-5">
            {/* <NavLink to="/vendor-profile" className="vendor-link"> */}
            <div className="vendor-inbox-link">

              <FeatherList fill="white" width={15} />
              &nbsp; Vendor Product Orders
            </div>
          </h4>
          <h4 className="fs-5">
            {/* <NavLink to="/vendor-profile" className="vendor-link"> */}
            <div className="vendor-inbox-link">

              <FeatherList fill="white" width={15} />
              &nbsp; Agricultural Services Orders
            </div>
          </h4>
          <h4 className="fs-5">
            {/* <NavLink to="/vendor-profile" className="vendor-link"> */}
            <div className="vendor-inbox-link">

              <UserTrades fill="white" width={15} />
              &nbsp; Trade Requests
            </div>
          </h4>
          </>
          
          )
          }
            {/* Fourth Heading */}
            <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
          <h4 className="fs-4 title-color">Special Services</h4> 
          <div style={{cursor:'pointer'}}>
          <DownArrow fill={'#14A384'} width={15} onClick={()=>setState({...state,specialServices:!state.specialServices})} />
            </div> 
          </div>
          { state.specialServices ==true &&
           ( <h4 className="fs-5">
            {/* <NavLink to="/vendor-profile" className="vendor-link"> */}
            <div className="vendor-inbox-link">

              <AdsIcon fill="white" width={15} />
              &nbsp; Medical Merijuana Ads
            </div>
          </h4>)
          }
            {/* fifth Heading */}
            <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
          <h4 className="fs-4 title-color">Web and App Management &nbsp; </h4>  
          <div style={{cursor:'pointer'}}>
          <DownArrow fill={'#14A384'} width={15} onClick={()=>setState({...state,WebAndApp:!state.WebAndApp})} />
          </div>
          </div>
         { state.WebAndApp ==true && (
         <>
         <h4 className="fs-5">
            {/* <NavLink to="/vendor-profile" className="vendor-link"> */}
            <div className="vendor-inbox-link">

              <Categories fill="white" width={15} />
              &nbsp; Categories
            </div>
          </h4>
          <h4 className="fs-5">
            {/* <NavLink to="/vendor-profile" className="vendor-link"> */}
            <div className="vendor-inbox-link">

              <Agriculture fill="white" width={15} />
              &nbsp; Web Banners
            </div>
          </h4>
          <h4 className="fs-5">
            {/* <NavLink to="/vendor-profile" className="vendor-link"> */}
            <div className="vendor-inbox-link">

              <Mobile fill="white" width={15} />
              &nbsp; App Banners
            </div>
          </h4>
          <h4 className="fs-5">
            {/* <NavLink to="/vendor-profile" className="vendor-link"> */}
            <div className="vendor-inbox-link">

              <ContactIcon fill="white" width={15} />
              &nbsp; Contact Details
            </div>
          </h4>
         </>
          
          )
          }
          </div>
          {/* <h4>
            <NavLink to="/vendor-settings" className="vendor-link">
              <div>
                <FaRegSun />
                &nbsp; Settings
              </div>
            </NavLink>
          </h4> */}
          {/* <div style={{ marginTop: "4rem" }}>
            <h4 className="fs-5 text-bold"> */}
          {/* <Link
                to={"/"}
                onClick={(e) => {
                  e.preventDefault();
                  dispatch(LOGOUT(navigate));
                }} */}
          {/* > */}
          {/* <FaSignOutAlt />
              &nbsp;Logout
              {/* </Link> */}
          {/* </h4>
          </div> */}


          {/* <h4 className="fs-5 ">
            Switch To <span className="title-color">Buyer</span>
          </h4> */}
        </aside>
        <main>{childrenWithProps}</main>
      </div>
    </div>
  );
}
