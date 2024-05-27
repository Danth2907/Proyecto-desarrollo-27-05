import express from 'express';
import connection from '../utils/db.js';
import { checkAuthorization } from '../utils/apiKey.js';

const router = express.Router();

router.get('/getGoals', checkAuthorization, (req, res) => {
  connection.query('SELECT * FROM goals', (err, results) => {
    if (err) {
      return res.status(500).json({ message: 'Error al obtener las metas' });
    }
    return res.status(200).json(results);
  });
});

router.post('/addGoal', checkAuthorization, (req, res) => {
  const { name, description, deadline } = req.body;
  if (!name || !description || !deadline) {
    return res.status(400).json({ message: 'Faltan parámetros' });
  }
  const query = 'INSERT INTO goals (name, description, deadline) VALUES (?, ?, ?)';
  connection.query(query, [name, description, deadline], (err, results) => {
    if (err) {
      return res.status(500).json({ message: 'Error al agregar la meta' });
    }
    return res.status(200).json({ message: 'Meta agregada exitosamente', id: results.insertId });
  });
});

router.delete('/removeGoal', checkAuthorization, (req, res) => {
  const { goalId } = req.body;
  if (!goalId) {
    return res.status(400).json({ message: 'Falta el parámetro goalId' });
  }
  const query = 'DELETE FROM goals WHERE id = ?';
  connection.query(query, [goalId], (err) => {
    if (err) {
      return res.status(500).json({ message: 'Error al eliminar la meta' });
    }
    return res.status(200).json({ message: 'Meta eliminada exitosamente' });
  });
});

export default router;
