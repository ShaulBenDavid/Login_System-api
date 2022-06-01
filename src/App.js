import './App.css';
import Login from './Component/Login/Login';
import Register from './Component/register/Register';
import PostsList from './Component/PostsList/PostsList';
import { useState,useEffect } from 'react';
import CreatePost from './Component/CreatePost/CreatePost';

function App() {
  const [accessToken, setAccessToken] = useState(undefined);
  const [MyItems, setMyItems] = useState([]);
  const [ShowName, setShowName] = useState('');

  useEffect(() => {
    setAccessToken(localStorage.getItem("AccessToken"));
  }, [])

  //Deploy access token
  const addAccessToken = (event) => {
    setAccessToken(event[0]);
    localStorage.setItem("AccessToken", event[0])
    setShowName(event[1]);
    localStorage.setItem("UserName", event[1])
  }

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
    <div className="App">
      <Register />
      <Login addAccessToken={addAccessToken}/>
      <CreatePost accessToken={accessToken} addPost={addPost} />
      {ShowName && 
        <p><strong>Hello</strong> {ShowName}</p>
      }
      { MyItems
         && <PostsList MyItems={MyItems} />}
    </div>
  );
}

export default App;
