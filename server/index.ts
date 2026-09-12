import express, { Request, Response } from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import { portfolioData } from './data/portfolioData.js';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// API Routes
app.get('/api/health', (_req: Request, res: Response) => {
  res.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    service: 'Sami Ullah Portfolio MERN API',
    uptime: process.uptime()
  });
});

app.get('/api/profile', (_req: Request, res: Response) => {
  res.json(portfolioData.profile);
});

app.get('/api/stats', (_req: Request, res: Response) => {
  res.json(portfolioData.stats);
});

app.get('/api/skills', (_req: Request, res: Response) => {
  res.json(portfolioData.skills);
});

app.get('/api/projects', (req: Request, res: Response) => {
  const category = req.query.category as string;
  if (category && category !== 'All') {
    const filtered = portfolioData.projects.filter(
      p => p.category.toLowerCase() === category.toLowerCase()
    );
    return res.json(filtered);
  }
  return res.json(portfolioData.projects);
});

app.get('/api/projects/:id', (req: Request, res: Response) => {
  const project = portfolioData.projects.find(p => p.id === req.params.id);
  if (!project) {
    return res.status(404).json({ error: 'Project not found' });
  }
  return res.json(project);
});

app.get('/api/experience', (_req: Request, res: Response) => {
  res.json(portfolioData.experiences);
});

app.get('/api/education', (_req: Request, res: Response) => {
  res.json({
    education: portfolioData.education,
    certifications: portfolioData.certificationsAndStandards
  });
});

app.get('/api/all', (_req: Request, res: Response) => {
  res.json(portfolioData);
});

// Serve static frontend assets in production (e.g. on Render)
const distPath = path.resolve(__dirname, '../dist');
app.use(express.static(distPath));

app.get('*', (_req: Request, res: Response) => {
  res.sendFile(path.join(distPath, 'index.html'), (err) => {
    if (err) {
      res.status(200).send('Sami Ullah Portfolio API is running. Build frontend with `npm run build` to serve client.');
    }
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Sami Ullah Portfolio Server running on port ${PORT}`);
  console.log(`🔗 Health check: http://localhost:${PORT}/api/health`);
});
