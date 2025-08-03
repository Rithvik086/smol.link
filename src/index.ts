import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { shotner, redirect } from './controller/linkController';

// Load environment variables
dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// View engine setup
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Routes
app.get('/', (req: Request, res: Response) => {
	res.render('Home');
});

app.post('/api/shorten', shotner);

app.get('/:short', redirect);

// Start server
app.listen(port, () => {
	console.log(`Server running on port ${port}`);
});
