"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSystemInfo = getSystemInfo;
const os_1 = __importDefault(require("os"));
const child_process_1 = require("child_process");
const util_1 = require("util");
const execAsync = (0, util_1.promisify)(child_process_1.exec);
async function getSystemInfo() {
    const uptimeHours = Math.floor(os_1.default.uptime() / 3600);
    const uptimeMinutes = Math.floor((os_1.default.uptime() % 3600) / 60);
    let packages = "0";
    try {
        const { stdout } = await execAsync('dpkg -l | grep -c "^ii"');
        packages = stdout.trim();
    }
    catch (error) {
        console.error("Error getting package count:", error);
    }
    let gpu = "Unknown";
    try {
        const { stdout } = await execAsync("lspci | grep -i vga");
        gpu = stdout.trim();
    }
    catch (error) {
        console.error("Error getting GPU info:", error);
    }
    const totalMem = Math.round(os_1.default.totalmem() / (1024 * 1024));
    const freeMem = Math.round(os_1.default.freemem() / (1024 * 1024));
    const usedMem = totalMem - freeMem;
    return {
        hostname: os_1.default.hostname(),
        os: `${os_1.default.type()} ${os_1.default.release()} on ${os_1.default.platform()} ${os_1.default.arch()}`,
        kernel: os_1.default.release(),
        uptime: `${uptimeHours} hours, ${uptimeMinutes} mins`,
        packages: `${packages} (dpkg)`,
        shell: process.env.SHELL || "unknown",
        theme: "Default",
        icons: "Default",
        terminal: process.env.TERM || "unknown",
        cpu: `${os_1.default.cpus()[0].model}`,
        gpu,
        memory: `${usedMem}MiB / ${totalMem}MiB`,
    };
}
