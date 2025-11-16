const express = require("express");
const app = express();
const userRoutes = require("./routes/users");
const port = 3000;

//middleware untuk parsing json body
app.use(express.json());

let users = [
    {id: 1, name:"Buahlil"},
    {"id": 2, name:"Ikan Pari"}
];

// Read semua user
app.get("/users", (req, res) => {
    res.json(users);
})

//Read user by id
app.get("/users/:id", (req, res) => {
    const user = users.find((u) => u.id === parseInt(req.params.id));
    if (!user) return res.status(404).json({ message: "User tidak ditemukan"})
        res.json(user);
})

//Create user baru
app.post("/users", (req, res) => {
    const newUser = {id : users.length + 1, name : req.body.name};
    users.push(newUser);
    res.status(201).json(newUser);
})

//Update user
app.put("/users/:id", (req, res) => {
    const user = users.find((u) => u.id === parseInt(req.params.id));
    if (!user) return res.status(404).json ({message: "User tidak ditemukan"})
    user.name = req.body.name;
    res.json(user);
})

//Delet user
app.delete("/users/:id", (req, res) => {
    users = users.filter((u) => u.id !== parseInt(req.params.id));
    res.json({message : "User berhasil dihapus"});
})




app.post("/user", (req, res) => {
    const data = req.body
    console.log(data)

    if(data) {
        res.status(201)
        res.json({
            status: 200,
            message: "data berhasil dibaut",
            data: data,
         })
    }
    else {
        res.status(400)
        res.json({
            status:400,
            message:"data gagal dibuat",
            data: {}
        })
    }
})



app.get("/", (req, res) => {
    res.send("Gracias")
})

//jalankan server
app.listen(port, () => console.log (`Server berjalan di http://localhost:${port}`));