// Sevices layer bertujuan untuk handle busines logic

const prisma = require('../db/index')
const { findProduct, findProductById, insertProduct, deleteProduct, editProduct } = require('./product.repository')

const getAllProduct = async () =>{
  const products = await findProduct()
  return products
}
const getProductById = async (id)=>{
  if(typeof id !== 'number'){
    throw new Error("ID is not a number")
  }
  const product = await findProductById(id)
  if(!product){
    throw Error("Product not found")
  }
  return product
}
const createProduct = async (newProductData)=>{
  const product = await insertProduct(newProductData)
  return product
}
const deleteProductById = async (id)=>{
  if(typeof id !== 'number'){
    throw new Error("not id")
  }
  const product = await getProductById(id)
  if(!product){
    throw new Error("Product not found")
  }
 await deleteProduct(id)

}

const updateProductById = async (id,productData)=>{
  await getProductById(id)
  const product = await editProduct(id,productData)
  return product
}




module.exports = {
  getAllProduct,
  getProductById,
  createProduct,
  deleteProductById,
  updateProductById
}