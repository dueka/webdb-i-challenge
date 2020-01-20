const express = require("express");
const { getAllAccounts, getAccountById } = require("./accounts-model");
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
    res.json(getAccountById);
  } catch (e) {
    console.log(e);
  }
});

router.post("/", async (req, res) => {});

router.put("/:id", (req, res) => {});

router.delete("/:id", (req, res) => {});

module.exports = router;
