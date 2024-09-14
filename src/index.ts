
import { PrismaClient } from "@prisma/client";
import express from "express";

const app = express();
app.use(express.json());

const client = new PrismaClient();

app.get("/", (req: express.Request, res: express.Response) => {
    res.json({
        message: "Healthy server"
    })
})

app.post("/", async (req: express.Request, res: express.Response) => {
    await client.user.create({
        data: {
            email: req.body.email,
            name: req.body.name,
            password: req.body.password
        }
    })

    res.json({
        message: "Done signing up!"
    })
})

app.listen(3000);