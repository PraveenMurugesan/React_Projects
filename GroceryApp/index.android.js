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
  Alert,
  TextInput
} from 'react-native';
import * as firebase from 'firebase';
import prompt from 'react-native-prompt-android';

const StatusBar = require('./components/StatusBar');
const ActionButton = require('./components/ActionButton');
const ListItem = require('./components/ListItem');
const CTextInput = require('./components/CTextInput');

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
    }),
    searchText: ''
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
  this.setItem({ title:'Coconuts-Box', rate:240, image:'/media/praveen/C/Nature_Bowl/ReactNativeApps/GroceryApp/images/tender_coconut.jpg' },collectionName);
  this.setItem({ title:'Kalkandu', rate:20, image:'/media/praveen/C/Nature_Bowl/ReactNativeApps/GroceryApp/images/tender_coconut.jpg' },collectionName);
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


items = [];
listenForItems(itemsRef) {
  itemsRef.on('value', (snap) => {

    // get children as an array
    
    snap.forEach((child) => {
      //var val = child.val();
        this.items.push({
        image: child.val().image,
        title: child.val().title,
        rate: child.val().rate,
        _key: child.key
      });
    });
    //console.log(items.length);
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(this.items)
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

  _filterResults(textBox) {

    const searchString = this.state.searchText;
    var items = this.items;
    if(searchString != "") {
        
        var tempItems = [];
        for (var i = 0; i < items.length; i++) {
          const item = items[i];
          var title  = item.title;
          if (title.toLowerCase().indexOf(searchString) > -1)
          { 
              tempItems.push(item);
          }
          this.setState({ dataSource: this.state.dataSource.cloneWithRows(tempItems) });
        }
    }
    else {
         this.setState({ dataSource: this.state.dataSource.cloneWithRows(items) });
         //this.setState({ dataSource: null });
    }
    
    
    
  }

  render() {
    
    return (
      <View style={styles.container}>

        <StatusBar title="Grocery List"/>

        <TextInput
        onSubmitEditing={this._filterResults.bind(this)}
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(text) => this.setState({searchText: text})}
        value={this.state.searchText}
      />

        <ListView dataSource={this.state.dataSource} renderRow={this._renderItem.bind(this)} style={styles.listview}/>

        <ActionButton title="Add" onPress={ this._addItem.bind(this) } renderRow={this._renderItem.bind(this)}/>

      </View>
    );
  }
}


AppRegistry.registerComponent('GroceryApp', () => GroceryApp);
