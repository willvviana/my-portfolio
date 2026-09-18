import { Request, Response } from "express";
import { pool } from "../db/database.js";

export async function getHealth(_req: Request, res: Response) {
  try {
    await pool.query("SELECT 1");

    res.json({
      status: "ok",
      database: "connected",
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      status: "error",
      database: "disconnected",
    });
  }
}