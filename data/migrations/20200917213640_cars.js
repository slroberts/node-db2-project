exports.up = function (knex) {
  return knex.schema.createTable('cars', (tbl) => {
    tbl.increments();
    tbl.varchar('vin', 17).unique().notNullable();
    tbl.text('make').notNullable();
    tbl.text('model').notNullable();
    tbl.integer('mileage').notNullable();
    tbl.text('transmissionType');
    tbl.text('title');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('cars');
};
