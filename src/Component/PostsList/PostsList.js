import Post from "../Post/Post";
import { useEffect, useState } from "react";
import CreatePost from '../CreatePost/CreatePost';

const PostsList = ({ accessToken }) => {
    const [MyItems, setMyItems] = useState([]);

      // Loading user posts
    useEffect(() => {
        const getItems = async () => {
            const response = await fetch("https://abra-course-server.herokuapp.com/items/", {
                headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + accessToken
                },
                method: "GET"
            })
            
            if (response.status === 200){
                const data = await response.json();
                setMyItems(data);
            }
        }

    getItems();
    }, [accessToken]);
    
      //Loading the new post in a real time
    const addPost = (event) => {
        setMyItems([...MyItems, event]);
    }

    return (
        <div>
        <CreatePost accessToken={accessToken} addPost={addPost} />
        {MyItems && MyItems.map((item) => {
            return (
                <Post key={item.id} item={item}/>
            )
        })}
        </div>
    );
}

export default PostsList;