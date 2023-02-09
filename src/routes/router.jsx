import { createBrowserRouter } from "react-router-dom";
import Login from "containers/Login";
import Register from "containers/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path:"/signup",
    element: <Register />
  }
]);

export default router;
