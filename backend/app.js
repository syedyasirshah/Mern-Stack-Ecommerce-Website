const express = require("express");
const productRouter = require("./routes/productsRoute");
const app = express();
app.use(express.json());

// 3) ROUTES

app.use("/api/v1/products", productRouter);
module.exports = app;
