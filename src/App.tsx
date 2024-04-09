import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import Navigation from './presentation/navigations/Navigation';

export const App = () => {
  return (
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  );
};
