import { noContent, ok } from "../utils/http-helper"

export const getPLayerService = async () => {
    const data = { player: "Ronaldo" }
    let response = null

    if (data) {
        response = await ok(data)
    } else {
        response = await noContent()
    }

    return response
}