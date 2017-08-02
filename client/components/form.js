import React from 'react'

export class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = { newNote: [] }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault()
    console.log('Submitting form')

    const noteData = new FormData(event.target)

    const date = new Date(noteData.get('date'))
    const dateInMilsec = date.getTime()

    const newNote = {
      note: noteData.get('text-area'),
      date: dateInMilsec
    }

    fetch('./notes', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newNote)
    })
      .catch(err => console.log(err))

    event.target.reset()
  }

  render() {
    return (
      <form className="ui form" onSubmit={ this.handleSubmit }>
        <div className="field" id="date">
          <label>
            <input type="date" name="date"/>
          </label>
        </div>
        <div className="field" id="text">
          <label>Notes</label>
          <textarea rows="24" name="text-area"></textarea>
        </div>
        <div>
          <button className="ui button" type="submit">Add Note</button>
        </div>
      </form>
    )
  }
}
