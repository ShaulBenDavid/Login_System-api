import { useState } from 'react';
import InputForm from '../InputForm/InputForm';
import Button from '../Button/Button';

const CreatePost = ({ accessToken, addPost }) => {
    const [post, setPost] = useState('');


    const createPost = async (name) => {
        const payload = {
            name
        };

        const response = await fetch("https://abra-course-server.herokuapp.com/items/", {
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + accessToken
            },
            method: "POST",
            body: JSON.stringify(payload)
        })

        const data = await response.json();
        addPost(data);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        createPost(post);
    }

    const handleChange = (event) => {
        setPost(event.target.value);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <InputForm type="text" name="post" required onChange={handleChange} value={post} label="Write Something" />
                <Button type='submit'>Post</Button>
            </form>
        </div>
  )
}

export default CreatePost; 