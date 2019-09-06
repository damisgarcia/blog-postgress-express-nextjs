const Posts = (server) => {
    server.get('/api/posts', async (req, res) => {
        const _res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
        const data = await _res.json();
        const posts = data.map(entry => entry.show);

        res.send(posts)
    });

    server.get('/api/posts/:id', async (req, res) => {
        const { id } = req.params;
        const _res = await fetch(`https://api.tvmaze.com/shows/${id}`);
        const post = await _res.json();

        res.send(post)
    });
}

module.exports = Posts;