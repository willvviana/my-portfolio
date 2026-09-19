import { Request, Response } from "express";
import { pool } from "../db/database.js";

export const createContact = async (req: Request, res: Response) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        message: "Name, email and message are required",
      });
    }

    const result = await pool.query(
      `INSERT INTO contacts (name, email, message)
       VALUES ($1, $2, $3)
       RETURNING id, name, email, message, created_at`,
      [name, email, message]
    );

    return res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error("Error creating contact:", error);

    return res.status(500).json({
      message: "Internal server error",
    });
  }
};