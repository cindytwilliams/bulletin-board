import React, {Component} from 'react'
import Note from './Note'
import FaPlus from 'react-icons/lib/fa/plus'

class Board extends Component {

	// initialize the notes
	constructor(props) {
		super(props)
		this.state = {
			notes: [
				{
					id: 0,
					note: "Call James"
				},
				{
					id: 1,
					note: "Email Claire"
				},
				{
					id: 2,
					note: "Order Pizza"
				}
			]
		}

		// bind our methods
		this.add = this.add.bind(this)
		this.eachNote = this.eachNote.bind(this)
		this.update = this.update.bind(this)
		this.remove = this.remove.bind(this)
		this.nextId = this.nextId.bind(this)
	}

	// add a note
	add(text) {
		this.setState(prevState => ({
			notes: [
				...prevState.notes, 
				{
					id: this.nextId(),
					note: text
				}
			]
		}))
	}

	// get the next ID
	nextId() {
		this.uniqueId = this.uniqueId || 0
		return this.uniqueId++		// increment the ID each time we add a new note
	}

	// update a note
	update(newText, i) {
		console.log('updating item at index', i, newText)
		this.setState(prevState => ({
			notes: prevState.notes.map(
				note => (note.id !== i) ? note : {...note, note: newText}
			)
		}))
	}

	// delete a note
	remove(id) {
		console.log('removing item at', id)
		this.setState(prevState => ({
			notes: prevState.notes.filter(note => note.id !== id)
		}))
	}

	// display a note
	eachNote(note, i) {
		return (
			<Note key={i} index={i} 
				onChange={this.update}
				onRemove={this.remove}
			>{note.note}</Note>
		)
	}

	render() {
		return (
			<div className="board">
				{this.state.notes.map(this.eachNote)}
				<button 
					onClick={this.add.bind(null, "New Note")}
					id="add">
					<FaPlus />
				</button>
			</div>
		)
	}
}

export default Board