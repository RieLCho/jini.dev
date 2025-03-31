"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const os_1 = __importDefault(require("os"));
const router = express_1.default.Router();
router.get("/info", async (req, res) => {
    try {
        const systemInfo = {
            hostname: os_1.default.hostname(),
            os: `${os_1.default.type()} ${os_1.default.release()}`,
            kernel: os_1.default.release(),
            uptime: `${Math.floor(os_1.default.uptime() / 3600)}h ${Math.floor((os_1.default.uptime() % 3600) / 60)}m`,
            packages: "N/A (Docker)",
            shell: process.env.SHELL || "/bin/sh",
            theme: "Dark",
            icons: "Default",
            terminal: "xterm",
            cpu: os_1.default.cpus()[0].model,
            gpu: "N/A (Docker)",
            memory: `${Math.round(os_1.default.freemem() / 1024 / 1024)}MB / ${Math.round(os_1.default.totalmem() / 1024 / 1024)}MB`,
        };
        res.json(systemInfo);
    }
    catch (error) {
        console.error("Error getting system info:", error);
        res.status(500).json({ error: "Failed to get system info" });
    }
});
exports.default = router;
