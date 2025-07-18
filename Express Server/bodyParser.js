
import path from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
import express from "express";
import morgan from "morgan";


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true })); // Middleware to parse JSON bodies
app.use(morgan('tiny')); // Middleware for logging HTTP requests


app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", (req, res) => {
  const name = req.body.name || "Guest";
  res.send(`
    <html>
      <head><title>Submission Received</title></head>
      <body>
        <h1>Hello, ${name}!</h1>
        <p>Your submission was received.</p>
        <a href="/">Go back</a>
      </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
