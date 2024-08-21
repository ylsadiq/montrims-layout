import { createBrowserRouter } from "react-router-dom";
import Main from "./Main";
import CKIDB02JRF from "../Pages/CKIDB02JRF/CKIDB02JRF";
import CKIDBBCI01JRF from "../Pages/CKIDBBCI01JRF/CKIDBBCI01JRF";
import CKIDG01JRF from "../Pages/CKIDG01JRF/CKIDG01JRF";
import CKIDGBCI01JRF from "../Pages/CKIDGBCI01JRF/CKIDGBCI01JRF";
import LKIDBBCI01JRF from "../Pages/LKIDBBCI01JRF/LKIDBBCI01JRF";
import LKIDGBCI01ORF from "../Pages/LKIDGBCI01ORF/LKIDGBCI01ORF";
import YSE02CRF from "../Pages/YSE02CRF/YSE02CRF";
import LKIDBBCI01ORF from "../Pages/LKIDBBCI01ORF/LKIDBBCI01ORF";
import YSEBCI01CRF from "../Pages/YSEBCI01CRF/YSEBCI01CRF";
import DISBCI01ORRF from "../Pages/DISBCI01ORRF/DISBCI01ORRF";
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
      {
        path: "/YSE02CRF",
        element: <YSE02CRF />,
      },
      {
        path: "/LKIDBBCI01ORF",
        element: <LKIDBBCI01ORF />,
      },
      {
        path: "/YSEBCI01CRF",
        element: <YSEBCI01CRF />,
      },
      {
        path: "/DISBCI01ORRF",
        element: <DISBCI01ORRF />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default router;
