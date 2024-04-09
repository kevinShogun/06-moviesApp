import React from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {ScrollView} from 'react-native-gesture-handler';
import {RootStackParams} from '../../navigations/Navigation';
import {MovieHeader} from '../../components/movie/MovieHeader';
import {useMovie} from '../../hooks/useMovie';
import {MovieDetails} from '../../components/movie/MovieDetails';
import {FullScreenLoader} from '../../components/loaders/FullScreenLoader';

interface Props extends StackScreenProps<RootStackParams, 'Details'> {}

export const DetailsScreen = ({route}: Props) => {
  const {moviedId} = route.params;
  const {isLoading, movie, cast} = useMovie(moviedId);

  if (isLoading) {
    return <FullScreenLoader />;
  }

  return (
    <ScrollView>
      {/* Header */}
      {movie && <MovieHeader movie={movie} />}
      {movie && <MovieDetails movie={movie} cast={cast} />}
      {/* Details */}
    </ScrollView>
  );
};
