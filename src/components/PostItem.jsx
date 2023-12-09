function PostItem({post, getSingleToDo}) {
    const handleClick = (e) => {
        getSingleToDo(e.target.id)
    }

    return (
        <div className="postContainer" id={post.id} onClick={handleClick}>
            <h1 onClick={handleClick} id={post.id}>{post.title}</h1>
            <h2 onClick={handleClick} id={post.id}>{post.body}</h2>
        </div>
    )
}

export default PostItem