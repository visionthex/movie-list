import express from 'express';
import knex from 'knex';
import knexfile from './knexfile.js';
import cors from 'cors';
import Fuse from 'fuse.js';

const app = express();
const PORT = process.env.PORT || 3000;
const db = knex(knexfile[process.env.NODE_ENV || 'development']);

app.use(cors());

app.get("/", (req, res) => {
    res.send("Welcome to the Movie-List Server!");
});

app.get('/movies', async (req, res) => {
    const query = req.query.q;
    let movies = await db.select('*').from('movies');

    if (query) {
        const options = {
            keys: ['title'],
            includeScore: true
        };
            const fuse = new Fuse(movies, options);
            movies = fuse.search(query).map(match => match.item);
    }

    res.json(movies);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});