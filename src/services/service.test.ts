import moviesService from '.';
import {
  getMoviesMock,
  getMovieByIdMock,
  getMovieByTextMock,
  mockMovie,
} from '../mocks/movieMock';

jest.mock('../services', () => ({
  getMovies: () => getMoviesMock(),
  getMovieById: (id: string) => getMovieByIdMock(id),
  getMovieByText: (text: string) => getMovieByTextMock(text),
}));

describe('Movie Service', () => {
  it('should return list of movies', async () => {
    const movies = await moviesService.getMovies();
    expect(movies).toEqual([mockMovie]);
  });

  it('should return movie by id', async () => {
    const movie = await moviesService.getMovieById('1087192');
    expect(movie).toEqual(mockMovie);
  });

  it('should return movie by search text', async () => {
    const movie = await moviesService.getMovieByText('dragon');
    expect(movie).toEqual(mockMovie);
  });
});
