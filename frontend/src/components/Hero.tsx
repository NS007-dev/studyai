function Hero() {
    return (
        <section className="flex min-h-[85vh] flex-col items-center justify-center px-6 text-center">
            <span className="mb-4 rounded-full border border-slate-700 bg-slate-900 px-4 py-2 text-sm text-slate-300">
                🚀 AI-powered learning for students
            </span>

            <h1 className="max-w-4xl text-6xl font-bold tracking-tight text-white">
                Learn Smarter with{" "}
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    StudyAI
                </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
                Your intelligent study companion that explains concepts, generates
                quizzes, summarizes notes, and helps you prepare for exams.
            </p>

            <div className="mt-10 flex gap-4">
                <button className="rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-black transition hover:bg-cyan-400">
                    Start Chatting
                </button>

                <button className="rounded-xl border border-slate-700 px-6 py-3 text-white transition hover:border-slate-500">
                    Learn More
                </button>
            </div>
        </section>
    );
}

export default Hero;