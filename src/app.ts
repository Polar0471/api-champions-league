import express from "express"
import router from "./routes"

function createApp() {
    // definindo a application
    const app = express()

    // middleware -> age entre a chamada e bater no servidor
    // converte para json (body)
    app.use(express.json())
    app.use("/api", router)

    return app
}

export default createApp