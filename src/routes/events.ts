import express from "express";
import { body } from "express-validator";
import EventController from "../controllers/eventController";
import { EventType } from "../types/event/EventType";

const router = express.Router();

router.post(
    "/",
    body("event").isIn(Object.values(EventType)),
    body("adID").notEmpty(),
    body("userID").notEmpty(),
    body("deviceID").notEmpty(),
    body("placementID").notEmpty(),
    EventController.save
);

export default router;
