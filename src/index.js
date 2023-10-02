const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

// membaca yang ada di .env
dotenv.config();
const app = express();
const PORT = process.env.PORT;

app.use(cors());

// membaca body yang di kirim
app.use(express.json());

// Product
const productController = require("./product/product.controller");
app.use("/products", productController);

// menjalankan server port
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
