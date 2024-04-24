import React from "react";
import ReactDOM from "react-dom/client";
// import 'bootstrap/dist/css/bootstrap.min.css';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import "./assets/styles/bootstrap.custom.css";
import "./assets/styles/index.css";
import { Provider } from "react-redux";
import store from "./store.js";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import HomeScreen from "./screen/HomeScreen";
import ProductScreen from "./screen/ProductScreen";
import CartScreen from "./screen/CartScreen";
import LoginScreen from "./screen/LoginScreen.jsx";
import RegisterScreen from "./screen/RegisterScreen.jsx";
import ShippingScreen from "./screen/ShippingScreen.jsx";
import PaymentScreen from "./screen/PaymentScreen.jsx";
import PrivateRoute from "./component/PrivateRoute.jsx";
import PlaceOrderScreen from "./screen/PlaceOrderScreen.jsx";
import OrderScreen from "./screen/OrderScreen.jsx";
import ProfileScreen from "./screen/ProfileScreen.jsx";
import AdminRoute from "./component/AdminRoute.jsx";
import OrderListScreen from "./screen/admin/OrderListScreen.jsx";
import ProductListScreen from "./screen/admin/ProductListScreen.jsx";
import ProductEditScreen from "./screen/admin/ProductEditScreen.jsx";
import UserListScreen from "./screen/admin/UserListScreen.jsx";
import UserEditScreen from "./screen/admin/UserEditScreen.jsx";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<HomeScreen />} />
      <Route path="/product/:id" element={<ProductScreen />} />
      <Route path="/cart" element={<CartScreen />} />
      <Route path="/login" element={<LoginScreen />} />
      <Route path="/Register" element={<RegisterScreen />} />

      <Route path="" element={<PrivateRoute />}>
        <Route path="/shipping" element={<ShippingScreen />} />
        <Route path="/payment" element={<PaymentScreen />} />
        <Route path="/placeorder" element={<PlaceOrderScreen />} />
        <Route path="/order/:id" element={<OrderScreen />} />
        <Route path="/profile" element={<ProfileScreen />} />
      </Route>
      <Route path="" element={<AdminRoute />}>
        <Route path="/admin/orderlist" element={<OrderListScreen />} />
        <Route path="/admin/productlist" element={<ProductListScreen />} />
        <Route path="/admin/product/:id/edit" element={<ProductEditScreen/>} />
        <Route path="/admin/userlist" element={<UserListScreen/>} />
        <Route path="/admin/user/:id/edit" element={<UserEditScreen/>} />
      </Route>
    </Route>
  )
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PayPalScriptProvider deferLoading={true}>
        <RouterProvider router={router} />
      </PayPalScriptProvider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
