import axios from 'axios';
import dotenv from 'dotenv';
import { Credits } from 'src/interfaces/credits';
import { Movies, Result } from 'src/interfaces/movies';
dotenv.config();

const theMovieApiURL = process.env.THE_MOVIE_API;
const theMovieToken = process.env.THE_MOVIE_TOKEN;

if (!theMovieApiURL || !theMovieToken) {
  throw new Error('Missing THE_MOVIE_API or THE_MOVIE_TOKEN environment variables');
}

const movieService = {
  async getMovies() {
    try {
      const response = await axios.get(
        `${theMovieApiURL}movie/popular?language=en-US&page=1`,
        {
          headers: {
            Authorization: `Bearer ${theMovieToken}`,
            Accept: 'application/json',
          },
        }
      );

      return response.data as Movies;
    } catch (error: any) {
      throw error;
    }
  },

  async getMovieById(id: string) {
    try {
      const response = await axios.get(
        `${theMovieApiURL}movie/${id}?language=en-US`,
        {
          headers: {
            Authorization: `Bearer ${theMovieToken}`,
            Accept: 'application/json',
          },
        }
      );

      return response.data as Result;
    } catch (error: any) {
      throw error;
    }
  },

  async getMovieCreditsById(id: string) {
    try {
      const response = await axios.get(
        `${theMovieApiURL}movie/${id}/credits?language=en-US`,
        {
          headers: {
            Authorization: `Bearer ${theMovieToken}`,
            Accept: 'application/json',
          },
        }
      );

      return response.data as Credits;
    } catch (error: any) {
      throw error;
    }
  },

  async getMovieByText(text: string) {
    try {
      const encodedText = encodeURIComponent(text);
      const response = await axios.get(
        `${theMovieApiURL}search/movie?query=${encodedText}&language=en-US`,
        {
          headers: {
            Authorization: `Bearer ${theMovieToken}`,
          },
        }
      );

      return response.data as Movies;
    } catch (error: any) {
      throw new Error(error?.message || 'Unknown error');
    }
  },
};

export default movieService;
