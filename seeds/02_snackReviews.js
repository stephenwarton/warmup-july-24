const snackReviews = require('./seeds-data/snackReviews')
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('TRUNCATE snack_reviews RESTART IDENTITY CASCADE;')
    .then(function () {
      return knex('snack_reviews').insert(snackReviews);
    });
};
