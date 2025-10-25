import express, { json } from 'express';
import { register, getUsers, login } from './controllers/userController.js';

const server = express();
const PORT = 1339;

// Middleware should be set up before routes
server.use(json());

// Use appropriate HTTP methods for routes
server.post("/users/register", register);
server.post("/users/login", login);
server.get("/users", getUsers); // Added getUsers route

server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});