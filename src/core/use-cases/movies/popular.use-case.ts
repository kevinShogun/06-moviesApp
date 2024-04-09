import {HttpAdapter} from '../../../config/adapters/http/http.adapter';
import {MovieResponseDB} from '../../../infrastructure/interfaces/movie-db.response';
import {MovieMapper} from '../../../infrastructure/mappers/movie.mapper';
import type {Movie} from '../../entities/movie.entity';

interface Options {
  page?: number;
  limit?: number;
}

export const moviesPopularUseCase = async (
  fecther: HttpAdapter,
  options?: Options,
): Promise<Movie[]> => {
  try {
    const popular = await fecther.get<MovieResponseDB>('/popular', {
      params: {
        page: options?.page ?? 1,
      },
    });

    return popular.results.map(MovieMapper.fromMovieDBResultToEntity);
    // return [];
  } catch (error) {
    throw new Error('Error fetching movies - Popular');
  }
};
