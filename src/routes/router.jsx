import { createBrowserRouter } from "react-router-dom";
import Main from "./Main";
import CKIDB02JRF from "../Pages/CKIDB02JRF/CKIDB02JRF";
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
	
		],
  },
  {
    path: "/login",
    element: <Login />,
  },

]);

export default router;
