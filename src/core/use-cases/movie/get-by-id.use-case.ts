import {IFullMovieDBResponse} from './../../../infrastructure/interfaces/full-movie.db.response';
import {HttpAdapter} from '../../../config/adapters/http/http.adapter';
import {FullMovie} from '../../entities/movie.entity';
import {MovieMapper} from '../../../infrastructure/mappers/movie.mapper';

export const getMovieByIdUseCase = async (
  fetcher: HttpAdapter,
  movieId: number,
): Promise<FullMovie> => {
  try {
    // usar el fetcher
    const fullMovie = await fetcher.get<IFullMovieDBResponse>(`/${movieId}`);

    //hacer el mapeo
    return MovieMapper.fromFullMovieDBResulToEntity(fullMovie);
    // return
  } catch (error) {
    throw new Error('Cannot get a movie by id');
  }
};
