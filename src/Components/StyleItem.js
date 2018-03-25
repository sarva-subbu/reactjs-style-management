import React, {Component} from 'react';
import ColorItem from './ColorItem';

class StyleItem extends Component {

	handleDeleteStyle(styleId) {
		this.props.deleteStyle(styleId);
	}

	render() {
		let colorItems;
		colorItems = this.props.styleItem.colors.map(c => {
			return (<ColorItem key={c.id} colorItem={c}/>);
		});
		return (
			<div>
			<li>
				{this.props.styleItem.name} - {this.props.styleItem.description} <a href="#" onClick={this.handleDeleteStyle.bind(this, this.props.styleItem.id)}> X </a>
				{colorItems}
			</li>
			</div>	
			);
	}
} 

export default StyleItem;