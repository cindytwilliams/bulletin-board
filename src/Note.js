// import Component from React
import React, { Component } from 'react'

// import icons for buttons (npm install --save react-icons)
import FaPencil from 'react-icons/lib/fa/pencil'
import FaTrash from 'react-icons/lib/fa/trash'
import FaFloppyO from 'react-icons/lib/fa/floppy-o'

class Note extends Component {
	
	constructor(props) {
		super(props)
		this.state = {
			editing: false
		}
		
		// bind our methods
		this.edit = this.edit.bind(this)
		this.remove = this.remove.bind(this)
		this.render = this.render.bind(this)
		this.save = this.save.bind(this)
		this.renderForm = this.renderForm.bind(this)
		this.renderDisplay = this.renderDisplay.bind(this)
	}
	
	// set state when editing a note
	edit() {
		this.setState({
			editing: true
		})
	}
	
	// remove a note
	remove() {
		this.props.onRemove(this.props.index)
	}

	// save a note
	save(e) {
		e.preventDefault()
		this.props.onChange(this._newText.value, this.props.index)
		this.setState ({
			editing: false
		})
	}

	// edit a note: display form field and save button
	renderForm() {
		return (
			<div className="note">
				<form onSubmit={this.save}>
					<textarea ref={input => this._newText = input} />
					<button id="save"><FaFloppyO /></button>
				</form>
			</div>
		)
	}

	// display a note
	renderDisplay() {
		return (
				<div className="note">
					<p>{this.props.children}</p>
					<span>
						<button onClick={this.edit} id="edit"><FaPencil /></button>
						<button onClick={this.remove} id="remove"><FaTrash /></button>
					</span>
				</div>
		)
	}

	render() {
		return this.state.editing ? this.renderForm() : this.renderDisplay()
	}
}

export default Note