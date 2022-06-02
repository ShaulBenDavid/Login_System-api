import Post from "../Post/Post";
import { useEffect, useState } from "react";
import CreatePost from '../CreatePost/CreatePost';

const PostsList = ({ accessToken }) => {
    const [myItems, setMyItems] = useState(() => []);

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
        setMyItems([...myItems, event]);
    }

    // Delete item
    const deleteItemFromList = (id) => {
        const removeItem = [...myItems].filter((item) => item.id !== id );
        setMyItems(removeItem);
    };

    // edit item 
    const updateItem = (id, name) => {
        const myUpdateItem =[...myItems].map((item) => {
            if (item.id === id) {
                item.name = name;
                return item;
            }
            return item;
        });
        setMyItems(myUpdateItem);
    };

    return (
        <div>
        <CreatePost accessToken={accessToken} addPost={addPost} />
        {myItems && myItems.map((item) => {
            return (
                <Post key={item.id} item={item} accessToken={accessToken} deleteItemFromList={deleteItemFromList} updateItem={updateItem}/>
            )
        })}
        </div>
    );
}

export default PostsList;