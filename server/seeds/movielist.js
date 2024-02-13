/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('movies').del()
  await knex('movies').insert([
  {"id": 1, "title": "The Shawshank Redemption", "director": "Frank Darabont", "year": 1994, "oscar": true, "review": "A powerful tale of hope and friendship", "rating": 9.3},
  {"id": 2, "title": "The Godfather", "director": "Francis Ford Coppola", "year": 1972, "oscar": true, "review": "A timeless classic of crime and family", "rating": 9.2},
  {"id": 3, "title": "The Dark Knight", "director": "Christopher Nolan", "year": 2008, "oscar": false, "review": "A thrilling ride through the world of Batman", "rating": 9.0},
  {"id": 4, "title": "Pulp Fiction", "director": "Quentin Tarantino", "year": 1994, "oscar": false, "review": "A groundbreaking film with memorable characters", "rating": 8.9},
  {"id": 5, "title": "Schindler's List", "director": "Steven Spielberg", "year": 1993, "oscar": true, "review": "A poignant portrayal of heroism during the Holocaust", "rating": 8.9},
  {"id": 6, "title": "The Lord of the Rings: The Return of the King", "director": "Peter Jackson", "year": 2003, "oscar": true, "review": "An epic conclusion to the trilogy", "rating": 8.9},
  {"id": 7, "title": "Fight Club", "director": "David Fincher", "year": 1999, "oscar": false, "review": "A mind-bending exploration of modern life", "rating": 8.8},
  {"id": 8, "title": "Forrest Gump", "director": "Robert Zemeckis", "year": 1994, "oscar": true, "review": "A heartwarming journey through American history", "rating": 8.8},
  {"id": 9, "title": "Inception", "director": "Christopher Nolan", "year": 2010, "oscar": false, "review": "A visually stunning masterpiece of imagination", "rating": 8.8},
  {"id": 10, "title": "The Matrix", "director": "Lana Wachowski, Lilly Wachowski", "year": 1999, "oscar": false, "review": "A groundbreaking sci-fi action thriller", "rating": 8.7},
  {"id": 11, "title": "The Silence of the Lambs", "director": "Jonathan Demme", "year": 1991, "oscar": true, "review": "A chilling psychological thriller", "rating": 8.6},
  {"id": 12, "title": "The Lord of the Rings: The Fellowship of the Ring", "director": "Peter Jackson", "year": 2001, "oscar": false, "review": "The beginning of an epic journey", "rating": 8.8},
  {"id": 13, "title": "The Godfather: Part II", "director": "Francis Ford Coppola", "year": 1974, "oscar": true, "review": "A compelling sequel to a crime saga", "rating": 9.0},
  {"id": 14, "title": "Goodfellas", "director": "Martin Scorsese", "year": 1990, "oscar": false, "review": "A gritty portrayal of the mafia underworld", "rating": 8.7},
  {"id": 15, "title": "The Lord of the Rings: The Two Towers", "director": "Peter Jackson", "year": 2002, "oscar": false, "review": "The middle chapter of an epic trilogy", "rating": 8.7},
  {"id": 16, "title": "Se7en", "director": "David Fincher", "year": 1995, "oscar": false, "review": "A dark and twisted crime thriller", "rating": 8.6},
  {"id": 17, "title": "The Usual Suspects", "director": "Bryan Singer", "year": 1995, "oscar": true, "review": "A masterful game of deception and intrigue", "rating": 8.6},
  {"id": 18, "title": "Saving Private Ryan", "director": "Steven Spielberg", "year": 1998, "oscar": false, "review": "A gripping portrayal of war and sacrifice", "rating": 8.6},
  {"id": 19, "title": "The Green Mile", "director": "Frank Darabont", "year": 1999, "oscar": false, "review": "A touching story of miracles and redemption", "rating": 8.6},
  {"id": 20, "title": "Interstellar", "director": "Christopher Nolan", "year": 2014, "oscar": false, "review": "A breathtaking journey through space and time", "rating": 8.6},
  ]);
};
