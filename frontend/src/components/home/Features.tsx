function Features() {
    const features = [
        "Instand explanations",
        "AI summaries",
        "Quiz generation",
        "Personalised learning"
    ];

    return (
        <section className="mx-auto max-w-5xl px-6 py-24">
            <h2 className="mb-12 text-center text-4xl font-bold text-white">
                Everything you need to study
            </h2>

            <div className="grid gap-6 md:grid-cols-2">
                {features.map((feature) => (
                    <div
                        key={feature}
                        className="rounded-2xl border border-slate-800 bg-slate-900 p-6 text-lg text-slate-200"
                    >
                        {feature}
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Features;