import { Router } from "express";
import * as PlayerController from "./controllers/players-controller";
import * as ClubController from "./controllers/clubs-controller"

// a router é quem deverá apontar para um controller

const router = Router() // gerenciador de rotas

router.get("/players", PlayerController.getPlayer)
router.get("/players/:id", PlayerController.getPlayerById) // router param 
router.get("/clubs", ClubController.getClubs)

router.post("/players", PlayerController.postPlayer)

router.patch("/players/:id", PlayerController.updatePlayer)

router.delete("/players/:id", PlayerController.deletePlayer)

export default router