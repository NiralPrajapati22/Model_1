const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const { user_model } = require("./model.js");
const connectDB = require('./config.js');

app.use(express.json());
app.use(cors());

app.use(
    cors({
        origin: "https://automatic-space-spork-97vrjg4v9g44374gq-3000.app.github.dev",
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        credentials: true
    })
);

connectDB();

// Serve static files
app.use(
    "/website",
    express.static(path.join(__dirname, "public", "Website"))
);
// app.use((req, res) => {
//     res.status(404).send("Page not found");
// });

app.use(
    "/Image",
    express.static(path.join(__dirname, "public", "Image_Gallery"))
);

// Home route
app.get("/", (req, res) => {
    res.send("Welcome in home page");
});

app.get("/about", (req, res) => {
    res.send("Welcome in about page");
});

app.get("/services", (req, res) => {
    res.send("Welcome in services page");
});

// Open index.html when /website is visited
app.get("/website", (req, res) => {
    res.sendFile(
        path.join(__dirname, "public", "Website", "index.html")
    );
});

app.post("/register", async (req, res) => {
    try {
        const user = new user_model(req.body);
        const result = await user.save();
        res.send(result);
        console.log("User:", user);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

app.get("/users", async (req, res) => {
    try {
        const users = await user_model.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.listen(5500, () => {
    console.log("Server running on port 5500");
});