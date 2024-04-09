import React from 'react';
import {Image, Pressable, StyleSheet, View} from 'react-native';
import {Movie} from '../../../core/entities/movie.entity';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParams} from '../../navigations/Navigation';

interface Props {
  movie: Movie;
  width?: number;
  height?: number;
  marginHorizontal?: number;
}

export const MoviePoster = ({
  movie,
  height = 420,
  width = 300,
  marginHorizontal = 10,
}: Props) => {
  const navigation = useNavigation<NavigationProp<RootStackParams>>();

  return (
    <Pressable
      onPress={() => navigation.navigate('Details', {moviedId: movie.id})}
      style={({pressed}) => ({
        width,
        height,
        opacity: pressed ? 0.9 : 1,
        marginHorizontal,
        paddingBottom: 20,
        paddingHorizontal: 7,
      })}>
      <View style={{...style.imageContainer}}>
        <Image source={{uri: movie.poster}} style={style.image} />
      </View>
    </Pressable>
  );
};

const style = StyleSheet.create({
  image: {
    flex: 1,
    borderRadius: 18,
  },
  imageContainer: {
    flex: 1,
    borderRadius: 18,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 24,
    shadowRadius: 7,
    elevation: 9,
  },
});
