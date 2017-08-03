import React from 'react'
import { NotesList } from './notes'
import { Form } from './form'

export class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { notes: [] }
    this.addNote = this.addNote.bind(this)
    this.deleteNote = this.deleteNote.bind(this)
  }

  componentDidMount() {
    fetch('./notes')
      .then(res => res.json())
      .then(data => {
        this.setState({ notes: data })
      })
  }

  addNote(newNote) {
    fetch('./notes', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newNote)
    })
      .then(res => res.json())
      .then(data => {
        this.setState({ notes: [data].concat(this.state.notes) })
      })
      .catch(err => console.log(err))
  }

  deleteNote(id) {
    fetch('./notes/' + id, {
      method: 'DELETE'
    })
      .then(() => {
        this.setState({ notes: this.state.notes.filter(note => {
          return note.id !== Number(id)
        })
        })
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div>
        <div className="sidebar-notes">
          <NotesList notes={this.state.notes} handleClick={this.deleteNote}/>
        </div>
        <div className="text-form-container" id="form-container">
          <Form addNote={this.addNote}/>
        </div>
      </div>
    )
  }
}
