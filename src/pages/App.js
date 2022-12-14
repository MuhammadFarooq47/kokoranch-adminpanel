// IMPORTING GLOBAL DEPENDENCIES
import { ToastContainer } from "react-toastify";

// Auth
import Navigation from "../navigation/navigation";

// IMPORTING REDUX PROVIDER
import { Provider } from "react-redux";
// GETTING STORE TO PROVIDE TO REDUX PROVIDER
// import { store,persistor } from "../redux/store";
import { store, persistor } from "../redux/store";

// IMPORTING ALL THE STYLING

import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "react-phone-input-2/lib/style.css";
import "../assets/styles/Sass/globals.scss";
import "react-toastify/dist/ReactToastify.css";
import "./App.scss";
import { PersistGate } from "redux-persist/integration/react";
function App() {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ToastContainer
            theme="dark"
            position="bottom-left"
            closeOnClick={true}
            pauseOnHover={false}
            style={{ fontSize: 12 }}
          />
          <Navigation />
        </PersistGate>
      </Provider>
    </>
  );
}

export default App;
