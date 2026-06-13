const sqlite3 = require('sqlite3').verbose();
const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, '..', 'data');
if (!fs.existsSync(dataPath)) {
  fs.mkdirSync(dataPath, { recursive: true });
}

const db = new sqlite3.Database(path.join(dataPath, 'database.db'));
function init() {}
module.exports = { db, init };

db.run('CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY, username TEXT, password TEXT, role TEXT)');

db.run('CREATE TABLE IF NOT EXISTS categories (id INTEGER PRIMARY KEY, name TEXT)');

db.run('CREATE TABLE IF NOT EXISTS products (id INTEGER PRIMARY KEY, name TEXT, category_id INTEGER, price REAL, stock INTEGER)');
