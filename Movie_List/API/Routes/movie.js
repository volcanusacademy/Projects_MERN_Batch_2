import express from 'express'
// import { addmovie } from '../Controllers/movie';
import { addMovie, getAllMovies, getMovieById, updateByID, deleteById } from '../Controllers/movie.js'

const router = express.Router();

router.post("/add", addMovie)

router.get('/get', getAllMovies) 

router.get('/:id', getMovieById)

router.put('/:id', updateByID)

router.delete('/:id', deleteById)


export default router