import { Request, Response } from "express"
import { getPLayerService } from "../services/player-service"
import { ok } from "../utils/http-helper"

export const getPlayer = async (req: Request, res: Response) => {
    const httpResponse = await getPLayerService()
    res.status(httpResponse.statusCode).json(httpResponse.body)
}