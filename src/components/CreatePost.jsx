import Avatar from "./Avatar";
import '../styles/createpost.css'
import { useContext, useState } from "react";
import { AppContext } from "../App";

export default function CreatePost() {

    const context = useContext(AppContext);

    const { posts, setPosts } = context;

    const user = context.contacts?.find((c) => c.id === 1);
    console.log(user)

    const [postinfo, setPostInfo] = useState('');



    const handleSubmit = async (event) => {
        event.preventDefault();

        if(!user) {
            console.error('User is not defined. Can not create a post');
            return;
        }

        if(!postinfo) {
            console.error('Post content does not contain anything');
            return;
        }

        try {

                const response = await fetch('https://boolean-uk-api-server.fly.dev/alihaiderkhannn/post', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    title: '',
                    content: postinfo,
                    contactId: user.id
                })
                
            });

            if(response.status === 204) {
                console.log('Post created successfully');

                const newPost = {
                    title: '',
                    content: postinfo,
                    contactId: user.id
            }

            setPosts([newPost, ...posts])

            setPostInfo('')
            
            
            }

            

          else {
                console.error('Failed to create post', response.statusText)
            }


        }
        catch(error) {
             console.error('Error while creating a post', error)
        }

        
        
    }


    const handlechange = async (event) => {  //handling changes in form input.
        setPostInfo(event.target.value)
       // console.log(postinfo)

    }




    return (
        <div className="postcreate-container">
            <Avatar />
            <div className="input-container">
                <form onSubmit={handleSubmit}>

                    <input type="text"
                        placeholder="Whats on your mind?"
                        value={postinfo}
                        onChange={handlechange}
                         />
                            <button className="post-botton" type="submit">Post</button>

                </form>

            </div>
        </div>
    )
}