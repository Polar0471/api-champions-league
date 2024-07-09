import { Request, Response } from "express"
import { getPLayerService } from "../services/player-service"

export const getPlayer = async (request: Request, response: Response) => {
    const data = await getPLayerService()
    response.status(200).json(data)
}