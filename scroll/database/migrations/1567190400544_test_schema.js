'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TestSchema extends Schema {
  up () {
    this.create('tests', (table) => {
      table.increments()
      table.timestamps()
      table.string('name', 255)
    })
  }

  down () {
    this.drop('tests')
  }
}

module.exports = TestSchema
