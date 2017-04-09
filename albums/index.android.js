

//Import a library to help create a component

import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header';
import ListView from './src/components/ListView';

//Create component
const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <Header headerText={'Albums'} />
      <ListView />
    </View>
    );
};


//Render
AppRegistry.registerComponent('albums', () => App);
