import React, { Suspense, useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
// layout
import Layout from "../components/layout";
// //  traderSideBar
// import TraderSideBar from "../components/traderSideBar";
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
// SCREENS
const VendorRegister = React.lazy(() => import("../pages/auth/vendorRegister"));
const OtpScreen = React.lazy(() => import("../pages/dashboard/admin/pages/OtpScreen/OtpScreen"));
const CreateNewPassword = React.lazy(() => import("../pages/dashboard/admin/pages/CreateNewPassword/CreateNewPassword"));


const VendorSignupSuccess = React.lazy(() =>
  import("../pages/screens/vendorSignupSuccess")
);
// VENDOR STUFF
const AdminProfile = React.lazy(() =>
  import("../pages/dashboard/admin/profile")
);
const VendorProducts = React.lazy(() =>
  import("../pages/dashboard/admin/Products")
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
const Home = React.lazy(() => import("../pages/screens/home"));
export default function Navigation() {
  // INITIZING STORAGES
  // const { isAuthenticated, userType } = useSelector(
  //   (state) => state.authReducer
  // );
  // const tokenStorage = localStorage.getItem("token");

  // const dispatch = useDispatch();
  // CHECKING FOR AUTHENTICATION
  // useEffect(() => {
  //   if (tokenStorage && !isAuthenticated) {
  //     dispatch(CHECK_TOKEN(tokenStorage));
  //   }
  // }, [tokenStorage, isAuthenticated]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Routes>
       <Route
        path="/"
        element={
        <SplashScreen/>
        }
      />
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
        path="/vendor-signup-success"
        element={
          <Suspense fallback={<FullScreenLoader />}>
            <Layout>
              <VendorSignupSuccess />
            </Layout>
          </Suspense>
        }
      />
      <Route
        path="/vendor-register"
        element={
          <Suspense fallback={<FullScreenLoader />}>
            <Layout>
              <VendorRegister />
            </Layout>
          </Suspense>
        }
      />
      <Route
        path="/my-products"
        element={
          <Suspense fallback={<FullScreenLoader />}>
            <VendorSideBar>
              <VendorProducts />
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
    </Routes>
  );
}
