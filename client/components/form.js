import React from 'react'

export class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = { newNote: [] }
  }

  // componentDidMount() {
  //
  // }

  render() {
    return (
      <div className="ui form">
        <div className="field" id="date">
          <label>
            <input type="date" />
          </label>
        </div>
        <div className="field" id="text">
          <label>Notes</label>
          <textarea rows="24"></textarea>
        </div>
        <div>
          <button className="ui button" type="submit">Add Note</button>
        </div>
      </div>
    )
  }
}
