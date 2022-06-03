import { Fragment, useState } from 'react';
import InputForm from '../InputForm/InputForm';
import Button from '../Button/Button';
import { CreateInput } from './CreatePost.style';

const CreatePost = ({ accessToken, addPost, logoutFromUser }) => {
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

        if (response.status === 401) {
            logoutFromUser();
        }

        const data = await response.json();
        addPost(data);
        setPost('');
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        createPost(post);
    }

    const handleChange = (event) => {
        setPost(event.target.value);
    }

    return (
        <Fragment>
            <CreateInput onSubmit={handleSubmit}>
                <InputForm type="text" name="post" required onChange={handleChange} value={post} label="Write Something" />
                <Button type='submit'>Post</Button>
            </CreateInput>
        </Fragment>
  )
}

export default CreatePost; 