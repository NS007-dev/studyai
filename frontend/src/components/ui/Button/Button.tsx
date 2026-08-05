import type { ReactNode } from "react";

interface ButtonProps {
    children?: ReactNode;
    onClick?: () => void;
    variant?: "primary" | "secondary";
}

export default function Button({
    children,
    onClick,
    variant = "primary",
}: ButtonProps) {
    const baseClasses =
        "rounded-xl px-7 py-3.5 font-[var(--font-text)] font-bold transition-all duration-200 hover:-translate-y-1 hover:rotate-[-1deg] active:translate-y-0";

    const variants = {
        primary:
            "bg-[var(--color-primary)] text-[#30402d] shadow-[3px_4px_0_rgba(63,58,52,0.12)] hover:shadow-[5px_7px_0_rgba(63,58,52,0.12)]",

        secondary:
            "border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text)] shadow-[3px_4px_0_rgba(63,58,52,0.08)] hover:shadow-[5px_7px_0_rgba(63,58,52,0.08)]",
    };

    return (
        <button
            onClick={onClick}
            className={`${baseClasses} ${variants[variant]}`}
        >
            {children}
        </button>
    );
}