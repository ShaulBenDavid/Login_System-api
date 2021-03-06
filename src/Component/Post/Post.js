import { useState } from "react";
import { deleteUserItem, renameUserItem } from "../../Services/Api";
import InputForm from "../InputForm/InputForm";
import { StyledPost, PostButton, ButtonWrapper } from './Post.style';

const Post = ({ item, accessToken, deleteItemFromList, updateItem, logoutFromUser }) => {
    const { name, id } = item;
    
    const [newText, setNewText] = useState(() => '');
    const [editInputActive, setEditInputActive] = useState(false);

    // Delete api
    const deleteItem = async (id) => {
        try {
            const response = await deleteUserItem(accessToken, id);

            if (response.status === 204) {
                deleteItemFromList(id);          
            }  else if (response.status === 401) {
                logoutFromUser();
            }          
        } catch (e) {
            console.log(e);
        }


    }

    // Rename api
    const RenameItem = async (id, name) => {
        try {
            const data = await renameUserItem(accessToken, id, name);
            console.log(data)

            if (data.response.status === 200) {
                updateItem(id, name);          
            } else if (data.response.status === 401) {
                logoutFromUser();
            }
        } catch (e) {
            console.log(e);
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
        <StyledPost>
            <p>{name}</p>
            <ButtonWrapper>
                <PostButton varient='delete' onClick={handleDelete}>DELETE</PostButton>
                <PostButton varient='rename' onClick={handleRenameInput}>EDIT</PostButton>
            </ButtonWrapper>
            { editInputActive &&           
            <form onSubmit={handleRename}>
                <InputForm type="text" name="name" required onChange={handleChange} value={newText} label="Edit" />
                <PostButton varient='change' type='submit'>Change</PostButton>
            </form>}
        </StyledPost>
    );
}

export default Post;