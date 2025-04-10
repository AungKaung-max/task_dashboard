import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import Login from "./pages/Login.tsx";
import Dashboard from "./pages/Dashboard.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CreateDashboard from "./pages/CreateDashboard.tsx";
import NotFound from "./pages/NotFound.tsx";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <div>Register</div> },
  { path: "/dashboard", element: <Dashboard /> },
  { path: "/dashboard/create", element: <CreateDashboard /> },
  { path: "*", element: <NotFound /> },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
