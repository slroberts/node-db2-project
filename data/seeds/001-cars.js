
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {vin: '1ZVBP8AM2C5226677ADQD12345', make:'BMW', model:'X7', mileage: 16, transmissionType: '', title: ''},
      ]);
    });
};

// tbl.string('vin').unique().notNullable();
// tbl.text('make').notNullable();
// tbl.text('model').notNullable();
// tbl.integer('mileage').notNullable();
// tbl.text('transmissionType');
// tbl.text('title');