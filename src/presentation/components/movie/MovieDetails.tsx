import {StyleSheet, Text, View} from 'react-native';
import {FullMovie} from '../../../core/entities/movie.entity';
import {Cast} from '../../../core/entities/cast.entity';
import {FlatList} from 'react-native-gesture-handler';
import {CastActor} from '../cast/CastActor';

interface Props {
  movie: FullMovie;
  cast: Cast[];
}

export const MovieDetails = ({movie, cast}: Props) => {
  return (
    <>
      <View style={{marginHorizontal: 20, marginTop: 8}}>
        <View style={{flexDirection: 'row', gap: 5}}>
          <Text style={style.text}>{movie.genres.slice(0, 3).join(' / ')}</Text>
          <Text style={style.text}>- {movie.duration} min</Text>
        </View>
        <View style={style.container}>
          <View style={style.radiusContianer}>
            <Text style={style.radiusContianerText}>{movie.rating}</Text>
            <Text style={style.radiusContianerText}>Rating</Text>
          </View>
          <View style={style.radiusContianer}>
            <Text style={style.radiusContianerText}>
              {' '}
              $ {movie.budget.toLocaleString()}
            </Text>
            <Text style={style.radiusContianerText}>Budget</Text>
          </View>
        </View>

        <FlatList
          data={cast}
          keyExtractor={i => i.id.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => <CastActor actor={item} />}
        />

        <View style={{marginVertical: 10}}>
          <Text style={style.descText}>{movie.description}</Text>
        </View>
      </View>
    </>
  );
};

const style = StyleSheet.create({
  text: {
    fontWeight: '600',
    color: '#5e5e5e',
  },
  container: {
    flexDirection: 'row',
    marginVertical: 15,
    gap: 15,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  radiusContianer: {
    width: '45%',
    borderRadius: 15,
    backgroundColor: '#ddd',
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  radiusContianerText: {
    color: '#000',
    fontWeight: '800',
    fontSize: 15,
  },
  descText: {
    color: '#444',
    fontWeight: '600',
    textAlign: 'justify',
    fontSize: 16,
  },
});
