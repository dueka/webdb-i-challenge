const express = require("express");
const {
  getAllAccounts,
  getAccountById,
  insertAccount,
  insertAccountById,
  deleteAccountById
} = require("./accounts-model");
// database access using knex

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const allAccounts = await getAllAccounts();
    res.json(allAccounts);
  } catch (e) {
    console.log(e);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const getAccountId = await getAccountById(req.params.id);
    res.json(getAccountId);
  } catch (e) {
    console.log(e);
  }
});

router.post("/", async (req, res) => {
  try {
    const { name, budget } = req.body;
    const id = await insertAccount({ name, budget });
    res.json({ message: `Account with id ${id} has been created` });
  } catch (e) {
    console.log(e);
  }
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { name, budget } = req.body;
  try {
    const count = await insertAccountById({ id, name, budget });
    res.json({ message: `${count} Account has been updated` });
  } catch (e) {
    console.log(e);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const count = await deleteAccountById(req.params.id);
    res.json({
      message: `${count} Account has been deleted`
    });
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
