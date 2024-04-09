import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
import Connection from './database/db.js';
import route from './routes/routes.js';
import bodyParser from 'body-parser';
import cors from 'cors';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use('/', route);

Connection();

app.get("/", (req, res) => {
    app.use(express.static(resolve(__dirname, "frontend", "build")));
    res.sendFile(resolve(__dirname, "frontend", "build", "index.html"));
});

const PORT = 8000;

app.listen(PORT, () => console.log("Server Is Running", PORT));
