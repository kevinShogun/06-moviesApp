import {HttpAdapter} from '../../../config/adapters/http/http.adapter';
import {MovieResponseUpcomming} from '../../../infrastructure/interfaces/movie-db.response';
import {MovieMapper} from '../../../infrastructure/mappers/movie.mapper';
import type {Movie} from '../../entities/movie.entity';

export const moviesUpcomingUseCase = async (
  fecther: HttpAdapter,
): Promise<Movie[]> => {
  try {
    const upcoming = await fecther.get<MovieResponseUpcomming>('/upcoming');

    return upcoming.results.map(MovieMapper.fromMovieDBResultToEntity);
    // return [];
  } catch (error) {
    throw new Error('Error fetching movies - Upcoming');
  }
};
