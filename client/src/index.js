import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import reportWebVitals from "./reportWebVitals";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import rootReducer from "./redux/store";

import orderTypeReducer from "./redux/orderType.js";
import orderListReducer from "./redux/orderList";

import modalManager from "./redux/modalManager";
import customerInfo from "./redux/customerInfo";
import AuthProvider from "./hoc/authprovider";

const store = configureStore({
	reducer: {
		orderType: orderTypeReducer,
		orderList: orderListReducer,
		modalManager: modalManager,
		customerInfo: customerInfo,
        login: rootReducer,
	},

});
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <BrowserRouter>
        <Provider store={store}>
          <AuthProvider>
            <App />
          </AuthProvider>
        </Provider>
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
