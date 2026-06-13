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

db.serialize(() => {
  db.run('CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY, username TEXT, password TEXT, role TEXT)', () => {
    db.get("SELECT COUNT(*) as count FROM users", (err, row) => {
      if (row && row.count === 0) {
        db.run("INSERT INTO users (username, password, role) VALUES ('admin', 'admin', 'admin')");
        db.run("INSERT INTO users (username, password, role) VALUES ('user', 'user', 'user')");
      }
    });
  });

  db.run('CREATE TABLE IF NOT EXISTS categories (id INTEGER PRIMARY KEY, name TEXT)', () => {
    db.get("SELECT COUNT(*) as count FROM categories", (err, row) => {
      if (row && row.count === 0) {
        db.run("INSERT INTO categories (name) VALUES ('Ordinateurs & Laptops')");
        db.run("INSERT INTO categories (name) VALUES ('Smartphones')");
        db.run("INSERT INTO categories (name) VALUES ('Audio & Casques')");
        db.run("INSERT INTO categories (name) VALUES ('Accessoires')");
      }
    });
  });

  db.run('CREATE TABLE IF NOT EXISTS products (id INTEGER PRIMARY KEY, name TEXT, category_id INTEGER, price REAL, stock INTEGER)', () => {
    db.get("SELECT COUNT(*) as count FROM products", (err, row) => {
      if (row && row.count === 0) {
        db.run("INSERT INTO products (name, category_id, price, stock) VALUES ('MacBook Pro M3', 1, 1999.99, 10)");
        db.run("INSERT INTO products (name, category_id, price, stock) VALUES ('iPhone 15 Pro', 2, 1199.00, 25)");
        db.run("INSERT INTO products (name, category_id, price, stock) VALUES ('Sony WH-1000XM5', 3, 349.50, 40)");
        db.run("INSERT INTO products (name, category_id, price, stock) VALUES ('Écran Dell UltraSharp 27"', 4, 650.00, 15)");
      }
    });
  });
});
