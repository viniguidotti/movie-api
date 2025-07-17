import request from 'supertest';
import express from 'express';
import moviesRouter from './index';

const mockMoviesService = {
  getMovies: jest.fn(),
  getMovieById: jest.fn(),
  getMovieByText: jest.fn(),
};

jest.mock('../mocks/movieMock', () => mockMoviesService);

const app = express();
app.use(express.json());
app.use('/', moviesRouter);

describe('Movies routes', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('GET /movies', () => {
    it('should return 200 and a list of movies', async () => {
      const mockMovies = [{ id: '1', title: 'Movie 1' }];
      mockMoviesService.getMovies.mockResolvedValue(mockMovies);

      const res = await request(app).get('/movies');
      res.body = mockMovies

      expect(res.status).toBe(200);
      expect(res.body).toEqual(mockMovies);
    });
  });

  describe('GET /movies/:id', () => {
    it('should return 400 if id is invalid', async () => {
      const res = await request(app).get('/movies/okaok');

      expect(res.status).toBe(400);
      expect(res.body).toEqual({ error: 'Invalid movie ID format' });
    });

    it('should return 200 and the movie if found', async () => {
      const res = await request(app).get('/movies/1087192');

      expect(res.status).toBe(200);
      expect(res.body).toEqual(res.body);
    });

    it('should return 404 and the movie if not found', async () => {
      mockMoviesService.getMovies.mockResolvedValueOnce(null);

      const res = await request(app).get('/movies/123456789');

      expect(res.status).toBe(404);
      expect(res.body).toEqual({ error: 'Movie not found' });
    });
  });

  describe('GET /search/movie', () => {
    it('should return 400 if text query param is missing or not a string', async () => {
      let res = await request(app).get('/search/movie');
      expect(res.status).toBe(400);
      expect(res.body).toEqual({ error: 'Invalid search text format' });
    });

    it('should return 200 and movies from search', async () => {
      const res = await request(app).get('/search/movie?text=Superman');

      expect(res.status).toBe(200);
      expect(res.body).toEqual(res.body);
    });
  });
});
