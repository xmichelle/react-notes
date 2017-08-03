import React from 'react'

export class NotesList extends React.Component {
  constructor(props) {
    super(props)
    this.state = { noteList: [] }
    this.handleClick = this.handleClick.bind(this)
  }

  convertDate(date) {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

    const parsedDate = Number(date)
    const dateFormat = new Date(parsedDate)
    const year = dateFormat.getUTCFullYear()
    const day = dateFormat.getUTCDate()
    const month = months[dateFormat.getUTCMonth()]

    const convertedDate = month + ' ' + day + ',' + ' ' + year

    return convertedDate
  }

  handleClick(event) {
    const noteId = event.target.getAttribute('data-id')
    fetch('./notes/' + noteId, {
      method: 'DELETE'
    })
      .then(() => {
        this.setState({ notes: this.props.notes.filter(note => {
          return note.id !== Number(noteId)
        })
        })
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="sidebar-notes">
        <div className="ui visible sidebar inverted vertical menu">
          {
            this.props.notes.map((note, i) => {
              return (
                <a key={ i } className="item">
                  <button className="mini ui inverted basic compact icon button"
                    id="delete-button"
                    data-id={note.id}
                    onClick={this.handleClick} >
                    <i className="close link icon"></i>
                  </button>
                  { note.note }
                  <p className="note-date">{ this.convertDate(note.date) }</p>
                </a>
              )
            })
          }
        </div>
      </div>
    )
  }
}
