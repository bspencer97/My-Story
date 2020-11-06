import React from 'react';
import { StyleSheet, Platform, View } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import NavigationService from './NavigationService';

import LoginScreen from'./src/screens/LoginScreen';
import StoriesScreen from'./src/screens/StoriesScreen';
import StoryCreateScreen from './src/screens/StoryCreateScreen';
import CharactersScreen from'./src/screens/CharactersScreen';
import CharacterCreateScreen from './src/screens/CharacterCreateScreen';
import NotesScreen from'./src/screens/NotesScreen';
import WorldsScreen from'./src/screens/WorldsScreen';
import { PRIMARY_COLOR, SECONDARY_COLOR, SECONDARY_COLOR_LIGHT } from './src/constants/styles';

export default class App extends React.Component {
  render() {
    const CreateNavigator = createBottomTabNavigator({
      storyCreate: { screen: StoryCreateScreen },
      characterCreate: { screen: CharacterCreateScreen }
    },{
      navigationOptions: {
        tabBarVisible: false
      }
    });

    const MainNavigator = createBottomTabNavigator({ 
      stories: { screen: StoriesScreen },
      characters: { screen: CharactersScreen },
      notes: { screen: NotesScreen},
      worlds: { screen: WorldsScreen}
    }, { 
      tabBarOptions: {
        activeBackgroundColor: PRIMARY_COLOR,
        inactiveBackgroundColor: SECONDARY_COLOR,
        activeTintColor: SECONDARY_COLOR_LIGHT,
        inactiveTintColor: SECONDARY_COLOR_LIGHT,
        labelStyle: { fontSize: 12 }
      }
    });

    const AppNavigator = createBottomTabNavigator({
      login: { screen: LoginScreen },
      main: { screen: MainNavigator },
      create: { screen: CreateNavigator }
    }, {
      navigationOptions: {
        tabBarVisible: false
      }
    });

    return (
      <View style={styles.container}>
        <AppNavigator 
          ref={navigatorRef => {
            NavigationService.setTopLevelNavigator(navigatorRef);
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: SECONDARY_COLOR_LIGHT,
    justifyContent: 'center',
    marginTop: Platform.OS === 'android' ? Expo.Constants.statusBarHeight : undefined
  },
});
