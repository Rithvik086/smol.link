import express, { Request, Response } from 'express'
import dotenv from 'dotenv'
import { fileURLToPath } from 'url';
import path from 'path';
const __filename = fileURLToPath(import.meta.url)


const app = express();
dotenv.config()

const port = process.env.PORT || 3001
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"))

app.get('/', (req: Request, res: Response) => {
    res.send('hello')
})

app.listen(port, () => {
    console.log(`server running on port ${port}`)
})


