import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./Context/AuthContext";
import SignUp from "./Components/User/SignUp";
import SignIn from "./Components/User/SignIn";
import SignOut from "./Components/User/SignOut";
import ChangePassword from "./Components/User/ChangePassword";
import Product from "./Components/Products/Product";
import ProductDetails from "./Components/Products/ProductDetails";
import UpdateProduct from "./Components/Products/UpdateProducts";
import Error from "./Components/Error/Error";

import "./App.css";
const App = () => {
  return (
    <AuthProvider>
      <Router>
        <div className="app">
          <Routes>
            <Route path="/" exact element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/change-password" element={<ChangePassword />} />
            <Route
              path="/product"
              element={
                <>
                  <SignOut />
                  <Product />
                </>
              }
            />
            <Route path="/product/details/:id" element={<ProductDetails />} />
            <Route path="/product/update/:id" element={<UpdateProduct />} />

            <Route path="*" element={<Error />} />
            <Route />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;
