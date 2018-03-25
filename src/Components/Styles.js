import React, {Component} from 'react';
import StyleItem from './StyleItem';

class Styles extends Component {

	render() {
		let styleItems;
		if(this.props.styles) {
			styleItems = this.props.styles.map(s => {
				return (
					<StyleItem styleItem={s}/>
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