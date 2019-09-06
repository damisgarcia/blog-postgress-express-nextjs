const Post = props => (
    <div>
        <p>Hello Post { props.id }</p>
    </div>
);

Post.getInitialProps = async function(context){
    const { id } = context.query;
    return { id };
}

export default Post;