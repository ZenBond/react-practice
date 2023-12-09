function Posts({posts}) {
    return posts.map((post) => (
        <div className="postContainer">
        <h1>{post.title}</h1>
        <h2>{post.body}</h2>
        </div>
    ))
}

export default Posts