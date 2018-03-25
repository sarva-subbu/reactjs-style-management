import React, {Component} from 'react';

class ColorItem extends Component {
	render() {
		return (
			<div>
				<li>
					{this.props.colorItem.name}
				</li>
			</div>
			);
	}
}

export default ColorItem;