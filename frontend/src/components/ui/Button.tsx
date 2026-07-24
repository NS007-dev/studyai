type ButtonProps = {
    children: React.ReactNode;
};

function Button({ children }: ButtonProps) {
    return (
        <button>
            {children}
        </button>
    );
}

export default Button;

// what is children? 
//if you type <Button> Study </Button>
// react will automatically pass Study into the children prop
//so inside the component {children} it becomes Study
//so later <Button> Quiz </Button>
// will become just Quix of the same comp.
// = reusability.