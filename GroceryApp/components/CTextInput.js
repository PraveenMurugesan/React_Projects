import React, { Component } from 'react';
import { AppRegistry, TextInput } from 'react-native';

class CTextInput extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }

  render() {
    return (
      <TextInput
        onSubmitEditing={this.props.onSubmitEditing}
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
       

      />
    );
  }
}

module.exports = CTextInput;

// App registration and rendering
//AppRegistry.registerComponent('AwesomeProject', () => UselessTextInput);
 // onChangeText={(text) => this.setState({text})}
 //        value={this.state.text}