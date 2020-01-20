const db = require("../data/dbConfig");

function getAllAccounts() {
  return db("accounts");
}

function getAccountById(id) {
  return db("accounts")
    .where({ id })
    .first();
}

function insertAccount({ name, budget }) {
  return db("accounts").insert({ name, budget });
}

function insertAccountById({ id, name, budget }) {
  return db("accounts")
    .where({ id })
    .update({ name, budget });
}

function deleteAccountById(id) {
  return db("accounts")
    .where({ id })
    .del();
}

module.exports = {
  getAllAccounts,
  getAccountById,
  insertAccount,
  insertAccountById,
  deleteAccountById
};
