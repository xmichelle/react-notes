
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const path = require('path')

const knex = require('knex') ({
  dialect: 'pg',
  connection: 'postgres://localhost:5432/notes'
})

app.use(bodyParser.json())

app.get('/notes', (req, res) => {
  knex
    .select('*')
    .from('notes')
    .then((data) => {
      res.json(data)
    })
})

app.listen(3000, () => {
  console.log('Listening on port 3000')
})
