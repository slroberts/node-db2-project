
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