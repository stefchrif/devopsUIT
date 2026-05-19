const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./data/database.db');
function init() {}
module.exports = { db, init };

db.run('CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY, username TEXT, password TEXT, role TEXT)');
