import React from 'react'

export class NotesList extends React.Component {
  constructor(props) {
    super(props)
    this.state = { noteList: [] }
  }

  componentDidMount() {
    fetch('/notes')
      .then(res => res.json())
      .then(data => {
        this.setState({ noteList: data })
      })
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

  render() {
    return (
      <div className="ui visible sidebar inverted vertical menu">
        {
          this.state.noteList.map((note, i) => {
            return (
              <a key={ i } className="item">
                { note.note }
                <p className="note-date">{ this.convertDate(note.date) }</p>
              </a>
            )
          })
        }
      </div>
    )
  }
}
