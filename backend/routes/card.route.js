import express from "express";
import { createCard, getAllCard, getCardByTitle } from "../controllers/card.controller.js";

const router = express.Router();


router.post("/", createCard);
router.get("/", getAllCard);
router.get("/:title",getCardByTitle)

export default router;


