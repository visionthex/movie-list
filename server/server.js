import express from 'express';
import knex from 'knex';
import knexfile from './knexfile.js';
import cors from 'cors';
import Fuse from 'fuse.js';

// Server Configurationq
const app = express();
const PORT = process.env.PORT || 3001;
const db = knex(knexfile[process.env.NODE_ENV || 'development']);

// Middleware
app.use(cors());
app.use(express.json());

// Server Routes
app.get("/", (req, res) => {
    res.send("Welcome to the Movie-List Server!");
});

// GET Request to fetch all movies
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

// POST Request to add a new movie to the database
app.post('/movies', async (req, res) => {
    const newMovie = req.body;
    try {
        const [id] = await db('movies').insert(newMovie).returning('id');
        res.json({ id, ...newMovie });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
});

// PORT Listener
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});