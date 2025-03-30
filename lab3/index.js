const express = require('express');
const fs = require('fs');
const cors = require('cors');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());
app.use(express.static('public'));

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
    const { nickname, date, score } = req.body;
    if (!nickname || !date || typeof score !== "number") {
        return res.status(400).json({ error: "Невірний формат даних" });
    }
    const results = loadResults();
    results.push({ nickname, date, score });
    saveResults(results);

    res.json({ message: "Результат збережено" });
})

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => console.log(`Сервер працює на порті ${PORT}`));
