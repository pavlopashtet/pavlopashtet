const Button = ({title, nameOfClass, handleClick}) => {
    return (
        <button
            className={nameOfClass}
            onClick={handleClick}
        >
            Click me to {title}
        </button>
    )
}

export default Button