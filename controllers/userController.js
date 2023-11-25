const {PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();

//here we just write functions to avoid writing the routes and fucntions in the same folder
async function getUsers(req, res) {
    const users = await prisma.user.findMany()
    res.send(users);
}

module.exports = {
    getUsers
}
