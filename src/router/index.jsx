import { createBrowserRouter } from "react-router-dom"
import Layout from "../layout/Layout"
import Home from "../pages/Home"
import Pokedex from "../pages/Pokedex"
import PokemonDetail from "../pages/PokemonDetail"

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "/pokedex",
                element: <Pokedex />
            },
            {
                path: "/pokedex/:id",
                element: <PokemonDetail />
            }
        ]
    }
])