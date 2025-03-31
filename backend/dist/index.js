"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const system_1 = __importDefault(require("./routes/system"));
const app = (0, express_1.default)();
const port = Number(process.env.PORT) || 3000;
const corsOptions = {
    origin: process.env.NODE_ENV === "development"
        ? ["http://localhost:5173", "http://127.0.0.1:5173"]
        : process.env.FRONTEND_URL,
    credentials: true,
    optionsSuccessStatus: 200,
};
app.use((0, cors_1.default)(corsOptions));
app.use(express_1.default.json());
app.use("/api/system", system_1.default);
app.listen(port, "0.0.0.0", () => {
    console.log(`Server is running on port ${port}`);
});
