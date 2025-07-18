import express from 'express';

const app=express();
const port=3000;    

app.get('/', (req, res) => {
    res.send('<h1>Hello World!<h1><p>Welcome to my Express server.</p>');
});

app.post('/register', (req, res) => {
    res.sendStatus(201);
});

app.put('/user/aniket', (req, res) => {
    res.sendStatus(200);
});

app.patch('/user/aniket', (req, res) => {
    res.sendStatus(200);
});

app.delete('/user/aniket', (req, res) => {
    res.sendStatus(200);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});