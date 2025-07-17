import moviesService from '.';
import {
  getMoviesMock,
  getMovieByIdMock,
  getMovieByTextMock,
  mockMovie,
  getMovieCreditsByIdMock,
  mockMovieCredits
} from '../mocks/movieMock';

jest.mock('../services', () => ({
  getMovies: () => getMoviesMock(),
  getMovieById: (id: string) => getMovieByIdMock(id),
  getMovieByText: (text: string) => getMovieByTextMock(text),
  getMovieCreditsById: (id: string) => getMovieCreditsByIdMock(id),
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

  it('should return movie credits by id', async () => {
    const credits = await moviesService.getMovieCreditsById('1087192');
    expect(credits).toEqual(mockMovieCredits);
  });

  it('should return movie by search text', async () => {
    const movie = await moviesService.getMovieByText('dragon');
    expect(movie).toEqual(mockMovie);
  });
});
