import Post from "../Post/Post";

const PostsList = ({ MyItems }) => {

    console.log(MyItems);

    return (
        <div>
        {MyItems.map((item) => {
            return (
                <Post key={item.id} item={item}/>
            )
        })}
        </div>
    );
}

export default PostsList;