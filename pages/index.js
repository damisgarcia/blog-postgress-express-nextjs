import Link from 'next/link'
import fetch from 'isomorphic-unfetch'

const Index = props => (
    <div>
        <ul>
            {props.posts.map(post => (
                <li key={post.id}>
                    <Link href="/p/[id]" as={`/p/${post.id}`}>
                        <a>{post.name}</a>
                    </Link>
                </li>
            ))}
        </ul>
        <p>Hello Next with Express</p>
    </div>
);

Index.getInitialProps = async function () {
    const res = await fetch('http://localhost:3000/api/posts');
    const posts = await res.json();
    return { posts };
}

export default Index;