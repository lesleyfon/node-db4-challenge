const express = require('express');

const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());

app.get('/', (req, res, next) => {
    res.send(`<h1> Welcome to the ultimate recipe guide </h1>`)
})

app.listen(PORT, ()=> console.log(`App listening to http://localhost:${PORT}`))