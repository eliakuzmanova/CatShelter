const express = require('express')
const router = express.Router()


const homeController = require("../controllers/homeController")

const addBreedController = require("../controllers/addBreedController")

module.exports = (app) => {

    router.get('/', homeController.getHomeView)

    router.get("/cats/add-breed", addBreedController.getAddBreedView)
    router.post("/cats/add-breed", addBreedController.postAddBreed)

    return router
}