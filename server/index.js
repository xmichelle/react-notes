
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const path = require('path')

const knex = require('knex')({
  dialect: 'pg',
  connection: 'postgres://localhost:5432/notes'
})

const publicPath = path.join(__dirname, 'public')
const staticMiddleware = express.static(publicPath)

app.use(staticMiddleware)
app.use(bodyParser.json())

app.get('/notes', (req, res) => {
  knex
    .select('*')
    .from('notes')
    .orderBy('id', 'desc')
    .then((data) => {
      res.json(data)
    })
})

app.post('/notes', (req, res) => {
  const noteData = req.body
  knex
    .insert(noteData)
    .into('notes')
    .returning('*')
    .then((data) => {
      res.status(201).json(data[0])
    })
})

app.delete('/notes/:id', (req, res) => {
  const noteId = Number(req.params.id)
  knex
    .where('id', noteId)
    .del()
    .from('notes')
    .then(() => res.sendStatus(204))
})

app.listen(process.env.PORT, () => {
  console.log('Listening on port 3000')
})
