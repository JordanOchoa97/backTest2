import findUser from "./app/controller/user.js";
import {getProducts, deleteProduct, updateProduct, addProduct} from "./app/controller/products.js";
import fetch from "node-fetch";
import express, { response } from "express";
import cors from "cors";

const app = express()
const port = 3005

app.use(cors({origin: "*"}))

app.use(express.json())

app.post('/products', (req, res) => {
    console.log(req.body)
    if(req.body.action === "delete"){
        deleteProduct(req.body.id).then(response => {
            res.json(response)
        })
    }
    if(req.body.action === "update"){
        updateProduct(req.body).then(response => {
            res.json(response)
        })
    }
    if(req.body.action === "add"){
        addProduct(req.body.payload).then(response => {
            res.json(response)
        })
    }
    if(req.body.action === "get") {
        getProducts(req.body.limit, req.body.skip).then(response => {
            res.json(response)
        })
    }
})

app.post('/user', (req, res) => {
    console.log(req.body)
    findUser(req.body.username, req.body.password).then( response => {
        response? res.json(response) : res.json("Not valid credentials")
    })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})