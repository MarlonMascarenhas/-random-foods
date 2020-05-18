
exports.up = function(knex) {
    return knex.schema.createTable('comidas', function (table) {
      table.increments();
      table.string('name').notNullable();
      table.text('descricao').notNullable();
      table.string('img').notNullable();
      table.string('ingredientes').notNullable();
      table.text('video');
  })
};

exports.down = function(knex) {
    return knex.schema.dropTable('comidas');
};
