
import { createBrowserRouter, Route} from "react-router-dom";
import { HomePage } from "./pages/home/HomePage";
import { RegisterPokemonPage } from "./pages/registration/Registration";
import { SearchPage } from "./pages/search/Search";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage/>,
    },
    {
        path: '/pokemom/register',
        element: <RegisterPokemonPage/>,
      },
      {
        path: "/search",
        element: <SearchPage/>
          ,
      },
  ]);