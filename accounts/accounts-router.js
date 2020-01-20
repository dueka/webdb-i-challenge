const express = require("express");
const { getAllAccounts } = require("./accounts-model");
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

router.get("/:id", (req, res) => {});

router.post("/", (req, res) => {});

router.put("/:id", (req, res) => {});

router.delete("/:id", (req, res) => {});

module.exports = router;
