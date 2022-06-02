import styled from 'styled-components';

export const PostPage = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 70%;
        max-width: 900px;
        background-color: white;
        border-radius: 20px;
        height: 80vh;
        box-shadow: 4px 4px 40px 4px rgb(16 26 68 / 50%);
`;

export const PostsContainer = styled.section`
    height: 70%;
    width: 90%;
    margin-top: 15px;
    overflow-y: scroll;
`;