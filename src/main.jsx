import "./index.css";
import App from "./App";
import React from "react";
import ReactDOM from "react-dom/client";
import Category from "./Pages/Home/Category/Category";
import NewsLayout from "./Pages/Layout/NewsLayout";
import News from "./Pages/Home/News/News/News";
import AuthProvider from "./providers/AuthProvider";
import LoginLayout from "./Pages/Layout/LoginLayout/LoginLayout";
import Login from "./Pages/Login/Login/Login";
import Register from "./Pages/Login/Register/Register";
import PrivateRoute from "./Pages/routes/PrivateRoute";
import Terms from "./Pages/Shared/Terms/Terms";
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginLayout />,
    children: [
      {
        path: "/",
        element: <Navigate to="/categories/0" />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/terms",
        element: <Terms />,
      },
    ],
  },
  {
    path: "/categories",
    element: <App />,
    children: [
      {
        path: ":id",
        element: <Category />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/categories/${params.id}`),
      },
    ],
  },
  {
    path: "/news",
    element: <NewsLayout />,
    children: [
      {
        path: ":id",
        element: (
          <PrivateRoute>
            <News />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/news/${params.id}`),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
