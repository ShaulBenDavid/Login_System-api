import { useState } from "react";
import InputForm from "../InputForm/InputForm";

const Post = ({ item, accessToken, deleteItemFromList, updateItem }) => {
    const { name, id } = item;
    
    const [newText, setNewText] = useState(() => '');
    const [editInputActive, setEditInputActive] = useState(false);

    // Delete api
    const deleteItem = async (id) => {
        const response = await fetch(`https://abra-course-server.herokuapp.com/items/${id}/`, {
            headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + accessToken
            },
            method: "DELETE"
        })

        if (response.status === 204) {
            deleteItemFromList(id);          
        }

    }

    // Rename api
    const RenameItem = async (id, name) => {
        const payload = {
            name
        };

        const response = await fetch(`https://abra-course-server.herokuapp.com/items/${id}/`, {
            headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + accessToken
            },
            method: "PATCH",
            body: JSON.stringify(payload)
        })

        if (response.status === 200) {
            updateItem(id, name);          
        }

    }

    // delete the item
    const handleDelete = (event) => {
        event.preventDefault();
        deleteItem(id);
    };
    
    // 3 Change for the new text
    const handleRename = (event) => {
        event.preventDefault();
        RenameItem(id, newText);
        setEditInputActive(!editInputActive);
    };

    // 2 save the new text
    const handleChange = (event) => {
        setNewText(event.target.value);
    };

    // 1 Open and close edit option
    const handleRenameInput = () => {
        setEditInputActive(!editInputActive)
    };

    return (
        <div>
            <p>{name}</p>
            <button onClick={handleDelete}>DELETE</button>
            <button onClick={handleRenameInput}>EDIT</button>
            { editInputActive &&           
            <form onSubmit={handleRename}>
                <InputForm type="text" name="name" required onChange={handleChange} value={newText} label="Edit" />
                <button type='submit'>Change</button>
            </form>}
        </div>
    );
}

export default Post;