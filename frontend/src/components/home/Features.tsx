const features = [
    {
        emoji: "💡",
        title: "Explain it",
        description: "Turn confusing topics into explanations that actually make sense.",
        color: "bg-[#f8e7a1]",
        rotate: "-rotate-1",
    },
    {
        emoji: "📝",
        title: "Make a quiz",
        description: "Practice what you just learned without having to make the questions yourself.",
        color: "bg-[#c8ddf2]",
        rotate: "rotate-1",
    },
    {
        emoji: "🧠",
        title: "Learn your way",
        description: "Get explanations and study material that match how you learn.",
        color: "bg-[#b9d8b3]",
        rotate: "-rotate-2",
    },
    {
        emoji: "📚",
        title: "Summarise it",
        description: "Turn long notes into something you can actually revise from.",
        color: "bg-[#e8b9b2]",
        rotate: "rotate-2",
    },
];

function Features() {
    return (
        <section className="mx-auto max-w-5xl px-6 py-24">

            <div className="mb-12 text-center">
                <p className="font-[var(--font-handwriting)] text-xl text-[var(--color-primary)]">
                    little things that make studying easier ✿
                </p>

                <h2 className="mt-2 font-[var(--font-display)] text-4xl text-[var(--color-text)]">
                    Everything you need to study
                </h2>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
                {features.map((feature) => (
                    <article
                        key={feature.title}
                        className={`relative ${feature.color} ${feature.rotate} rounded-sm p-8 shadow-[4px_6px_0_rgba(63,58,52,0.08)] transition-all duration-200 hover:-translate-y-2 hover:rotate-0 hover:shadow-[7px_10px_0_rgba(63,58,52,0.10)]`}
                    >
                        {/* Tape */}
                        <div className="absolute -top-3 left-1/2 h-6 w-20 -translate-x-1/2 rotate-[-2deg] bg-[#eee7d8]/80" />

                        <div className="text-3xl">
                            {feature.emoji}
                        </div>

                        <h3 className="mt-5 font-[var(--font-display)] text-2xl text-[var(--color-text)]">
                            {feature.title}
                        </h3>

                        <p className="mt-2 max-w-sm font-[var(--font-text)] leading-7 text-[var(--color-text-muted)]">
                            {feature.description}
                        </p>
                    </article>
                ))}
            </div>
        </section>
    );
}

export default Features;