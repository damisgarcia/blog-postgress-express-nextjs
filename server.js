const express = require('express')
const next = require('next')
const fetch = require('isomorphic-unfetch')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
    .then(() => {
        const server = express()

        server.get('/', async (req, res) => {
            const _res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
            const data = await _res.json();
            const payload = { shows: data.map(entry => entry.show) };

            app.render(req, res, '/', payload)
        })

        server.get('/p/:id', async (req, res) => {            
            const _res = await fetch(`https://api.tvmaze.com/shows/${id}`);
            const show = await _res.json();
            const payload = { show }
            
            app.render(req, res, '/post', payload)
        }) 

        server.get('*', (req, res) => {
            return handle(req, res)
        })

        server.listen(3000, (err) => {
            if (err) throw err
            console.log('> Ready on http://localhost:3000')
        })
    })
    .catch((ex) => {
        console.error(ex.stack)
        process.exit(1)
    })