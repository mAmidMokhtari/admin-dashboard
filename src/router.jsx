import { createBrowserRouter } from "react-router-dom";

import Login from "./features/identity/components/Login";
import Register from "./features/identity/components/Register";
import IdentityLayout from "./layout/identity-layout";

const router = createBrowserRouter([
  {
    element: <IdentityLayout />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
]);

export default router;
