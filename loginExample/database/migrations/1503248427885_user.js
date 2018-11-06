'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserSchema extends Schema {
  up () {
    this.create('users', (table) => {
      table.increments()
      table.string('username', 80).notNullable().unique()
      table.string('email', 254).notNullable().unique()
      table.string('password', 60).notNullable()
      table.timestamps()
      table.string('confirmation_token')
      table.boolean('is_active').defaultTo(0)
    })
  }

  down () {
    this.drop('users')
  }
}

module.exports = UserSchema
