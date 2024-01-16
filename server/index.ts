// Import dependencies
import express, { Express, Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';

// import routes
import userRoutes from './src/routes/user.route';
import searchRoutes from './src/routes/search.route';

// ENV variables
dotenv.config();
const PORT = process.env.PORT;

// Initialise express
const app: Express = express();

// Enhance API security
app.use(helmet());

// Allow requests from multiple origins
app.use(cors({
  origin: ["http://localhost:3000"],
  credentials: true
}));

// Parse incoming requests
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Set response headers
app.use(function(req: Request, res: Response, next: NextFunction) {
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, Content-Type, Accept"
  );
  next();
});

// Log HTTP requests
app.use(morgan('combined'));

// Routes
app.use('/user', userRoutes);
app.use('/search', searchRoutes);

// Set port, listen for requests
app.listen(PORT, () => {
  console.log(`[server]: Server is running at http://localhost:${PORT}`);
});