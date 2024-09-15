import express from "express";
const UserRouter = express.Router();

UserRouter.get("/print", (req, res) => {
    res.send("User");
});

export default UserRouter;