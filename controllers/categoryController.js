//here we just write functions to avoid writing the routes and fucntions in the same folder

const {PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();

async function getCategory(req, res) {
    const categories = await prisma.category.findMany()
    res.send(categories);
}

module.exports = {
    getCategory
}
