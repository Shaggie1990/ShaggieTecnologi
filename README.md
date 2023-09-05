# ShaggieTecnologi

This project was bootstrapped with [Expo](https://expo.dev/).

### `npm start`

Runs Metro Bundler in the interactive watch mode.

Open [http://localhost:19002](http://localhost:19002) to view it in the browser.

### `npm run ios`

Runs the app in the iOS simulator.

### `npm run android`

Runs the app in the Android simulator.

----------------------####################----------------------


From this page https://reactnavigation.org/ the dependencies for the navigations are downloaded

npm install @react-navigation/native

npx expo install react-native-screens react-native-safe-area-context

npm install @react-navigation/native-stack

npm install react-native-gesture-handler

npx expo install react-native-gesture-handler

### Props Styles and Constants

npm install -D eslint eslint-config-universe prettier

PRETTIER configuration
("eslintConfig": {
     "extends": "universe/native"
   },)
-----------------goes in a .prettierrc file-----------------------
{
     "printWidth": 100,
     "tabWidth": 2,
     "singleQuote": true,
     "bracketSameLine": true,
     "trailingComma": "es5"
}

### Responsiveness & Flexible Rules
npx expo install expo-font
https://fonts.google.com/
npx expo install expo-screen-orientation

orientation configuration: it goes in the SRC/HOOKS/useOrentation.jsx folder
SEARCH IT IN THE REPO
([feature] - create useOrientation hook using expo screen orientation and change layout depends of current orientation)

### Screens & Base Navigation
npm install @react-navigation/native
npx expo install react-native-screens react-native-safe-area-context
npm install @react-navigation/native-stack
npx expo install react-native-gesture-handler

### Tab Navigation
npm install @react-navigation/bottom-tabs.