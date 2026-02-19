import { Link } from "react-router-dom"

const PokemonCard = ({ poke }) => {

    const statusColor = poke.status === "Alive" ? "#22c55e"
                      : poke.status === "Dead" ? "#ef4444"
                      : "#9ca3af"

    return (
        <Link to={`/pokedex/${poke.id}`}>
            <div className="flex flex-col justify-center items-center gap-2 p-5 rounded-xl cursor-pointer transition duration-300 hover:scale-105"
                style={{
                    background: "linear-gradient(135deg, #0a0a2e, #001a0a)",
                    border: `1px solid ${statusColor}40`,
                    boxShadow: `0 0 20px ${statusColor}15`
                }}
            >
                {/* Imagen con brillo */}
                <div className="relative flex justify-center items-center">
                    <div className="absolute w-36 h-36 rounded-full animate-pulse opacity-20"
                        style={{ background: `radial-gradient(circle, ${statusColor}, transparent)` }}
                    />
                    <img
                        src={poke.image}
                        alt={poke.name}
                        className="w-32 h-32 rounded-full object-cover relative z-10"
                        style={{
                            border: `3px solid ${statusColor}`,
                            boxShadow: `0 0 20px ${statusColor}`
                        }}
                    />
                </div>

                {/* ID */}
                <span className="text-xs font-bold"
                    style={{ color: "#4ade8080" }}
                >
                    #{poke.id}
                </span>

                {/* Nombre */}
                <h2 className="font-black text-center text-sm"
                    style={{ color: "white" }}
                >
                    {poke.name}
                </h2>

                {/* Status */}
                <span className="text-xs font-black px-4 py-1 rounded-full uppercase tracking-widest text-black"
                    style={{
                        background: statusColor,
                        boxShadow: `0 0 10px ${statusColor}`
                    }}
                >
                    {poke.status}
                </span>
            </div>
        </Link>
    )
}

export default PokemonCard