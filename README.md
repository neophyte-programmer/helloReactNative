# Hello React Native
This is a simple React Native app that helps a user track goals. I am using it to learn React Native. 

## Features
- Add a goal
- Tap a goal to remove it

## About React Native & Expo
### React Native
React Native is a JavaScript-based mobile app framework for building natively rendered apps using React. It was created by Facebook and is used by a large number of companies, such as AirBnB, to build native mobile apps. It is open source and free to use. Read more about React Native at [here](https://www.netguru.com/glossary/react-native).

### Expo
Expo is a set of tools built on top of React Native. These tools depend on one key belief held at Expo: it's possible to build most apps without ever needing to write native code, provided that you have a comprehensive set of APIs exposed to JavaScript. Read more about Expo [here](https://stackoverflow.com/questions/39170622/what-is-the-difference-between-expo-and-react-native).

### How React Native & Expo work together
Expo is a powerful environment for React Native which helps you from creation to distribution of your React Native apps. Without the need to directly use XCode (iOS) or Android Studio, Expo allows you to see your work in progress apps on a phone, emulator, or browser. It's fair to say that Expo makes React Native development much easier, because it takes all the friction away. When you write code in Expo, you still write React Native code, but with the support of the Expo CLI and Expo Client on your phone. Read more [here](https://www.robinwieruch.de/react-native-expo/).
## Important Stuff
- I had to download the LTS version of React Native to get expo to work.
- I installed expo using the command:
``` npm install -g expo-cli ```
- I initialized the project using the command:
``` expo init helloReactNative ```
- I installed Expo Go on my phone and scanned the QR code to preview the app.   

## React Native Basics | Core Concepts

### Using React Native Components & Building Uis
Basic React Native Components:
- `View` - A container that can contain other components.
- `Text` - displays text
- `Image` - displays an image
- `TextInput` - allows user to enter text via keyboard
- `ScrollView` - allows user to scroll through content
- `StyleSheet` - allows you to create your own styles similar to CSS
  

### Styling React Native Apps
Unlike React, react Native does use CSS as the application is not a browser however it is still possible to style your app by using
inline styles or stylesheet objects written in JavaScript.

### Adding Interactivity & Managing States

## References and Resources
- [React Native](https://reactnative.dev/docs/)
- [Expo](https://docs.expo.dev/)
