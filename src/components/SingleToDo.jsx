import Button from './Button'
function SingleTodo({singleTodo, clearSingleToDo}) {
    return(
        <div className="singleContainer">
            <h1>{singleTodo.title}</h1>
            <p>{singleTodo.body}</p>
            <Button clearSingleToDo={clearSingleToDo}/>
        </div>
    )
}

export default SingleTodo