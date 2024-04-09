import {HttpAdapter} from '../../../config/adapters/http/http.adapter';
import {NowPlayinResponse} from '../../../infrastructure/interfaces/movie-db.response';
import {MovieMapper} from '../../../infrastructure/mappers/movie.mapper';
import type {Movie} from '../../entities/movie.entity';

export const moviesNowPlayingUseCase = async (
  fecther: HttpAdapter,
): Promise<Movie[]> => {
  try {
    const nowPlaying = await fecther.get<NowPlayinResponse>('/now_playing');

    return nowPlaying.results.map(MovieMapper.fromMovieDBResultToEntity);
    // return [];
  } catch (error) {
    throw new Error('Error fetching movies - Now Playing');
  }
};
