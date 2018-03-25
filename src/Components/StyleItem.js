import React, {Component} from 'react';
import ColorItem from './ColorItem';

class StyleItem extends Component {
	render() {
		let colorItems;
		colorItems = this.props.styleItem.colors.map(c => {
			console.log(c);
			return (<ColorItem colorItem={c}/>);
		});
		return (
			<div>
			<li>
				{this.props.styleItem.name} - {this.props.styleItem.description}
				{colorItems}
			</li>
			</div>	
			);
	}
} 

export default StyleItem;