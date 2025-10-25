import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

//here we just write functions to avoid writing the routes and fucntions in the same folder
async function register(req, res) {
    const { name, email, password } = req.body;
    const user = await prisma.user.create({
        data: {
            name,
            email,
            password
        }
    });
    res.send(user);
}

//log in function
async function login(req,res){
    const { email, password } = req.body;
    const user = await prisma.user.findUnique({
        where: {
            email: email
        }
    });     
    if(!user){
        return res.status(404).send({ message: 'User not found' });
    }
    if(user.password !== password){
        return res.status(401).send({ message: 'Invalid password' });
    }

    res.send({ message: 'Login successful', user });
}

async function getUsers(req, res) {
    const users = await prisma.user.findMany()
    res.send(users);
}

export  {
    getUsers,
    register,
    login
}
