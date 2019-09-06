import fetch from 'isomorphic-unfetch'

const Post = props => (
    <div>
        <h2>{props.post.name}</h2>
        <p>{props.post.summary}</p>
        <img src={props.post.image.medium} />
    </div>
);

Post.getInitialProps = async function (context) {
    const { id } = context.query;
    const res = await fetch(`http://localhost:3000/api/posts/${id}`);
    const post = await res.json();
    return { post };
}

export default Post;