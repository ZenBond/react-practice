function Button({clearSingleToDo}) {

    const handleClick = () => {
        clearSingleToDo()
    }

    return (
        <button onClick={handleClick}>Home</button>
    )
}

export default Button