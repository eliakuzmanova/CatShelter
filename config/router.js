const express = require('express')
const router = express.Router()


const homeController = require("../controllers/homeController")
const addCatController = require("../controllers/addCatController")
const addBreedController = require("../controllers/addBreedController")

module.exports = (app) => {

    router.get('/', homeController.getHomeView)

    router.get("/cats/add-breed", addBreedController.getAddBreedView)
    router.post("/cats/add-breed", addBreedController.postAddBreed)

    router.get("/cats/add-cat", addCatController.getAddCatView)
    return router
}