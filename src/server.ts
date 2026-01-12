import express, { Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import { v4 as uuidv4 } from 'uuid';

// 1. Load env vars
dotenv.config();

const app = express();
const PORT: number = parseInt(process.env.PORT as string, 10) || 8080;

// 2. Built-in & Third-party Middleware
app.use(express.json()); // Built-in Body parsing for JSON
app.use(morgan('dev'));  // Logging requests

// 3. Custom Middleware (Example: Request Logger)
const customLogger = (req: Request, res: Response, next: NextFunction) => {
    console.log(`[${new Date().toISOString()}] ${req.method} to ${req.url}`);
    next(); // Pass control to the next handler
};
app.use(customLogger);

// --- RESTful API Routes ---
import categoryRoutes from './routes/categoryRoutes';
import productRoutes from './routes/productRoutes';
import cartRoutes from './routes/cartRoutes';

app.use('/api/categories', categoryRoutes);
app.use('/api/products', productRoutes);
app.use('/api/cart', cartRoutes);


// 4. Start Server
app.listen(PORT, () => {
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});
