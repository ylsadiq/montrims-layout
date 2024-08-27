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
import SLX01CJRF from "../Pages/SLX01CJRF/SLX01CJRF";
import SLX02CJRF from "../Pages/SLX02CJRF/SLX02CJRF";
import SLX01JRF from "../Pages/SLX01JRF/SLX01JRF";
import SLX02JRF from "../Pages/SLX02JRF/SLX02JRF";
import LNCBCI01CRF from "../Pages/LNCBCI01CRF/LNCBCI01CRF";
import LNCBCI02CRF from "../Pages/LNCBCI02CRF/LNCBCI02CRF";
import BABABCI01ORRF from "../Pages/BABABCI01ORRF/BABABCI01ORRF";
import BABABCI02ORRF from "../Pages/BABABCI02ORRF/BABABCI02ORRF";
import BABABCI01ORF from "../Pages/BABABCI01ORF/BABABCI01ORF";
import BABABCI02ORF from "../Pages/BABABCI02ORF/BABABCI02ORF";
import BABABCI01CRF from "../Pages/BABABCI01CRF/BABABCI01CRF";
import BABABCI02CRF from "../Pages/BABABCI02CRF/BABABCI02CRF";
import CKIDBBCI01ORF from "../Pages/CKIDBBCI01ORF/CKIDBBCI01ORF";
import CKIDBBCI02ORF from "../Pages/CKIDBBCI02ORF/CKIDBBCI02ORF";
import CKIDBBCI02JRF from "../Pages/CKIDBBCI02JRF/CKIDBBCI02JRF";
import CKIDBBCI01CRF from "../Pages/CKIDBBCI01CRF/CKIDBBCI01CRF";
import CKIDBBCI02CRF from "../Pages/CKIDBBCI02CRF/CKIDBBCI02CRF";
import LKIDBBCI02ORF from "../Pages/LKIDBBCI02ORF/LKIDBBCI02ORF";
import LKIDBBCI02JRF from "../Pages/LKIDBBCI02JRF/LKIDBBCI02JRF";
import LKIDBBCI01CRF from "../Pages/LKIDBBCI01CRF/LKIDBBCI01CRF";
import LKIDBBCI02CRF from "../Pages/LKIDBBCI02CRF/LKIDBBCI02CRF";
import LKIDGBCI02ORF from "../Pages/LKIDGBCI02ORF/LKIDGBCI02ORF";

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
      {
        path: "/SLX01CJRF",
        element: <SLX01CJRF />,
      },
      {
        path: "/SLX02CJRF",
        element: <SLX02CJRF />,
      },
      {
        path: "/SLX01JRF",
        element: <SLX01JRF />,
      },
      {
        path: "/SLX02JRF",
        element: <SLX02JRF />,
      },
      {
        path: "/LNCBCI01CRF",
        element: <LNCBCI01CRF />,
      },
      {
        path: "/LNCBCI02CRF",
        element: <LNCBCI02CRF />,
      },
      {
        path: "/BABABCI01ORRF",
        element: <BABABCI01ORRF />,
      },
      {
        path: "/BABABCI02ORRF",
        element: <BABABCI02ORRF />,
      },
      {
        path: "/BABABCI01ORF",
        element: <BABABCI01ORF />,
      },
      {
        path: "/BABABCI02ORF",
        element: <BABABCI02ORF />,
      },
      {
        path: "/BABABCI01CRF",
        element: <BABABCI01CRF />,
      },
      {
        path: "/BABABCI02CRF",
        element: <BABABCI02CRF />,
      },
      {
        path: "/CKIDBBCI01ORF",
        element: <CKIDBBCI01ORF />,
      },
      {
        path: "/CKIDBBCI02ORF",
        element: <CKIDBBCI02ORF />,
      },
      {
        path: "/CKIDBBCI02JRF",
        element: <CKIDBBCI02JRF />,
      },
      {
        path: "/CKIDBBCI01CRF",
        element: <CKIDBBCI01CRF />,
      },
      {
        path: "/CKIDBBCI02CRF",
        element: <CKIDBBCI02CRF />,
      },
      {
        path: "/LKIDBBCI02ORF",
        element: <LKIDBBCI02ORF />,
      },
      {
        path: "/LKIDBBCI02JRF",
        element: <LKIDBBCI02JRF />,
      },
      {
        path: "/LKIDBBCI01CRF",
        element: <LKIDBBCI01CRF />,
      },
      {
        path: "/LKIDBBCI02CRF",
        element: <LKIDBBCI02CRF />,
      },
      {
        path: "/LKIDGBCI02ORF",
        element: <LKIDGBCI02ORF />,
      },
      
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default router;
