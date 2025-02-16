import express from 'express'
import { artistArray } from '../../front-end/src/assets/database/artists.js'
import { songsArray } from '../../front-end/src/assets/database/songs.js'


const app = express();
const PORT = 3002;

app.get("/artists", (req, res) => {
    res.send(artistArray)
})

app.get("/songs", (req, res) => {
    res.send(songsArray)
})

app.listen(PORT,() => {
    console.log(`servidor rodando na porta ${PORT}`);
});