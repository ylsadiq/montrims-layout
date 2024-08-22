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
import DISBCI02ORRF from "../Pages/DISBCI02ORRF/DISBCI02ORRF";
import DISBCI01ORF from "../Pages/DISBCI01ORF/DISBCI01ORF";
import DISBCI02ORF from "../Pages/DISBCI02ORF/DISBCI02ORF";
import DISBCI01JRF from "../Pages/DISBCI01JRF/DISBCI01JRF";
import DISBCI02JRF from "../Pages/DISBCI02JRF/DISBCI02JRF";
import DISBCI01CRF from "../Pages/DISBCI01CRF/DISBCI01CRF";
import DISBCI02CRF from "../Pages/DISBCI02CRF/DISBCI02CRF";
import SLX01CRF from "../Pages/SLX01CRF/SLX01CRF";
import SLX02CRF from "../Pages/SLX02CRF/SLX02CRF";
import SLX01LRF from "../Pages/SLX01LRF/SLX01LRF";
import SLX02LRF from "../Pages/SLX02LRF/SLX02LRF";

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
      {
        path: "/DISBCI02ORRF",
        element: <DISBCI02ORRF />,
      },
      {
        path: "/DISBCI01ORF",
        element: <DISBCI01ORF />,
      },
      {
        path: "/DISBCI02ORF",
        element: <DISBCI02ORF />,
      },
      {
        path: "/DISBCI01JRF",
        element: <DISBCI01JRF />,
      },
      {
        path: "/DISBCI02JRF",
        element: <DISBCI02JRF />,
      },
      {
        path: "/DISBCI02JRF",
        element: <DISBCI02JRF />,
      },
      {
        path: "/DISBCI01CRF",
        element: <DISBCI01CRF />,
      },
      {
        path: "/DISBCI01CRF",
        element: <DISBCI01CRF />,
      },
      {
        path: "/DISBCI02CRF",
        element: <DISBCI02CRF />,
      },
      {
        path: "/SLX01CRF",
        element: <SLX01CRF />,
      },
      {
        path: "/SLX02CRF",
        element: <SLX02CRF />,
      },
      {
        path: "/SLX01LRF",
        element: <SLX01LRF />,
      },
      {
        path: "/SLX02LRF",
        element: <SLX02LRF />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default router;
