import { createBrowserRouter } from "react-router-dom";
import Main from "./Main";
import CKIDB02JRF from "../Pages/CKIDB02JRF/CKIDB02JRF";
import CKIDBBCI01JRF from "../Pages/CKIDBBCI01JRF/CKIDBBCI01JRF";
import CKIDG01JRF from "../Pages/CKIDG01JRF/CKIDG01JRF";
import CKIDGBCI01JRF from "../Pages/CKIDGBCI01JRF/CKIDGBCI01JRF";
import LKIDBBCI01JRF from "../Pages/LKIDBBCI01JRF/LKIDBBCI01JRF";
import LKIDGBCI01ORF from "../Pages/LKIDGBCI01ORF/LKIDGBCI01ORF";
import Login from "../Pages/Login";
import ProtectedRoute from "./ProtectedRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <Main />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "/CKIDB02JRF",
        element: <CKIDB02JRF />,
      },
      {
        path: "/CKIDBBCI01JRF",
        element: <CKIDBBCI01JRF />,
      },
      {
        path: "/CKIDG01JRF",
        element: <CKIDG01JRF />,
      },

      {
        path: "/CKIDGBCI01JRF",
        element: <CKIDGBCI01JRF />,
      },
      {
        path: "/LKIDBBCI01JRF",
        element: <LKIDBBCI01JRF />,
      },
      {
        path: "/LKIDGBCI01ORF",
        element: <LKIDGBCI01ORF />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default router;
