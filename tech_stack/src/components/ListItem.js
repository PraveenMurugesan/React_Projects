import React, { Component } from 'react';
import { Text, 
	     TouchableWithoutFeedback, 
	     View,
	     LayoutAnimation,
	     UIManager
	   } from 'react-native';
import { connect } from 'react-redux'; 
// connect is not just used for data fetch from store but also to call action creators
import { CardSection } from './common';
import * as actions from '../actions';


class ListItem extends Component {
	componentWillMount() {
		UIManager.setLayoutAnimationEnabledExperimental(true);
	}
	componentWillUpdate() {
		LayoutAnimation.spring();
	}

	renderDescription() {
		const { library, expanded } = this.props;
		if (expanded) {
			return (
				<CardSection>
					<Text style={{ flex: 1 }}>
						{library.description}
					</Text>
				</CardSection>
			);
		}
	}
	render() {
		/*
		this.props.library is received from the parent of this item
		this.props.selectLibrary is the action created which is retured beacuase of the connect call at the bottom
		*/
		const { titleStyle } = styles;
		const { id, title } = this.props.library;
		return (
			<TouchableWithoutFeedback onPress={() => this.props.selectLibrary(id)} >
				<View>
					<CardSection>
						<Text style={titleStyle}>{title}</Text>
					</CardSection>
					{this.renderDescription()}
				</View>
			</TouchableWithoutFeedback>
		);
	}
}

const styles = {
	titleStyle: {
		fontSize: 18,
		paddingLeft: 15
	}
};

/*
MapStateToProps is called everytime the application changes
*/
// ownProps is exactly the same as this.props in the component
const mapStateToProps = (state, ownProps) => {
	const expanded = ownProps.library.id === state.selectedLibraryId;
	/*
	This kind of precalculation is very helpful in number of places rather than doing this in the render description component
	*/
	return { expanded: expanded };
};

export default connect(mapStateToProps, actions)(ListItem);
//First parameter of connect is mapStateToProps function, set of action creators
/*
Passing of actions make sure these actions goes to the right places, 
1. It mutates the selectLibrary function to dispatch the action to the store.
2. It passes all the functions as props to the component ListItem

Connect performs the automatic dispacting of actiosn to the reduceers and giving those as props in return to the component specified
So that those actions can be fired from those components

*/
