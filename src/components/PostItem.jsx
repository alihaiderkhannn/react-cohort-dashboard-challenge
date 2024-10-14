

export default function PostItem({ post }) {


    console.log(post)

    return (
        <div className="post-content">
            
            <h4>{post.title}</h4>
            <p>{post.content}</p>
        </div>
    )
}