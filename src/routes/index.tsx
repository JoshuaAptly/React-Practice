import { createBrowserRouter, RouterProvider } from "react-router";
import DashboardLayout from "../pages/dashbaord";
import { Home } from "../components/home";

const router = createBrowserRouter([
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
    ],
  },
]);

export function AppRouter() {
  return <RouterProvider router={router} />;
}
