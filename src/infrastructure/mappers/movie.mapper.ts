import {FullMovie, Movie} from '../../core/entities/movie.entity';
import type {Result} from './../interfaces/movie-db.response';
import type {IFullMovieDBResponse} from '../interfaces/full-movie.db.response';

export class MovieMapper {
  static fromMovieDBResultToEntity(result: Result): Movie {
    return {
      id: result.id,
      title: result.title,
      description: result.overview,
      releaseDate: new Date(result.release_date),
      rating: result.vote_average.toString(),
      poster: `https://image.tmdb.org/t/p/w500${result.poster_path}`,
      backdrop: `https://image.tmdb.org/t/p/w500${result.backdrop_path}`,
    };
  }

  static fromFullMovieDBResulToEntity(result: IFullMovieDBResponse): FullMovie {
    return {
      id: result.id,
      title: result.title,
      backdrop: `https://image.tmdb.org/t/p/w500${result.backdrop_path}`,
      budget: result.budget,
      description: result.overview,
      duration: result.runtime,
      genres: result.genres.map(g => g.name),
      originalTitle: result.original_title,
      poster: `https://image.tmdb.org/t/p/w500${result.poster_path}`,
      productionCompanies: result.production_companies.map(p => p.name),
      rating: result.popularity.toString(),
      releaseDate: new Date(result.release_date),
      status: result.status,
    };
  }
}
