import {HttpAdapter} from '../../../config/adapters/http/http.adapter';
import {Credits} from '../../../infrastructure/interfaces/cast-movie.db.response';
import {Cast} from '../../entities/cast.entity';
import {CastMapper} from '../../../infrastructure/mappers/cast.mapper';

export const getMovieCastUseCase = async (
  fetcher: HttpAdapter,
  movieId: number,
): Promise<Cast[]> => {
  try {
    // usar el fetcher
    const {cast} = await fetcher.get<Credits>(`/${movieId}/credits`);

    const actors = cast.map(c => CastMapper.fromMovieDBCastToEntity(c));
    //hacer el mapeo
    return actors;
    // return
  } catch (error) {
    throw new Error('Cannot get a movie cast');
  }
};
