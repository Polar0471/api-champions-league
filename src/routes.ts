import { Router } from "express";
import * as PlayerController from "./controllers/players-controller";

// a router é quem deverá apontar para um controller

const router = Router() // gerenciador de rotas

router.get("/players", PlayerController.getPlayer)
router.get("/players/:id", PlayerController.getPlayerById) // router param 

router.post("/players", PlayerController.postPlayer)

export default router