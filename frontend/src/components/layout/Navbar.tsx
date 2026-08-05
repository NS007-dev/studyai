function Navbar() {
    return (
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-7 py-6">

            <a
                href="/"
                className="font-[var(--font-display)] text-2xl font-bold text-[var(--color-text)]"
            >
                Study
                <span className="text-[var(--color-primary)]">AI</span>
            </a>

            <button
                className="
          font-[var(--font-handwriting)]
          text-xl
          text-[var(--color-text-muted)]
          transition-transform
          duration-200
          hover:rotate-[-2deg]
          hover:text-[var(--color-text)]
        "
            >
                Get started →
            </button>

        </nav>
    );
}

export default Navbar;