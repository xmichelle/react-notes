const { describe, it } = require('mocha')
const { expect } = require('chai')
const request = require('request')

describe('server fn suite', () => {

  describe('GET /notes', () => {
    it('returns list of notes', done => {
      request('http://localhost:3000/notes', function (error, response, body) {
        const parsedBody = JSON.parse(body)
        expect(error).to.deep.equal(null)
        expect(response.statusCode).to.deep.equal(200)
        expect(parsedBody).to.be.an('array')
        done()
      })
    })
  })

  describe('POST /notes', () => {
    it('creates and saves a new note', done => {
      request.post('http://localhost:3000/notes', (err, res, body) => {
        const parsedBody = JSON.parse(body)
        expect(err).to.deep.equal(null)
        expect(res.statusCode).to.deep.equal(201)
        expect(parsedBody).to.be.an('object')
        expect(parsedBody).to.have.a.property('id').that.is.a('number')
        done()
      })
    })
  })

  describe('DELETE /notes/:id', () => {
    it('deletes a note by id', done => {
      request('http://localhost:3000/notes', (err, res, body) => {
        if (err) return done(err)
        const parsedBody = JSON.parse(body)
        expect(parsedBody).to.not.equal(undefined)
        expect(parsedBody).to.be.an('array')

        const [ note ] = parsedBody
        expect(note).to.be.an('object').with.property('id').that.is.a('number')

        const { id } = note

        request.delete('http://localhost:3000/notes/' + id, (err, res) => {
          expect(err).to.deep.equal(null)
          expect(res).to.have.property('statusCode', 204)
          done()
        })
      })
    })
  })
})
