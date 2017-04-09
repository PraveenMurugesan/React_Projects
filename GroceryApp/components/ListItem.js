import React, {Component} from 'react';
import ReactNative from 'react-native';
//import ReactNativeDatesDemo from './ReactNativeDatesDemo'

//const ReactNativeDatesDemo = require('./ReactNativeDatesDemo');
const styles = require('../styles.js')
const { View, TouchableHighlight, Text, Image } = ReactNative;

class ListItem extends Component {
  render() {
  	var imageUri = this.props.item.image;
    return (
      <TouchableHighlight onPress={this.props.onPress}>
        <View style={styles.li}>
           <Image style = {{width: 40, height: 40}} source={{uri: imageUri}} />
           <Text style={styles.liText}>{this.props.item.title}</Text>
           <Text style={styles.liText}>{this.props.item.rate}</Text>
        </View>
      </TouchableHighlight>
    );
  }
}

module.exports = ListItem;

