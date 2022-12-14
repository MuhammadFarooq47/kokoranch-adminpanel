import React from "react";
import { FaBars, FaBell } from "react-icons/fa";
import Images from "../../../constants/images";
import { useSelector } from "react-redux";

export default function NavBar({ setSidebar, sidebar, title, banner }) {
  const user = useSelector((state) => state.user.loggedInUser);

  return (
    <nav className="trader-profile-navbar">
      <div className="trader-profile-navbar_left">
        <div
          className="border-0 "
          id="menu-btn"
          onClick={() => {
            setSidebar(!sidebar);
          }}
        >
          <FaBars />
        </div>
        <h2>{title}</h2>
      </div>
      {banner && (
        <div className="trader-profile-navbar_left">
          <p style={{ marginRight: "5px" }}>Active Banner</p>
          <div className="vr" style={{ marginRight: "5px" }}></div>
          <p>InActive Banner</p>
        </div>
      )}
      <div className="trader-profile-navbar_right">
        <div className="trader-profile-navbar_right_notification-wrapper">
          <FaBell className="trader-profile-navbar_right_notification-wrapper_icon" />
          <span className="trader-profile-navbar_right_notification-wrapper_count">
            3
          </span>
        </div>
        <div className="trader-profile-navbar_right_user-wrapper">
          <img
            src={user?.image ? user?.image : Images.Pictures.profile}
            className="trader-profile-navbar_right_user-wrapper_image"
            alt="trader"
          />
          <span className="trader-profile-navbar_right_user-wrapper_name">
            {user?.firstName && user?.lastName
              ? user?.firstName + " " + user?.lastName
              : "Admin"}
          </span>
        </div>
      </div>
    </nav>
  );
}
