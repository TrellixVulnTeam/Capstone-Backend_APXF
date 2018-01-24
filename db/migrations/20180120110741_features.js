
exports.up = function(knex, Promise) {
  return knex.schema.createTable('features', function(table){
      table.increments();
      table.integer('challenge_id')
      .notNullable()
      .references('id')
      .inTable('challenges')
      .onDelete('CASCADE')
      .index();
      table.integer('day').notNullable();
      table.string('video');
      table.string('audio');
      table.string('image');
      table.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('features');
};
