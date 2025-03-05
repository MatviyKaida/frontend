const express = require('express');
const fs = require('fs');
const cors = require('cors');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());
app.use(express.static('public'));

const DATA_FILE = 'clients.json';

app.get('/clients', (req, res) => {
    fs.readFile(DATA_FILE, (err, data) => {
        if (err) return res.status(500).json({ error: 'Помилка читання файлу' });
        res.json(JSON.parse(data));
    });
});

app.post('/clients', (req, res) => {
    fs.readFile(DATA_FILE, (err, data) => {
        const clients = err ? [] : JSON.parse(data);
        const newClient = {
            id: Date.now(),
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            phoneNumber: req.body.phoneNumber,
            dob: req.body.dob,
            gender: req.body.gender,
            country: req.body.country,
            agreement: req.body.agreement,
            photo: req.body.photo
        };
        clients.push(newClient);
        fs.writeFile(DATA_FILE, JSON.stringify(clients, null, 2), () => {
            res.status(201).json(newClient);
        });
    });
});

app.put('/clients/:id', (req, res) => {
    fs.readFile(DATA_FILE, (err, data) => {
        let clients = JSON.parse(data);
        clients = clients.map(client => client.id == req.params.id ? { ...client, ...req.body } : client);
        fs.writeFile(DATA_FILE, JSON.stringify(clients, null, 2), () => {
            res.json({ success: true });
        });
    });
});

app.delete('/clients/:id', (req, res) => {
    fs.readFile(DATA_FILE, (err, data) => {
        let clients = JSON.parse(data);
        clients = clients.filter(client => client.id != req.params.id);
        fs.writeFile(DATA_FILE, JSON.stringify(clients, null, 2), () => {
            res.json({ success: true });
        });
    });
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/admin', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'admin.html'));
});


app.listen(PORT, () => console.log(`Сервер працює на порті ${PORT}`));
