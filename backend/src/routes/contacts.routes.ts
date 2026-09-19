import { Router } from "express";
import { createContact } from "../controllers/contacts.controller.js";

const router = Router();

router.post("/contacts", createContact);

export default router;