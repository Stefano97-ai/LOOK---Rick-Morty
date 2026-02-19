import { Link } from "react-router-dom"

const Home = () => {
    return (
        <div className="flex flex-col justify-center items-center h-screen overflow-hidden relative"
            style={{ background: "linear-gradient(135deg, #000000, #0a0a2e, #001a0a)" }}
        >
            {[...Array(30)].map((_, i) => (
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

            <div className="relative flex justify-center items-center mb-10">
                <div className="w-96 h-96 rounded-full absolute animate-ping opacity-5"
                    style={{ background: "radial-gradient(circle, #4ade80, transparent)" }}
                />
                <div className="w-80 h-80 rounded-full absolute animate-pulse opacity-10"
                    style={{ background: "radial-gradient(circle, #22c55e, transparent)" }}
                />
                <div className="w-64 h-64 rounded-full absolute opacity-20 animate-pulse"
                    style={{ background: "radial-gradient(circle, #16a34a, transparent)" }}
                />

                <div className="w-52 h-52 rounded-full flex justify-center items-center relative"
                    style={{
                        background: "radial-gradient(circle at 40% 40%, #bbf7d0, #22c55e, #14532d)",
                        boxShadow: "0 0 80px 30px #22c55e, 0 0 150px 60px #16a34a40, inset 0 0 40px #15803d"
                    }}
                >
                    <div className="w-36 h-36 rounded-full flex justify-center items-center"
                        style={{
                            background: "radial-gradient(circle, #dcfce7, #4ade80, #15803d)",
                            boxShadow: "inset 0 0 30px #166534"
                        }}
                    >
                        <div className="w-20 h-20 rounded-full animate-spin flex justify-center items-center"
                            style={{
                                background: "conic-gradient(#4ade80, #86efac, #22c55e, #4ade80)",
                                boxShadow: "0 0 20px #4ade80"
                            }}
                        >
                            <div className="w-10 h-10 rounded-full"
                                style={{
                                    background: "radial-gradient(circle, white, #bbf7d0)",
                                    boxShadow: "0 0 20px white"
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <h1 className="text-7xl font-black text-center mb-2 tracking-tight"
                style={{
                    background: "linear-gradient(135deg, #ffffff, #4ade80, #22c55e)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    textShadow: "none",
                    filter: "drop-shadow(0 0 20px #22c55e)"
                }}
            >
                Rick & Morty
            </h1>

            <h2 className="text-2xl font-bold mb-3 text-center tracking-widest uppercase"
                style={{ color: "#4ade80", textShadow: "0 0 15px #22c55e" }}
            >
                ✦ Portal al Multiverso Infinito ✦
            </h2>

            <p className="text-center text-lg mb-10 max-w-lg px-4"
                style={{ color: "#86efac" }}
            >
                Más de <span className="font-black text-white">800 personajes</span> en dimensiones infinitas.
                Cada uno con su historia, su mundo y su locura.
            </p>

            <Link
                to="/pokedex"
                className="font-black text-black text-xl px-14 py-5 rounded-full transition duration-300 hover:scale-110 cursor-pointer uppercase tracking-widest"
                style={{
                    background: "linear-gradient(135deg, #4ade80, #22c55e, #16a34a)",
                    boxShadow: "0 0 40px #22c55e, 0 0 80px #16a34a50"
                }}
            >
                🛸 Abrir Portal
            </Link>
        </div>
    )
}

export default Home