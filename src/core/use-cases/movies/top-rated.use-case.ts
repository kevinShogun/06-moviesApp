import {HttpAdapter} from '../../../config/adapters/http/http.adapter';
import {MovieResponseDB} from '../../../infrastructure/interfaces/movie-db.response';
import {MovieMapper} from '../../../infrastructure/mappers/movie.mapper';
import type {Movie} from '../../entities/movie.entity';

export const moviesTopRatedUseCase = async (
  fecther: HttpAdapter,
): Promise<Movie[]> => {
  try {
    const top_rated = await fecther.get<MovieResponseDB>('/top_rated');

    return top_rated.results.map(MovieMapper.fromMovieDBResultToEntity);
    // return [];
  } catch (error) {
    throw new Error('Error fetching movies - Top rated');
  }
};
