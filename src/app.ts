import express, {Request, Response} from "express"

function createApp() {
    // definindo a application
    const app = express()

    // middleware -> age entre a chamada e bater no servidor
    // converte para json (body)
    app.use(express.json())

    app.get("/", (request: Request, response: Response) => {
        response.status(200).json({ player: "beckham" })
    })

    return app
}

export default createApp