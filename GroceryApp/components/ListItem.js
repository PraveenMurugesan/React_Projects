import React, {Component} from 'react';
import ReactNative from 'react-native';
const styles = require('../styles.js')
const { View, TouchableHighlight, Text, Image } = ReactNative;

class ListItem extends Component {
  render() {
    return (
      <TouchableHighlight onPress={this.props.onPress}>
        <View style={styles.li}>
          <Image source={ this.props.item.image } />
           <Text style={styles.liText}>{this.props.item.image}</Text>
           <Text style={styles.liText}>{this.props.item.title}</Text>
           <Text style={styles.liText}>{this.props.item.rate}</Text>
        </View>
      </TouchableHighlight>
    );
  }
}

module.exports = ListItem;

