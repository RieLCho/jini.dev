import express from "express";
import os from "os";

const router = express.Router();

router.get("/info", async (req, res) => {
  try {
    const systemInfo = {
      hostname: os.hostname(),
      os: `${os.type()} ${os.release()}`,
      kernel: os.release(),
      uptime: `${Math.floor(os.uptime() / 3600)}h ${Math.floor(
        (os.uptime() % 3600) / 60
      )}m`,
      packages: "N/A (Docker)",
      shell: process.env.SHELL || "/bin/sh",
      theme: "Dark",
      icons: "Default",
      terminal: "xterm",
      cpu: os.cpus()[0].model,
      gpu: "N/A (Docker)",
      memory: `${Math.round(os.freemem() / 1024 / 1024)}MB / ${Math.round(
        os.totalmem() / 1024 / 1024
      )}MB`,
    };

    res.json(systemInfo);
  } catch (error) {
    console.error("Error getting system info:", error);
    res.status(500).json({ error: "Failed to get system info" });
  }
});

export default router;
