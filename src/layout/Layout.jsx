import { NavLink, Outlet } from "react-router-dom"

const Layout = () => {
    return (
        <div className="min-h-screen font-sans font-semibold"
            style={{ background: "linear-gradient(135deg, #000000, #0a0a2e, #001a0a)" }}
        >
            <nav className="fixed top-0 w-full z-50"
                style={{
                    background: "linear-gradient(135deg, #0a0a2e, #001a0a)",
                    borderBottom: "1px solid #22c55e30",
                    boxShadow: "0 0 20px #22c55e20"
                }}
            >
                <div className="flex justify-between items-center px-5 py-3">
                    <h1 className="font-black text-xl"
                        style={{
                            background: "linear-gradient(135deg, #ffffff, #4ade80)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            filter: "drop-shadow(0 0 10px #22c55e)"
                        }}
                    >
                        🛸 Rick & Morty App
                    </h1>
                    <div className="flex gap-5">
                        <NavLink to="/"
                            className={({ isActive }) => isActive
                                ? "font-extrabold underline"
                                : "font-bold"
                            }
                            style={({ isActive }) => ({
                                color: isActive ? "#4ade80" : "white",
                                textShadow: isActive ? "0 0 10px #22c55e" : "none"
                            })}
                        >
                            Inicio
                        </NavLink>
                        <NavLink to="/pokedex"
                            className={({ isActive }) => isActive
                                ? "font-extrabold underline"
                                : "font-bold"
                            }
                            style={({ isActive }) => ({
                                color: isActive ? "#4ade80" : "white",
                                textShadow: isActive ? "0 0 10px #22c55e" : "none"
                            })}
                        >
                            Personajes
                        </NavLink>
                    </div>
                </div>
            </nav>

            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default Layout