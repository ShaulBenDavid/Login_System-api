import { Fragment, useState } from 'react';
import InputForm from '../InputForm/InputForm';
import Button from '../Button/Button';
import { CreateInput } from './CreatePost.style';
import { addUserPost } from '../../Services/Api';

const CreatePost = ({ accessToken, addPost, logoutFromUser }) => {
    const [post, setPost] = useState('');


    const createPost = async (name) => {
        const data = await addUserPost(name, accessToken);

        if (data.response.status === 401) {
            logoutFromUser();
        }

        // const data = await response.json();
        addPost(data.data);
        setPost('');
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (post.length > 0) {
            createPost(post);           
        }
    }

    const handleChange = (event) => {
        setPost(event.target.value);
    }

    return (
        <Fragment>
            <CreateInput onSubmit={handleSubmit}>
                <InputForm type="text" name="post" onChange={handleChange} value={post} label="Write Something" />
                <Button type='submit'>Post</Button>
            </CreateInput>
        </Fragment>
  )
}

export default CreatePost; 