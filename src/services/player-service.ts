import { PlayerModel } from "../models/player-model"
import PlayerStatistics from "../models/statistics-model"
import * as PlayerRepository from "../repositories/players-repository"
import * as HttpResponse from "../utils/http-helper"

export const getPlayerService = async () => {
    const data = await PlayerRepository.findAllPlayers()
    let response = null

    if (data) {
        response = await HttpResponse.ok(data)
    } else {
        response = await HttpResponse.noContent()
    }

    return response
}

export const getPlayerByIdService = async (id: number) => {
    // pedir para o repositório de dados
    const data = await PlayerRepository.findPlayerById(id)
    let response = null

    if (data) {
        response = await HttpResponse.ok(data)
    } else {
        response = await HttpResponse.noContent()
    }

    return response
}

export const createPlayerService = async (player: PlayerModel) => {
    let response = null

    // verifica se o objeto está vazio
    if (Object.keys(player).length !== 0) {
        await PlayerRepository.insertPlayer(player)
        response = await HttpResponse.created()
    } else {
        response = await HttpResponse.badRequest()
    }

    return response
}

export const deletePlayerService = async (id: number) => {
    let response = null
    await PlayerRepository.deleteOnePlayer(id)
    response = await HttpResponse.ok({message: "deleted"})
    return response
}

export const updatePlayerService = async (id: number, statistics: PlayerStatistics) => {
    const data = await PlayerRepository.findAndModifyPlayer(id, statistics)
    let response = null

    if (Object.keys(data).length === 0) {
        response = await HttpResponse.badRequest()
    } else {
        response = await HttpResponse.ok(data)
    }
    
    return response
}