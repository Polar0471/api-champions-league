import express, {Request, Response} from "express"
import { getPlayer } from "./controllers/players-controller"

function createApp() {
    // definindo a application
    const app = express()

    // middleware -> age entre a chamada e bater no servidor
    // converte para json (body)
    app.use(express.json())

    app.get("/", getPlayer)

    return app
}

export default createApp