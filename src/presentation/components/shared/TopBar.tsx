import React from 'react';
import {StyleSheet} from 'react-native';
import {Image, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
export const TopBar = () => {
  return (
    <View style={style.topBarContainer}>
      <Image
        source={{
          uri: 'https://res.cloudinary.com/devsing/image/upload/v1712361780/3212_nyo8h5.jpg',
        }}
        style={style.image}
      />
      <View style={style.titleContainer}>
        <Icon name="movie-creation" color={'#e70052'} style={style.iconMovie} />
        <Text style={style.titleTopBar}>
          Kev <Text style={style.titleTopBar2}>Movies App</Text>
        </Text>
      </View>
      <Icon
        name="notifications-active"
        color={'#e70052'}
        style={style.iconBell}
      />
    </View>
  );
};

const style = StyleSheet.create({
  image: {
    width: 50,
    height: 50,
    borderRadius: 100,
  },
  topBarContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 10,
    marginBottom: 20,
    paddingHorizontal: 10,
    paddingVertical: 8,
    backgroundColor: 'rgba(223, 223, 223, 0.3)',
    borderRadius: 10,
  },
  iconBell: {
    fontSize: 30,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5,
  },
  iconMovie: {
    fontSize: 30,
    transform: [{rotate: '-20deg'}],
  },
  titleTopBar: {
    fontSize: 18,
    fontWeight: '900',
    color: '#222',
  },
  titleTopBar2: {
    fontSize: 18,
    fontWeight: '900',
    color: 'crimson',
  },
});
