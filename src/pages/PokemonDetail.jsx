import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"

const PokemonDetail = () => {

    const { id } = useParams()
    const [pokemonUnique, setPokemonUnique] = useState(null)

    useEffect(() => {
        const fetchPokemonUnique = async () => {
            try {
                const response = await axios.get(`https://rickandmortyapi.com/api/character/${id}`)
                setPokemonUnique(response?.data)
            } catch (err) {
                console.log(err)
            }
        }
        fetchPokemonUnique()
    }, [])

    return (
        <div className="flex flex-col justify-center items-center min-h-screen relative overflow-hidden"
            style={{ background: "linear-gradient(135deg, #000000, #0a0a2e, #001a0a)" }}
        >
            {/* Estrellas */}
            {[...Array(25)].map((_, i) => (
                <div key={i}
                    className="absolute rounded-full bg-white animate-pulse"
                    style={{
                        width: Math.random() * 3 + 1 + "px",
                        height: Math.random() * 3 + 1 + "px",
                        top: Math.random() * 100 + "%",
                        left: Math.random() * 100 + "%",
                        opacity: Math.random() * 0.7 + 0.3,
                        animationDelay: Math.random() * 3 + "s"
                    }}
                />
            ))}

            {/* Card */}
            <div className="relative z-10 flex flex-col items-center gap-5 p-10 rounded-2xl"
                style={{
                    background: "linear-gradient(135deg, #0a0a2e, #001a0a)",
                    border: "1px solid #22c55e40",
                    boxShadow: "0 0 60px #22c55e20, 0 0 120px #0a0a2e"
                }}
            >
                {/* Botón volver */}
                <div className="w-full flex justify-start">
                    <Link to="/pokedex"
                        className="font-black text-black px-6 py-2 rounded-full transition duration-300 hover:scale-110"
                        style={{
                            background: "linear-gradient(135deg, #4ade80, #22c55e)",
                            boxShadow: "0 0 20px #22c55e"
                        }}
                    >
                        ← Volver
                    </Link>
                </div>

                {/* Imagen con portal */}
                <div className="relative flex justify-center items-center">
                    <div className="absolute w-52 h-52 rounded-full animate-pulse opacity-20"
                        style={{ background: "radial-gradient(circle, #22c55e, transparent)" }}
                    />
                    <img
                        src={pokemonUnique?.image}
                        alt={pokemonUnique?.name}
                        className="w-44 h-44 rounded-full object-cover relative z-10"
                        style={{
                            border: "4px solid #22c55e",
                            boxShadow: "0 0 40px #22c55e, 0 0 80px #16a34a50"
                        }}
                    />
                </div>

                {/* ID */}
                <span className="font-bold text-sm"
                    style={{ color: "#4ade8080" }}
                >
                    #{pokemonUnique?.id}
                </span>

                {/* Nombre */}
                <h1 className="text-4xl font-black text-center"
                    style={{
                        background: "linear-gradient(135deg, #ffffff, #4ade80)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        filter: "drop-shadow(0 0 10px #22c55e)"
                    }}
                >
                    {pokemonUnique?.name}
                </h1>

                {/* Badges */}
                <div className="flex gap-3 flex-wrap justify-center">
                    <span className="px-4 py-2 rounded-full font-black text-white text-sm"
                        style={{ background: "#3b82f6", boxShadow: "0 0 10px #3b82f6" }}
                    >
                        {pokemonUnique?.species}
                    </span>
                    <span className="px-4 py-2 rounded-full font-black text-white text-sm"
                        style={{
                            background: pokemonUnique?.status === "Alive" ? "#22c55e" : pokemonUnique?.status === "Dead" ? "#ef4444" : "#9ca3af",
                            boxShadow: `0 0 10px ${pokemonUnique?.status === "Alive" ? "#22c55e" : "#ef4444"}`
                        }}
                    >
                        {pokemonUnique?.status}
                    </span>
                    <span className="px-4 py-2 rounded-full font-black text-white text-sm"
                        style={{ background: "#a855f7", boxShadow: "0 0 10px #a855f7" }}
                    >
                        {pokemonUnique?.gender}
                    </span>
                </div>

                {/* Info */}
                <div className="flex flex-col gap-2 text-center">
                    <p className="font-bold" style={{ color: "#86efac" }}>
                        🌍 Origen: <span className="text-white">{pokemonUnique?.origin?.name}</span>
                    </p>
                    <p className="font-bold" style={{ color: "#86efac" }}>
                        📍 Ubicación: <span className="text-white">{pokemonUnique?.location?.name}</span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default PokemonDetail