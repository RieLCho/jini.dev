import os from "os";
import { exec } from "child_process";
import { promisify } from "util";

const execAsync = promisify(exec);

interface SystemInfo {
  hostname: string;
  os: string;
  kernel: string;
  uptime: string;
  packages: string;
  shell: string;
  theme: string;
  icons: string;
  terminal: string;
  cpu: string;
  gpu: string;
  memory: string;
}

export async function getSystemInfo(): Promise<SystemInfo> {
  const uptimeHours = Math.floor(os.uptime() / 3600);
  const uptimeMinutes = Math.floor((os.uptime() % 3600) / 60);

  let packages = "0";
  try {
    const { stdout } = await execAsync('dpkg -l | grep -c "^ii"');
    packages = stdout.trim();
  } catch (error) {
    console.error("Error getting package count:", error);
  }

  let gpu = "Unknown";
  try {
    const { stdout } = await execAsync("lspci | grep -i vga");
    gpu = stdout.trim();
  } catch (error) {
    console.error("Error getting GPU info:", error);
  }

  const totalMem = Math.round(os.totalmem() / (1024 * 1024));
  const freeMem = Math.round(os.freemem() / (1024 * 1024));
  const usedMem = totalMem - freeMem;

  return {
    hostname: os.hostname(),
    os: `${os.type()} ${os.release()} on ${os.platform()} ${os.arch()}`,
    kernel: os.release(),
    uptime: `${uptimeHours} hours, ${uptimeMinutes} mins`,
    packages: `${packages} (dpkg)`,
    shell: process.env.SHELL || "unknown",
    theme: "Default",
    icons: "Default",
    terminal: process.env.TERM || "unknown",
    cpu: `${os.cpus()[0].model}`,
    gpu,
    memory: `${usedMem}MiB / ${totalMem}MiB`,
  };
}
