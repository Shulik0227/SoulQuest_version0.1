const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => res.send('Привіт з Node.js backend'));

app.listen(PORT, () => {
    console.log('Сервер працює на порту ${PORT}')
});
