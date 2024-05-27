import express from 'express';
import connection from '../utils/db.js';
import { checkAuthorization } from '../utils/apiKey.js';

const router = express.Router();

router.get('/getTasks', checkAuthorization, (req, res) => {
  connection.query('SELECT * FROM tareas', (err, results) => {
    if (err) {
      return res.status(500).json({ message: 'Error al obtener las tareas' });
    }
    return res.status(200).json(results);
  });
});

router.post('/addTask', checkAuthorization, (req, res) => {
  const { name, description, deadline } = req.body;
  if (!name || !description || !deadline) {
    return res.status(400).json({ message: 'Faltan parámetros' });
  }
  const query = 'INSERT INTO tareas (name, description, deadline) VALUES (?, ?, ?)';
  connection.query(query, [name, description, deadline], (err, results) => {
    if (err) {
      return res.status(500).json({ message: 'Error al agregar la tarea' });
    }
    return res.status(200).json({ message: 'Tarea agregada exitosamente', id: results.insertId });
  });
});

router.delete('/removeTask', checkAuthorization, (req, res) => {
  const { taskId } = req.body;
  if (!taskId) {
    return res.status(400).json({ message: 'Falta el parámetro taskId' });
  }
  const query = 'DELETE FROM tareas WHERE id = ?';
  connection.query(query, [taskId], (err) => {
    if (err) {
      return res.status(500).json({ message: 'Error al eliminar la tarea' });
    }
    return res.status(200).json({ message: 'Tarea eliminada exitosamente' });
  });
});

export default router;
