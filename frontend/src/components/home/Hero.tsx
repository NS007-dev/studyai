import Button from "../ui/Button";
import NotebookInput from "../ui/Input/NotebookInput";

function Hero() {
    return (
        <main className="relative overflow-hidden px-6 py-16">
            {/* Little decorative doodles */}
            <div className="pointer-events-none absolute left-[8%] top-24 rotate-[-12deg] text-3xl opacity-60">
                ✦
            </div>

            <div className="pointer-events-none absolute right-[10%] top-40 rotate-12 text-2xl opacity-50">
                ✎
            </div>

            <div className="pointer-events-none absolute bottom-20 left-[15%] rotate-6 text-2xl opacity-50">
                ☆
            </div>

            <section className="mx-auto flex max-w-4xl flex-col items-center text-center">

                {/* Friendly introduction */}
                <p className="mb-5 font-[var(--font-handwriting)] text-2xl text-[var(--color-primary)]">
                    hey, let's figure this out ✿
                </p>

                {/* Main heading */}
                <h1 className="max-w-3xl font-[var(--font-display)] text-5xl leading-tight text-[var(--color-text)] md:text-7xl">
                    What are you working
                    <span className="relative mx-3 inline-block">
                        on
                        <span className="absolute -bottom-1 left-0 -z-10 h-3 w-full rotate-[-2deg] rounded-full bg-[var(--color-accent)] opacity-70" />
                    </span>
                    today?
                </h1>

                {/* Description */}
                <p className="mt-6 max-w-xl font-[var(--font-text)] text-lg leading-8 text-[var(--color-text-muted)]">
                    Don't worry if it feels complicated. Write it down,
                    and we'll break it into something that actually makes sense.
                </p>

                {/* Notebook */}
                <div className="mt-12 w-full">
                    <NotebookInput />
                </div>

                {/* Actions */}
                <div className="mt-8 flex flex-wrap justify-center gap-4">
                    <Button>
                        Let's learn →
                    </Button>

                    <Button variant="secondary">
                        I'll look around
                    </Button>
                </div>

                {/* Reassurance */}
                <p className="mt-8 font-[var(--font-handwriting)] text-xl text-[var(--color-text-muted)]">
                    no pressure. no judgment. just learning. ♡
                </p>
            </section>
        </main>
    );
}

export default Hero;