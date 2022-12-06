import React, { Suspense, useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
// Full Screen Loader
import FullScreenLoader from "../components/FullScreenLoader";
// VendorSideBar
import VendorSideBar from "../pages/dashboard/admin/SideBar";

// PROTECTIVE ROUTE
// import ProtectedRoute from "./authetication";
// import { useDispatch, useSelector } from "react-redux";
// import { CHECK_TOKEN } from "../redux/actions/authentication";
import ServiceOrderIndividual from "../pages/dashboard/admin/ServiceOrderIndividual";
import SplashScreen from "../pages/dashboard/admin/pages/SplashScreen/SplashScreen";
import AllNotifications from "../pages/dashboard/admin/AllNotifications";
import Categories from "../pages/dashboard/admin/Categories";
import CategoryDetails from "../pages/dashboard/admin/CategoryDetails";
import AddNewCategory from "../pages/dashboard/admin/AddNewCategory";
import CategoryPositioning from "../pages/dashboard/admin/CategoryPositioning";
// SCREENS

const OtpScreen = React.lazy(() =>
  import("../pages/dashboard/admin/pages/OtpScreen/OtpScreen")
);
const CreateNewPassword = React.lazy(() =>
  import("../pages/dashboard/admin/pages/CreateNewPassword/CreateNewPassword")
);


// VENDOR STUFF
const AdminProfile = React.lazy(() =>
  import("../pages/dashboard/admin/profile")
);
const MyProducts = React.lazy(() =>
  import("../pages/dashboard/admin/Products")
);
const VendorProducts = React.lazy(() =>
  import("../pages/dashboard/admin/VendorProducts")
);
const AddProduct = React.lazy(() =>
  import("../pages/dashboard/admin/AddProduct")
);
const AdminProductDetails = React.lazy(() =>
  import("../pages/dashboard/admin/ProductDetails")
);
const AdminProductDetailsEdit = React.lazy(() =>
  import("../pages/dashboard/admin/ProductDetailsEdit")
);
const VendorServices = React.lazy(() =>
  import("../pages/dashboard/admin/Services")
);
const VendorServiceOrders = React.lazy(() =>
  import("../pages/dashboard/admin/ServiceOrders")
);
const VendorServiceOrderDetails = React.lazy(() =>
  import("../pages/dashboard/admin/ServiceOrderIndividual")
);
const MedicalMerijuana = React.lazy(() =>
  import("../pages/dashboard/admin/MedicalMerijouana")
);
const Messages = React.lazy(() =>
  import("../pages/dashboard/admin/inbox/index")
);
const Managers = React.lazy(() => import("../pages/dashboard/admin/Managers"));
const AddNewManager = React.lazy(() =>
  import("../pages/dashboard/admin/AddNewManager")
);
const ManagerRoles = React.lazy(() =>
  import("../pages/dashboard/admin/ManagerRoles")
);
const Rating = React.lazy(() => import("../pages/dashboard/admin/Rating"));
const VendorProductOrders = React.lazy(() =>
  import("../pages/dashboard/admin/ProductOrders")
);
const VendorProductShippingDetail = React.lazy(() =>
  import("../pages/dashboard/admin/ProductShippingDetail")
);
const AdminProductShippingDetailEdit = React.lazy(() =>
  import("../pages/dashboard/admin/ProductShippingDetailEdit")
);
const FeaturedProductAndServices = React.lazy(() =>
  import("../pages/dashboard/admin/Featured")
);
const ViewFeaturedDetails = React.lazy(() =>
  import("../pages/dashboard/admin/ViewFeaturedDetails")
);
const AdminProductOrderDetails = React.lazy(() =>
  import("../pages/dashboard/admin/ProductOrderDetails")
);
const NotificationSettings = React.lazy(() =>
  import("../pages/dashboard/admin/NotificationSettings")
);
const VendorAgricultuiralServices = React.lazy(() =>
  import("../pages/dashboard/admin/VendorAgriculturalServices")
);
const UserDetails = React.lazy(() =>
  import("../pages/dashboard/admin/userDetails")
);
const UserTrades = React.lazy(() =>
  import("../pages/dashboard/admin/userTrades")
);
const TradeRequest = React.lazy(() =>
  import("../pages/dashboard/admin/tradeRequest")
);
const Banners = React.lazy(() => import("../pages/dashboard/admin/banners"));
const BannerDetails = React.lazy(() =>
  import("../pages/dashboard/admin/bannerDetails")
);
const EditBannerDetails = React.lazy(() =>
  import("../pages/dashboard/admin/editBannerDetails")
);
const ContactDetails = React.lazy(() =>
  import("../pages/dashboard/admin/contactDetails")
);

const AllUsers = React.lazy(() => import("../pages/dashboard/admin/AllUsers"));

export default function Navigation() {
  return (
    <Routes>
      <Route path="/" element={<SplashScreen />} />
      <Route
        path="/otp-screen"
        element={
          <Suspense fallback={<FullScreenLoader />}>
            <OtpScreen />
          </Suspense>
        }
      />
      <Route
        path="/create-new-password"
        element={
          <Suspense fallback={<FullScreenLoader />}>
            <CreateNewPassword />
          </Suspense>
        }
      />
      <Route
        path="/admin-profile"
        element={
          <Suspense fallback={<FullScreenLoader />}>
            <VendorSideBar>
              <AdminProfile />
            </VendorSideBar>
          </Suspense>
        }
      />
      <Route
        path="/my-products"
        element={
          <Suspense fallback={<FullScreenLoader />}>
            <VendorSideBar>
              <MyProducts />
            </VendorSideBar>
          </Suspense>
        }
      />
      <Route
        path="/add-product"
        element={
          <Suspense fallback={<FullScreenLoader />}>
            <VendorSideBar>
              <AddProduct />
            </VendorSideBar>
          </Suspense>
        }
      />
      <Route
        path="/product-details"
        element={
          <Suspense fallback={<FullScreenLoader />}>
            <VendorSideBar>
              <AdminProductDetails />
            </VendorSideBar>
          </Suspense>
        }
      />
      <Route
        path="/product-details/edit"
        element={
          <Suspense fallback={<FullScreenLoader />}>
            <VendorSideBar>
              <AdminProductDetailsEdit />
            </VendorSideBar>
          </Suspense>
        }
      />
      <Route
        path="/admin-product-details"
        element={
          <Suspense fallback={<FullScreenLoader />}>
            <VendorSideBar>
              <AdminProductOrderDetails />
            </VendorSideBar>
          </Suspense>
        }
      />
      <Route
        path="/agricultural-services"
        element={
          <Suspense fallback={<FullScreenLoader />}>
            <VendorSideBar>
              <VendorServices />
            </VendorSideBar>
          </Suspense>
        }
      />
      <Route
        path="/vendor-productshippingdetails"
        element={
          <Suspense fallback={<FullScreenLoader />}>
            <VendorSideBar>
              <VendorProductShippingDetail />
            </VendorSideBar>
          </Suspense>
        }
      />
      <Route
        path="/inbox"
        element={
          <Suspense fallback={<FullScreenLoader />}>
            <VendorSideBar>
              <Messages />
            </VendorSideBar>
          </Suspense>
        }
      />
      <Route
        path="/managers"
        element={
          <Suspense fallback={<FullScreenLoader />}>
            <VendorSideBar>
              <Managers />
            </VendorSideBar>
          </Suspense>
        }
      />
      <Route
        path="/add-new-manager"
        element={
          <Suspense fallback={<FullScreenLoader />}>
            <VendorSideBar>
              <AddNewManager />
            </VendorSideBar>
          </Suspense>
        }
      />
      <Route
        path="/manager-roles"
        element={
          <Suspense fallback={<FullScreenLoader />}>
            <VendorSideBar>
              <ManagerRoles />
            </VendorSideBar>
          </Suspense>
        }
      />
      <Route
        path="/notification-settings"
        element={
          <Suspense fallback={<FullScreenLoader />}>
            <VendorSideBar>
              <NotificationSettings />
            </VendorSideBar>
          </Suspense>
        }
      />
      <Route
        path="/all-notifications"
        element={
          <Suspense fallback={<FullScreenLoader />}>
            <VendorSideBar>
              <AllNotifications />
            </VendorSideBar>
          </Suspense>
        }
      />
      <Route
        path="/rating-reviews"
        element={
          <Suspense fallback={<FullScreenLoader />}>
            <VendorSideBar>
              <Rating />
            </VendorSideBar>
          </Suspense>
        }
      />

      <Route
        path="/categories"
        element={
          <Suspense fallback={<FullScreenLoader />}>
            <VendorSideBar>
              <Categories />
            </VendorSideBar>
          </Suspense>
        }
      />
      <Route
        path="/category-details"
        element={
          <Suspense fallback={<FullScreenLoader />}>
            <VendorSideBar>
              <CategoryDetails />
            </VendorSideBar>
          </Suspense>
        }
      />
      <Route
        path="/:route/category"
        element={
          <Suspense fallback={<FullScreenLoader />}>
            <VendorSideBar>
              <AddNewCategory />
            </VendorSideBar>
          </Suspense>
        }
      />
      <Route
        path="/category-positioning"
        element={
          <Suspense fallback={<FullScreenLoader />}>
            <VendorSideBar>
              <CategoryPositioning />
            </VendorSideBar>
          </Suspense>
        }
      />
      <Route
        path="/admin-productshippingdetails-edit"
        element={
          <Suspense fallback={<FullScreenLoader />}>
            <VendorSideBar>
              <AdminProductShippingDetailEdit />
            </VendorSideBar>
          </Suspense>
        }
      />
      <Route
        path="/admin-productorders"
        element={
          <Suspense fallback={<FullScreenLoader />}>
            <VendorSideBar>
              <VendorProductOrders />
            </VendorSideBar>
          </Suspense>
        }
      />
      <Route
        path="/vendor-serviceorders"
        element={
          <Suspense fallback={<FullScreenLoader />}>
            <VendorSideBar>
              <VendorServiceOrders />
            </VendorSideBar>
          </Suspense>
        }
      />
      <Route
        path="/vendor-serviceorder-details"
        element={
          <Suspense fallback={<FullScreenLoader />}>
            <VendorSideBar>
              <VendorServiceOrderDetails />
            </VendorSideBar>
          </Suspense>
        }
      />
      <Route
        path="/featured-productandservices"
        element={
          <Suspense fallback={<FullScreenLoader />}>
            <VendorSideBar>
              <FeaturedProductAndServices />
            </VendorSideBar>
          </Suspense>
        }
      />
      <Route
        path="/view-featured-productandservices/:id"
        element={
          <Suspense fallback={<FullScreenLoader />}>
            <VendorSideBar>
              <ViewFeaturedDetails />
            </VendorSideBar>
          </Suspense>
        }
      />
      <Route
        path="/vendor-serviceorder"
        element={
          <Suspense fallback={<FullScreenLoader />}>
            <VendorSideBar>
              <ServiceOrderIndividual />
            </VendorSideBar>
          </Suspense>
        }
      />
      <Route
        path="/all-users"
        element={
          <Suspense fallback={<FullScreenLoader />}>
            <VendorSideBar>
              <AllUsers />
            </VendorSideBar>
          </Suspense>
        }
      />
      <Route
        path="/all-user-UserDetails"
        element={
          <Suspense fallback={<FullScreenLoader />}>
            <VendorSideBar>
              <UserDetails />
            </VendorSideBar>
          </Suspense>
        }
      />
      <Route
        path="/vendor-products"
        element={
          <Suspense fallback={<FullScreenLoader />}>
            <VendorSideBar>
              <VendorProducts />
            </VendorSideBar>
          </Suspense>
        }
      />
      <Route
        path="/vendor-agricultural-services"
        element={
          <Suspense fallback={<FullScreenLoader />}>
            <VendorSideBar>
              <VendorAgricultuiralServices />
            </VendorSideBar>
          </Suspense>
        }
      />
      <Route
        path="/user-trades"
        element={
          <Suspense fallback={<FullScreenLoader />}>
            <VendorSideBar>
              <UserTrades />
            </VendorSideBar>
          </Suspense>
        }
      />
      <Route
        path="/trade-request"
        element={
          <Suspense fallback={<FullScreenLoader />}>
            <VendorSideBar>
              <TradeRequest />
            </VendorSideBar>
          </Suspense>
        }
      />
      <Route
        path="/vendor-productorders"
        element={
          <Suspense fallback={<FullScreenLoader />}>
            <VendorSideBar>
              <VendorProductOrders />
            </VendorSideBar>
          </Suspense>
        }
      />
      <Route
        path="/MedicalMerijuana"
        element={
          <Suspense fallback={<FullScreenLoader />}>
            <VendorSideBar>
              <MedicalMerijuana />
            </VendorSideBar>
          </Suspense>
        }
      />
      <Route
        path="/banners/:name"
        element={
          <Suspense fallback={<FullScreenLoader />}>
            <VendorSideBar>
              <Banners />
            </VendorSideBar>
          </Suspense>
        }
      />
      <Route
        path="/banners/:name/details"
        element={
          <Suspense fallback={<FullScreenLoader />}>
            <VendorSideBar>
              <BannerDetails />
            </VendorSideBar>
          </Suspense>
        }
      />
      <Route
        path="/banners/:name/:change/banner-details"
        element={
          <Suspense fallback={<FullScreenLoader />}>
            <VendorSideBar>
              <EditBannerDetails />
            </VendorSideBar>
          </Suspense>
        }
      />
      <Route
        path="/contact-details"
        element={
          <Suspense fallback={<FullScreenLoader />}>
            <VendorSideBar>
              <ContactDetails />
            </VendorSideBar>
          </Suspense>
        }
      />
    </Routes>
  );
}
