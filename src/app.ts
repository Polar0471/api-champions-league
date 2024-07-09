import express from "express"
import router from "./routes"
import cors from "cors"

function createApp() {
    // definindo a application
    const app = express()

    // middleware -> age entre a chamada e bater no servidor
    // converte para json (body)
    app.use(express.json())
    
    app.use("/api", router)
    
    // camada que controla o acesso a api
    const corsOptions = {
        origin: "*"
    }
    app.use(cors())

    return app
}

export default createApp