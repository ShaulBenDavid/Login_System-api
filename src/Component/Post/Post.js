
const Post = ({ item }) => {
    const { name } = item;

    return (
        <div>
            <p>{name}</p>
        </div>
    );
}

export default Post;