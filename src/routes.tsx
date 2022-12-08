
import { createBrowserRouter, Route} from "react-router-dom";
import { HomePage } from "./pages/home/HomePage";
import { RegisterPokemonPage } from "./pages/registration/Registration";

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
        path: "/abc",
        element: <div>
          <h1>Ok pense</h1>
        </div>,
      },
  ]);