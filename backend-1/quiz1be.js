const express = require ("express");
const app = express();
const port = 3000;
const userRoutes = require("./routes/users");
app.use(express.json());

let users = [
  { "id": 1, "name": "Budi" },
  { "id": 2, "name": "Siti" }
]

//read users
app.get("/users", (req,res) => {
    res.json(users);
})

//read users by id
app.get("/users/:id", (req,res) => {
    const user = users.find((u) => u.id === parseInt(req.params.id));
    if (!user) return res.status(404).json ({message : "User tidak ditemukan"})
        res.json(user);
})

//post kenzo
app.post("/users", (req,res) => {
    const newUser = {id : users.length + 1, name : "Kenzo"};
    users.push(newUser);
    return res.status(201).json(newUser);
})

//put kenzo
app.put("/users/:id", (req, res) => {
    const user = users.find((u) => u.id === parseInt(req.params.id));
    if (!user) return res.status(404).json ({message: "User tidak ditemukan"})
    user.name = "Kenzo edited";
    res.json(user);
})

//Delet user
app.delete("/users/:id", (req, res) => {
    users = users.filter((u) => u.id !== parseInt(req.params.id));
    res.json({message : "User berhasil dihapus"});
    if (!user) return res.status(404).json ({message: "User tidak ditemukan"})
})




app.listen(port, () => console.log(`Server sudah berjalan`));