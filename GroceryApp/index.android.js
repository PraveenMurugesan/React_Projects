/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView,
  Alert
} from 'react-native';
import * as firebase from 'firebase';
import prompt from 'react-native-prompt-android';

const StatusBar = require('./components/StatusBar');
const ActionButton = require('./components/ActionButton');
const ListItem = require('./components/ListItem');

const styles = require('./styles.js');

 const firebaseConfig = {
    apiKey: "AIzaSyArEM2NzZWRSDw2_4WKSS3D9tfAq0XXQm4",
    authDomain: "reactapp-b0201.firebaseapp.com",
    databaseURL: "https://reactapp-b0201.firebaseio.com",
    storageBucket: "reactapp-b0201.appspot.com",
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);


export default class GroceryApp extends Component {


 constructor(props) {
  super(props);
  this.state = {
    dataSource: new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2,
    })
  };
  this.itemsRef = firebaseApp.database().ref('items');
  this.populateItems('items');
}

  componentDidMount() {
    
    this.listenForItems(this.itemsRef);
  }

setItem(item,collectionName)
{
  var myref = firebaseApp.database().ref(collectionName);
  var myref1 = myref.push();
  return myref1.set(item);
}


populateItems(collectionName) {
  this.setItem({ title:'Coconuts-Box', rate:240, image:'/media/praveen/C/Nature Bowl/ReactNativeApps/GroceryApp/images/tender_coconut.png' },collectionName);
  this.setItem({ title:'Kalkandu', rate:20, image:'/media/praveen/C/Nature Bowl/ReactNativeApps/GroceryApp/images/tender_coconut.png' },collectionName);
}


_addItem() {
    prompt(
      'Add New Item',
      null,
      [
        {
          text: 'Add',
          onPress: (text) => {
            this.itemsRef.push({ title: text })
          }
        },
      ],
      'plain-text'
    );
  }



listenForItems(itemsRef) {
  itemsRef.on('value', (snap) => {

    // get children as an array
    var items = [];
    snap.forEach((child) => {
      //var val = child.val();
      items.push({
        image: child.val().image,
        title: child.val().title,
        rate: child.val().rate,
        _key: child.key
      });
    });
    //console.log(items.length);
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(items)
    });

  });
}

  _renderItem(item) {

    const onPress = () => {
      prompt(
        'Complete',
        null,
        [
          {text: 'Complete', onPress: (text) => this.itemsRef.child(item._key).remove()},
          {text: 'Cancel', onPress: (text) => console.log('Cancel')}
        ],
        null
      );
    };

    return (
     <ListItem item={item} onPress={onPress} />
    );
  }

  render() {
    
    return (
      <View style={styles.container}>

        <StatusBar title="Grocery List"/>

        <ListView dataSource={this.state.dataSource} renderRow={this._renderItem.bind(this)} style={styles.listview}/>

        <ActionButton title="Add" onPress={ this._addItem.bind(this) } renderRow={this._renderItem.bind(this)}/>

      </View>
    );
  }
}


AppRegistry.registerComponent('GroceryApp', () => GroceryApp);
