import {createBrowserRouter,RouterProvider} from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Restaurant from "./pages/Restaurant";
import {loader as restaurantsLoader} from "./pages/Home";
import {loader as restaurantDetailsLoader} from "./pages/Restaurant";
import {action as ratingSubmitAction } from "./pages/Restaurant";

function App() {

  const router=createBrowserRouter([{
    path:"/",
    element:<Header></Header>,
    errorElement:<></>,
    children:[
      {
        index:true,
        element:<Home></Home>,
        loader:restaurantsLoader,
      },
      {
        path:"/:restaurantid",
        element:<Restaurant></Restaurant>,
        loader:restaurantDetailsLoader,
        action:ratingSubmitAction,
      }
    ]
  }])
  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App
