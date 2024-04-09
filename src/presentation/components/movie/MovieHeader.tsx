import {
  Image,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import {FullMovie} from '../../../core/entities/movie.entity';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface Props {
  movie: FullMovie;
}

export const MovieHeader = ({movie}: Props) => {
  const {height} = useWindowDimensions();
  const navigation = useNavigation();

  function isDateWithin4Months(date: Date): boolean {
    // Obtener la fecha actual
    const currentDate = new Date();

    // Restar 4 meses a la fecha actual
    const fourMonthsAgo = new Date(currentDate);
    fourMonthsAgo.setMonth(fourMonthsAgo.getMonth() - 4);

    // Comparar si la fecha dada es posterior a hace 4 meses
    return date >= fourMonthsAgo;
  }

  return (
    <>
      <View style={{...styles.imageContainer, height: height * 0.7}}>
        <StatusBar translucent backgroundColor="transparent" />
        <View style={styles.imageBorder}>
          <Image source={{uri: movie.poster}} style={styles.posterImage} />
          <LinearGradient
            colors={['transparent', '#fff']}
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              height: '30%',
            }}>
            <Text />
          </LinearGradient>
        </View>
      </View>

      <View style={{...styles.floatContainer, top: height * 0.67}}>
        <Text style={styles.floatContainerText}>{movie.status}</Text>
      </View>

      {isDateWithin4Months(movie.releaseDate) && (
        <View style={{...styles.floatContainer, top: height * 0.67, left: 130}}>
          <Text style={styles.floatContainerText}>New</Text>
        </View>
      )}

      <View style={styles.marginContainer}>
        <Text style={styles.title}>{movie.originalTitle}</Text>
        <Text style={styles.subTitle}>{movie.title}</Text>
      </View>
      <View style={styles.backButton}>
        <Pressable onPress={() => navigation.goBack()}>
          <Icon name="reply" style={styles.backButtonText} />
        </Pressable>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    width: '100%',
  },

  imageBorder: {
    flex: 1,
    overflow: 'hidden',
    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25,
  },
  posterImage: {
    flex: 1,
  },
  floatContainer: {
    backgroundColor: '#000',
    borderRadius: 45,
    position: 'absolute',
    left: 15,
    paddingVertical: 5,
    paddingHorizontal: 15,
    opacity: 0.6,
  },
  floatContainerText: {
    fontSize: 16,
    marginBottom: 5,
    textTransform: 'capitalize',
    fontWeight: '900',
    color: '#fff',
  },
  marginContainer: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  subTitle: {
    fontSize: 16,
    opacity: 0.8,
  },
  title: {
    fontSize: 22,
    marginBottom: 5,
    textTransform: 'capitalize',
    fontWeight: '900',
    color: '#000',
  },
  backButton: {
    position: 'absolute',
    zIndex: 999,
    elevation: 9,
    top: 45,
    left: 15,
  },
  backButtonText: {
    color: 'white',
    fontSize: 35,
    fontWeight: 'bold',
    textShadowColor: 'rgba(0, 0, 0, 0.55)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
  },
});
