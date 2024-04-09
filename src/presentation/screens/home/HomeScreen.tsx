import React from 'react';
import {View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useMovies} from '../../hooks/useMovies';
import {PosterCarousel} from '../../components/movies/PosterCarousel';
import {TopBar} from '../../components/shared/TopBar';
import {HorizontalCarousel} from '../../components/movies/HorizontalCarousel';
import {FullScreenLoader} from '../../components/loaders/FullScreenLoader';

export const HomeScreen = () => {
  const {top} = useSafeAreaInsets();
  const {isLoading, nowPlaying, popular, topRated, upcoming, popularNextPage} =
    useMovies();
  if (isLoading) {
    return <FullScreenLoader />;
  }

  return (
    <ScrollView>
      <View
        style={{
          marginTop: top + 20,
          paddingBottom: 30,
        }}>
        <TopBar />
        {/* Principal */}
        <PosterCarousel movies={nowPlaying} />

        {/* Popular */}
        <HorizontalCarousel
          movies={popular}
          title="Populares"
          loadNextPage={popularNextPage}
        />

        {/* Top Rated */}
        <HorizontalCarousel movies={topRated} title="Mejor calificadas" />

        {/* Upcomming */}
        <HorizontalCarousel movies={upcoming} title="Próximamente" />
      </View>
    </ScrollView>
  );
};
