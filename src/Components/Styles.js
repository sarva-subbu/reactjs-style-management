import React, {Component} from 'react';
import StyleItem from './StyleItem';

class Styles extends Component {

	handleDeleteStyle(styleId) {
		this.props.deleteStyle(styleId);
	}

	render() {
		let styleItems;
		if(this.props.styles) {
			styleItems = this.props.styles.map(s => {
				return (
					<StyleItem key={s.id} styleItem={s} deleteStyle={this.handleDeleteStyle.bind(this)}/>
					);
			});
		}
		return (
			<div>
			{styleItems}
			</div>
		);
	}
}

export default Styles;