import express from 'express';
import cors from 'cors';
import si from 'systeminformation';

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/api/system-info', async (req, res) => {
    try {
        const [cpu, mem, os, graphics] = await Promise.all([si.cpu(), si.mem(), si.osInfo(), si.graphics()]);

        const systemInfo = {
            os: `${os.distro} ${os.release}`,
            host: os.hostname,
            kernel: os.kernel,
            uptime: Math.floor(os.uptime / 60 / 60) + ' hours',
            packages: 'N/A',
            shell: process.env.SHELL || 'N/A',
            resolution: graphics.displays[0]?.resolutionX + 'x' + graphics.displays[0]?.resolutionY,
            de: 'Web Browser',
            wm: 'Browser Window',
            theme: 'Dark Mode',
            icons: 'Material Icons',
            terminal: 'Portfolio Terminal',
            cpu: `${cpu.manufacturer} ${cpu.brand}`,
            memory: `${Math.round(mem.used / 1024 / 1024 / 1024)}GB / ${Math.round(mem.total / 1024 / 1024 / 1024)}GB`,
            gpu: graphics.controllers[0]?.model || 'N/A',
            disk: 'N/A',
        };

        res.json(systemInfo);
    } catch (error) {
        console.error('Error fetching system info:', error);
        res.status(500).json({ error: 'Failed to fetch system information' });
    }
});

app.listen(port, () => {
    console.log(`Backend server running on port ${port}`);
});
