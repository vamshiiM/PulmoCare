import express from "express"
import cors from "cors"
import { ConnectDB } from "../../../RentalVerse/RentalVerse/backend/config/db.js"
import userRouter from "../../../RentalVerse/RentalVerse/backend/routes/userRoute.js"
import 'dotenv/config'



// app configuration

const app = express()
const port = 4000

app.use(express.json())
app.use(cors())


// db conection
ConnectDB()

// creating endpoints


app.use("/api/user", userRouter)


app.get("/", (req, res) => {
    res.send("API WORKING ! congratulations")
})

app.listen(port, () => {
    console.log(`server started on http://localhost:${port}`)
})

// for testing api extensions are used
//like thunder client or postman
