//here we just write functions to avoid writing the routes and fucntions in the same folder
const {PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();

async function getProducts(req, res) {
   const products=  await prisma.product.findMany()
    res.send(products);
}

module.exports = {
    getProducts
}
