import express from "express";

const router = express.Router();

router.post("/task/create", (req, res) => {
    res.send("create task");
});



export default router;