import express from "express";
import cors from "cors";
import systemRouter from "./routes/system";

const app = express();
const port = Number(process.env.PORT) || 3000;

const corsOptions = {
  origin:
    process.env.NODE_ENV === "development"
      ? ["http://localhost:5173", "http://127.0.0.1:5173"]
      : process.env.FRONTEND_URL,
  credentials: true,
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.json());

app.use("/api/system", systemRouter);

app.listen(port, "0.0.0.0", () => {
  console.log(`Server is running on port ${port}`);
});
