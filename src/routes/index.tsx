import { createBrowserRouter, RouterProvider } from "react-router";
import DashboardLayout from "../pages/dashbaord";
import { Home } from "../components/home";
import { ControlledForm } from "@/components/ControlledForm";
import { UnControlledForm } from "@/components/UncontrolledForm";
import { ContextApiDemo } from "@/components/contextapi";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "cform",
        element: <ControlledForm />,
      },
      {
        path: "uform",
        element: <UnControlledForm />,
      },
      {
        path: "context",
        element: <ContextApiDemo />,
      },
    ],
  },
]);

export function AppRouter() {
  return <RouterProvider router={router} />;
}
