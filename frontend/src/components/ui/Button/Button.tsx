// import type { ReactNode } from "react";


// type ButtonProps = {
//     children: ReactNode;
// };

// function Button({ children }: ButtonProps) {
//     return (
//         <button
//             className="
//     rounded-2xl 
//     bg-[var(--color-primary)]
//     px-6
//     py-3
//     font-semibold
//     text-white
//     shadow-md
//     transition-all
//     duration-200
//     hover:-translate-y-1
//     hover:rotate-1
//     hover:shadow-lg
//     active:translate-y-0
//   "
//         >
//             {children}
//         </button>
//     );
// }

// export default Button;

// // what is children?
// //if you type <Button> Study </Button>
// // react will automatically pass Study into the children prop
// //so inside the component {children} it becomes Study
// //so later <Button> Quiz </Button>
// // will become just Quix of the same comp.
// // = reusability.


// // rounded - 2xl = softens corners
// // bg - [var(--color - primary)]
// // px - 6 = horiz padding
// // py - 3 = vert padding
// // font - semibold
// // text - white
// // shadow - md = depth and shadow
// // transition - all = animation
// // duration - 200 = animation is 200 milliseconds
// // hover: -translate - y - 1 = sticky note lifting
// // hover: rotate - 1 = tiny tilt
// // hover: shadow - lg = shadow largens
// // active: translate - y - 0

// import type { ReactNode } from "react";

// interface ButtonProps {
//     children?: ReactNode;
// }

// export default function Button({ children }: ButtonProps) {
//     return (
//         <button>
//             {children}
//         </button>
//     );
// }

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
        "rounded-2xl px-6 py-3 font-semibold transition-all duration-200 hover:-translate-y-1 hover:rotate-1 active:translate-y-0";

    const variants = {
        primary:
            "bg-[var(--color-primary)] text-white shadow-md hover:shadow-lg",
        secondary:
            "bg-[var(--color-surface)] text-[var(--color-text)] border border-gray-200 shadow-sm hover:shadow-md",
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