
import { createBrowserRouter } from "react-router";
import Books from "../pages/Books/Books";
import HomePage from "../pages/HomePage/HomePage";
import MainLayout from "../Layout/MainLayout";
import ErrorPage from "../pages/ErrorPage";
import BookDetails from "../pages/BookDetails";
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
      },
      {
        path:"/bookDetails/:id",
        Component:BookDetails,
        loader:()=> fetch('/booksData.json')

      }
    ],
    errorElement:<ErrorPage></ErrorPage>
  },
]);