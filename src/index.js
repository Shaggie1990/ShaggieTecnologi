import { useFonts } from 'expo-font';
import { SafeAreaView, StyleSheet, View, ActivityIndicator } from 'react-native';
import { Provider } from 'react-redux';

import RootNavigator from './navigations';
import { store } from './store';
import { FONTS, COLORS } from './themes';


export default function App() {
  const [loaded] = useFonts({
    [FONTS.regular]: require('../assets/fonts/ChakraPetch-Regular.ttf'),
    [FONTS.bold]: require('../assets/fonts/ChakraPetch-Bold.ttf'),
    [FONTS.medium]: require('../assets/fonts/ChakraPetch-Medium.ttf'),
    [FONTS.light]: require('../assets/fonts/ChakraPetch-Light.ttf'),
  });


  if (!loaded) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator color={COLORS.primary} size="large" />
      </View>
    );
  }

  return (
    <Provider store={store}>
      <View style={styles.container}>
        <RootNavigator />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});