import { Router } from "express";

const routes = new Router();

routes.get("/", (req, res) => {
    res.send("hello word!")
})

export default routes;