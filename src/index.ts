import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { shotner, redirect } from './controller/linkController';
import { connectRedis } from './utils/redis';

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;
connectRedis();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


app.get('/', (req: Request, res: Response) => {
	res.render('Home');
});

app.post('/api/shorten', shotner);

app.get('/:short', redirect);

// Start server
app.listen(port, () => {
	console.log(`Server running on port ${port}`);
});
