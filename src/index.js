import { useFonts } from 'expo-font';
import { SafeAreaView, StyleSheet, View, ActivityIndicator } from 'react-native';
import { Provider } from 'react-redux';

import RootNavigator from './navigations';
import { store } from './store';
import { FONTS, COLORS } from './themes';

// const categoryDefault = {
//   categoryId: null,
//   color: COLORS.primary,
// };
export default function App() {
  const [loaded] = useFonts({
    [FONTS.regular]: require('../assets/fonts/ChakraPetch-Regular.ttf'),
    [FONTS.bold]: require('../assets/fonts/ChakraPetch-Bold.ttf'),
    [FONTS.medium]: require('../assets/fonts/ChakraPetch-Medium.ttf'),
    [FONTS.light]: require('../assets/fonts/ChakraPetch-Light.ttf'),
  });

  // const [isCategorySelected, setIsCategorySelected] = useState(false);
  // const [selectedCategory, setSelectedCategory] = useState(categoryDefault);

  // const headerTitle = isCategorySelected ? 'Products' : 'Categories';

  // const onHandleSelectCategory = ({ categoryId, color }) => {
  //   setSelectedCategory({ categoryId, color });
  //   setIsCategorySelected(!isCategorySelected);
  // };
  // const onHandleNavigate = () => {
  //   setIsCategorySelected(!isCategorySelected);
  //   setSelectedCategory(categoryDefault);
  // };

  if (!loaded) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator color={COLORS.primary} size="large" />
      </View>
    );
  }

  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <RootNavigator />
      </SafeAreaView>
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