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
const res_file = path.join(__dirname, "public/result.json");;
const loadResults = () => {
    if (!fs.existsSync(res_file)) return [];
    const data = fs.readFileSync(res_file, "utf-8");
    return JSON.parse(data);
};
const saveResults = (results) => {
    fs.writeFileSync(res_file, JSON.stringify(results, null, 2));
};
app.post('/results', (req, res) =>{
    const { email, date, score } = req.body;
    if (!email || !date || typeof score !== "number") {
        return res.status(400).json({ error: "Невірний формат даних" });
    }
    const results = loadResults();
    results.push({ email, date, score });
    saveResults(results);

    res.json({ message: "Результат збережено" });
})
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

app.get('/reg', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'regForm.html'));
});
app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'login.html'));
})

app.listen(PORT, () => console.log(`Сервер працює на порті ${PORT}`));
