import express from "express";
import cors from "cors";
import healthRoutes from "./routes/health.routes.js";
import contactsRoutes from "./routes/contacts.routes.js";

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.get("/", (_req, res) => {
  res.json({
    message: "Portfolio API is running",
  });
});

app.use("/api", healthRoutes);
app.use("/api", contactsRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});