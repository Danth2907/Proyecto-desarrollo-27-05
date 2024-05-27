import express from 'express';
import taskRoutes from './routes/tasks.js';
import goalRoutes from './routes/goals.js';

const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/tasks', taskRoutes);
app.use('/goals', goalRoutes);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
