import "../styles/button.css";

type ButtonProps = {
    text: string;
};

function Button({ text }: ButtonProps) {
    return (
        <button className="custom-button">
            {text}
        </button>
    );
}

export default Button;