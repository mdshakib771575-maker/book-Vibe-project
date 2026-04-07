
import { createBrowserRouter } from "react-router";
import Books from "../pages/Books/Books";
import HomePage from "../pages/HomePage/HomePage";
import MainLayout from "../Layout/MainLayout";
import ErrorPage from "../pages/ErrorPage";
export const router = createBrowserRouter([
  {
    path: "/",
    element:<MainLayout></MainLayout>,
    children:[
      {
        index:true,
        element:<HomePage></HomePage>
      },
      {
        path:"/books",
        Component:Books
      }
    ],
    errorElement:<ErrorPage></ErrorPage>
  },
]);