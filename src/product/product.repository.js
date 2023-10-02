// Berkomunikasi dengan database
const prisma = require('../db/index')

const findProduct=async ()=>{
  const products = await prisma.products.findMany()
  return products
}

const findProductById = async (id)=>{
  const product = await prisma.products.findUnique({
    where:{
      id
    }
  })
  return product
}

const insertProduct = async (newProductData)=>{
  const product = await prisma.products.create({
    data:{
      name: newProductData.name,
      price: newProductData.price,
      description: newProductData.description,
      image: newProductData.image
    }
  })
 return product
}

const deleteProduct = async (id)=>{
await prisma.products.delete({where:{id}})
}
const editProduct = async (id,productData)=>{
  const product = await prisma.products.update({
    where:{id},
    data:{
      name: productData.name,
      price: productData.price,
      description: productData.description,
      image: productData.image
    }
  })
  return product
}

module.exports = {
  findProduct,
  findProductById,
  insertProduct,
  deleteProduct,
  editProduct
}