import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import Home from "./pages/Home";
import Login from "./auth/Login";
import SignUp from "./auth/SignUp";
import ErrorPage from "./pages/ErrorPage";
import NewProduct from "./pages/NewProduct";
import Layout from "./pages/Layout";
import Order from "./pages/Order";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />} errorElement={<ErrorPage />}>
        <Route index element={<Home />} />
        <Route path="/product" element={<NewProduct />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="/order" element={<Order />} />
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
