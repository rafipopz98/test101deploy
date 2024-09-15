import express from "express";
import UserRouter from "../router/user.js";
const app = express();

app.get("/", (req, res) => res.send("Express on Vercel"));

app.get('/nice', (req, res) => {
    res.send("Nice")
})

app.use("/user", UserRouter);


app.listen(9389, () => console.log("Server ready on port 9389."));

export default app;
