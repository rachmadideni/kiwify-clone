import { createBrowserRouter } from "react-router-dom";
import Login from "containers/Login";
import Register from "containers/Register";
import Welcome from "containers/Welcome";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path:"/signup",
    element: <Register />
  },
  {
    path:"/welcome",
    element: <Welcome />
  }
]);

export default router;
