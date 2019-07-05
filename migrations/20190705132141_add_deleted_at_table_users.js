//new version
exports.up = function(knex, Promise) {
  return knex.schema.alterTable('users', table => {
      table.timestamp('deletedAt')
  })
};
//old version
exports.down = function(knex, Promise) {
  return knex.schema.alterTable('users', table => {
      table.dropColumn('deletedAt')
  })
};
