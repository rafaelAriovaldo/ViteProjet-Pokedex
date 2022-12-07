import { createBrowserRouter,Link } from "react-router-dom";
import { HomePage } from "./pages/home/HomePage";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage/>,
    },
    {
        path: "/home",
        element: <div>hello word
            <Link to={'/'}>Text </Link><br></br>
            <a href="/">asdasd</a>
        </div>,
      },
  ]);