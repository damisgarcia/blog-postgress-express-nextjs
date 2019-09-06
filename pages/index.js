import Link from 'next/link'

const Index = props => (
    <div>
        <ul>
            {props.shows.map(show => (
                <li key={show.id}>
                    <Link href="/p/[id]" as={`/p/${show.id}`}>
                        <a>{show.name}</a>
                    </Link>
                </li>
            ))}
        </ul>
        <p>Hello Next with Express</p>
    </div>
);

Index.getInitialProps = async function (context) {
    const { shows } = context.query;
    return { shows };
}

export default Index;