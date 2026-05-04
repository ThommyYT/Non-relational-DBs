import { Router } from "express";
import { addEvent, getRecentEvents } from "./eventService.js";

const router = Router();

router.post("/event", async (req, res) => {
  const { userId, eventType, page } = req.body;
  console.log("Received event:", { userId, eventType, page });

  await addEvent(userId, eventType, page);

  res.send("Event stored");
});

router.get("/events", async (req, res) => {
  console.log("Fetching events for user:", req.query.user);
  const userId = req.query.user;
  const events = await getRecentEvents(userId);
  res.json(events);
});

export default router;
