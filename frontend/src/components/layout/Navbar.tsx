function Navbar() {
    return (
        <nav className="flex items-center justify-between px-8 py-6">
            <h1 className="text-2xl font-bold text-white">
                Study<span className="text-cyan-400">AI</span>
            </h1>

            <button className="rounded-lg border border-slate-700 px-5 py-2 text-white hover:border-slate-500">
                Get Started
            </button>
        </nav>
    )
}

export default Navbar;