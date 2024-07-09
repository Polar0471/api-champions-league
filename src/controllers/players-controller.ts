import { Request, Response } from "express"
import { getPLayerService } from "../services/player-service"
import { ok } from "../utils/http-helper"

export const getPlayer = async (req: Request, res: Response) => {
    const data = await getPLayerService()
    const response = await ok(data)
    res.status(response.statusCode).json(response.body)
}