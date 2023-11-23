import express from "express";
import {
  createContact,
  getContact,
  deleteContact,
} from "./Controllers/contactController.js";
const router = express.Router();

router.post("/", createContact);
router.get("/", getContact);
router.delete("/", deleteContact);

export default router;
