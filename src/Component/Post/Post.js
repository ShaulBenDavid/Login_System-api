
const Post = ({ item }) => {
    const { name } = item;

    return (
        <div>
            <h2>{name}</h2>
        </div>
    );
}

export default Post;