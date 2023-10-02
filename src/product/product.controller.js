// Layer untuk handle request dan response
// handle validasi body

const express = require('express')
const { getAllProduct, getProductById, createProduct, deleteProductById, patchProductById, updateProductById } = require('./product.service')
const { editProduct } = require('./product.repository')
const router = express.Router()

// get Product by id
router.get('/:id', async (req,res)=>{
  try {
    const productId = parseInt(req.params.id)
    const product = await getProductById(productId)
    res.send(product)
  } catch (err) {
    res.status(400).send(err.message)
  }
})

// menampilkan semua data product
router.get('/', async (req,res)=>{
  const products = await getAllProduct()
  res.send(products)
})

// menambahkan product with postman
router.post('/', async (req,res)=>{
  try {
    const newProductData = req.body
    const product = await createProduct(newProductData)
    // respons
    res.send({
      data: product,
      messages: "success add product"
    })
  } catch (err) {
    res.status(400).send(err.message)
  }

})

// delete
router.delete('/:id', async (req,res)=>{
  try {
    const id = parseInt(req.params.id)
    await deleteProductById(id)
    res.send('Product deleted')
  } catch (err) {
    res.status(400).send(err.message)
  }

})

// PUT
router.put('/:id', async (req,res)=>{
  try {
   const id = parseInt(req.params.id)
   const productData = req.body
   const product = await updateProductById(id,productData)
   res.send({
     data: product,
     message: 'Update Success'
   })
  } catch (error) {
 res.status(400).send(error.message)
  }
 })

// PATCH
router.patch('/:id', async (req,res)=>{
 try {
  const id = parseInt(req.params.id)
  const productData = req.body
  const product = await updateProductById(id,productData)
  res.send({
    data: product,
    message: 'Update Success'
  })
 } catch (error) {
res.status(400).send(error.message)
 }
})

module.exports = router