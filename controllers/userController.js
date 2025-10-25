import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function register(req, res) {
    try {
        const { username, password } = req.body; // Only username and password
        
        // Check if all required fields are present
        if (!username || !password) {
            return res.status(400).json({ 
                error: 'Missing required fields: username, password' 
            });
        }

        const user = await prisma.user.create({
            data: {
                username,
                password
            }
        });
        
        res.status(201).json({
            id: user.id,
            username: user.username
            // Don't send password back
        });
        
    } catch (error) {
        console.error('Registration error:', error);
        
        if (error.code === 'P2002') {
            // Unique constraint violation - username already exists
            return res.status(400).json({ 
                error: 'Username already exists' 
            });
        }
        
        res.status(500).json({ error: 'Internal server error' });
    }
}

async function login(req, res) {
    try {
        const { username, password } = req.body; // Use username instead of email
        
        if (!username || !password) {
            return res.status(400).json({ error: 'Username and password required' });
        }

        const user = await prisma.user.findUnique({
            where: { username } // Find by username, not email
        });     
        
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        if (user.password !== password) {
            return res.status(401).json({ error: 'Invalid password' });
        }

        res.json({ 
            message: 'Login successful', 
            user: {
                id: user.id,
                username: user.username
            }
        });
        
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

async function getUsers(req, res) {
    try {
        const users = await prisma.user.findMany({
            select: {
                id: true,
                username: true
                // Don't include password
            }
        });
        res.json(users);
    } catch (error) {
        console.error('Get users error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

export { getUsers, register, login };