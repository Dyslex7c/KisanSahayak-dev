import express from "express";
import verifyToken from "../middleware/protectRoute.js";
import { buyItem, getAllItems, getItemById, getMyOrders, getMySellings, sellItem } from "../controllers/marketplace.controller.js";

const router = express.Router();

router.post("/sell", sellItem);
router.get("/explore/:id", getAllItems);
router.get("/sold/:id", getMySellings);
router.get("/:id", getItemById);
router.post("/buy", buyItem);
router.get("/orders/:id", getMyOrders);

export default router;