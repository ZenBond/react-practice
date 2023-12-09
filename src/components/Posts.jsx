import PostItem from "./PostItem"

function Posts({posts, getSingleToDo}) {
    return posts.map((post) => (
        <div className="postContainer" key={post.id}>
        <PostItem post={post} getSingleToDo={getSingleToDo}/>
        </div>
    ))
}

export default Posts