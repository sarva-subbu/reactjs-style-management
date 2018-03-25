import React, {Component} from 'react';
import uuid from 'uuid';

class StyleAdd extends Component {

	constructor() {
		super();
		this.state = {
			newStyle:{}
		}
	}

	handleAddStyle(e) {
		let styleName = this.refs.styleName.value;
		let styleDescription = this.refs.styleDescription.value;
		let colorName = this.refs.colorName.value;
		if (styleName === '' || styleDescription === '' || colorName === '') {
			alert ('all fields are mandatory');
		} else {
			this.setState({
				newStyle: {id: uuid.v4(), name: styleName, description: styleDescription, colors: [{id: uuid.v4(), name: colorName}]}
				}, function() {
				// console.log(this.state);
				this.props.addStyle(this.state.newStyle);
				this.refs.styleName.value = '';
				this.refs.styleDescription.value = '';
				this.refs.colorName.value = '';
			});
		}
		e.preventDefault();
	}

	render() {
		return (
			<div>
			<h3> Add new Style </h3>
			<form>
				Style Name: <input type = "text" ref="styleName"/> <br/><br/>
				Style Description: <input type = "text" ref="styleDescription"/> <br/><br/>
				Color Name: <input type = "text" ref="colorName"/> <br/><br/>
				<input type="submit" onClick={this.handleAddStyle.bind(this)}/>
			</form>
			</div>
			);
	}
}

export default StyleAdd;