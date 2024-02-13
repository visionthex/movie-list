import express from 'express';
import knex from 'knex';
import knexfile from './knexfile.js';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3000;
const db = knex(knexfile[process.env.NODE_ENV || 'development']);

app.use(cors());

app.get("/", (req, res) => {
    res.send("Welcome to the Movie-List Server!");
});

app.get("/movies", (req, res) => {
    console.log('Received request for /movies');
    db.select().from('movies').then(data => {
        console.log('Sending data:', data);
        res.json(data);
    }).catch(err => {
        console.error('Database query failed:', err);
        res.status(500).json({ error: 'Database query failed' });
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});