import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import Register from "./components/Register";
import Login from "./components/Login";
import Layout from "./components/Layout";
import DesignPackages from "./components/DesignPackages";
import Cart from "./components/Cart";
import Profile from "./components/Profile";
import DesignPackageDetails from "./components/DesignPackageDetails";


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/designpackages",
          element: <DesignPackages />,
        },
        {
        path: '/designpackages/:title',
        element: <DesignPackageDetails />,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
        {
          path: "/profile",
          element: <Profile />,
        }
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
