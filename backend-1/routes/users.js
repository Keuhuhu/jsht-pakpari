const express = require ("express");
const router = express.Router();

router.get("/", (req, res) => res.send("Daftar User"));
router.post("/", (req, res) => res.send("Tambah User"));

module.exports = router;

