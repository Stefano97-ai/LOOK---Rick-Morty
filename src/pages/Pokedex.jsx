import axios from "axios"
import { useEffect, useState } from "react"
import PokemonCard from "../components/PokemonCard"

const Pokedex = () => {
    const [pokemons, setPokemons] = useState([])
    const [loading, setLoading] = useState(false)
    const [search, setSearch] = useState("")

    useEffect(() => {
        const fetchPokemon = async () => {
            try {
                setLoading(true)
                const response = await axios.get("https://rickandmortyapi.com/api/character?page=1")
                setPokemons(response.data.results)
            } catch (err) {
                console.log(err)
            } finally {
                setLoading(false)
            }
        }
        fetchPokemon()
    }, [])

    const filteredPokemons = pokemons?.filter(poke =>
        poke.name.toLowerCase().includes(search.toLowerCase())
    )

    return (
        <div className="min-h-screen px-10 pt-16 pb-10"
            style={{ background: "linear-gradient(135deg, #000000, #0a0a2e, #001a0a)" }}
        >
            <h1 className="text-4xl font-black text-center mb-6 mt-4 uppercase tracking-widest"
                style={{
                    background: "linear-gradient(135deg, #ffffff, #4ade80)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    filter: "drop-shadow(0 0 10px #22c55e)"
                }}
            >
                🛸 Personajes del Multiverso
            </h1>

            <div className="max-w-2xl mx-auto mb-8">
                <input
                    type="text"
                    placeholder="🔍 Buscar personaje..."
                    className="w-full px-6 py-3 rounded-full font-bold outline-none text-white"
                    style={{
                        background: "#0a0a2e",
                        border: "2px solid #22c55e50",
                        boxShadow: "0 0 20px #22c55e20"
                    }}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-5 max-w-5xl mx-auto">
                {loading
                    ? <div className="col-span-4 text-center font-black text-4xl animate-bounce"
                        style={{ color: "#4ade80" }}
                      >
                        🛸 Abriendo portal...
                      </div>
                    : filteredPokemons?.map((poke) => (
                        <PokemonCard poke={poke} key={poke.id} />
                    ))
                }
            </div>
        </div>
    )
}

export default Pokedex