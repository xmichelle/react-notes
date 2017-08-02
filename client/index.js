import React from 'react'
import ReactDOM from 'react-dom'
import { NotesList } from './components/notes'
import { Form } from './components/form'

ReactDOM.render(<NotesList/>, document.querySelector('.sidebar-notes'))
ReactDOM.render(<Form/>, document.querySelector('.text-form-container'))
