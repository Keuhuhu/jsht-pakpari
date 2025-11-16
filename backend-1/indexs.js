const express = require("express");
const app = express();

app.use(express.json());

//GET - ambil data
app.get("/users", (req, res) => {
    res.json([{id:1, name: "Kenza"}]);
})

//POST
app.post("/users", (req, res) => {
    const user = req.body;
    res.status(201).json({
        message: "User berhasil ditambahkan",
        data: user,
    })
})

//PUT - ubah data
app.put("/users/:id", (req,res) => {
    const {id} = req.params;
    const updated = req.body;
    res.json({
        message: `User dengan id${id} berhasil diperbarui`,
        data: updated,
    })
})

//DELETe - Hapus data
app.delete("/users/:id", (req, res) => {
    const {id} = req.params;
    res.json({
        message: `User dengan id${id} berhasil dihapus`,
    })
})

app.listen (3000, () => console.log("Server berjalan di http://localhost:3000"));