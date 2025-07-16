import express, { Request, Response } from 'express'
import moviesService from '../services';
import { Movies, Result } from 'src/interfaces/movies';

const router = express.Router();

router.get('/movies', async (request: Request, response: Response) => {
    try {
        const movies = await moviesService.getMovies();
        return response.status(200).json(movies) as Movies;
    } catch (error) {
        console.log('error :>> ', error);
        return response.status(500).send({ error: `Internal server error => ${error}` })
    }
})

router.get('/movies/:id', async (request: Request, response: Response) => {
    try {
        const { id } = request.params;

        if (isNaN(Number(id))) {
            return response.status(400).json({ error: 'Invalid movie ID format' });
        }

        const movie = await moviesService.getMovieById(id) as Result;
        return response.status(200).json(movie);
    } catch (error) {
        console.log('error :>> ', error);
        if ((error as any)?.response.status === 404) {
            return response.status(404).json({ error: 'Movie not found' });
        }
    }
})

router.get('/search/movie', async (request: Request, response: Response) => {
    try {
        const { text } = request.query;

        if (typeof text !== 'string') {
            return response.status(400).json({ error: 'Invalid search text format' });
        }

        const movies = await moviesService.getMovieByText(text) as Movies;
        return response.status(200).json(movies);
    } catch (error) {
        console.log('error :>> ', error);
        return response.status(500).send({ error: `Internal server error => ${error}` });
    }
})

export default router;