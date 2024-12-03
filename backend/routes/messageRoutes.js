import express from "express"
import { getMessages, sendMessage } from "../controllers/messageController.js"
import protectRoutes from "../middleware/protectRoutes.js"

const router = express.Router()

router.get("/:id",protectRoutes,getMessages)
router.post("/send/:id",protectRoutes,sendMessage)

export default router