import { useContext } from "react";
import { AppContext } from "../App";
import PostItem from "./PostItem"

export default function Postfeed () {

    const { posts } = useContext(AppContext);

    return (
        
        <div className="post-list">
            {posts.slice().reverse().map(post => (
               <PostItem key={post.id} post={post} /> 
            ))}
        </div>
            
        
    )
}