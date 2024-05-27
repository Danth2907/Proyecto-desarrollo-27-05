import mysql from 'mysql2';

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'Durán',
  password: '12345',
  database: 'todolist'
});

connection.connect(err => {
  if (err) {
    console.error('Error conectando a la base de datos:', err);
    return;
  }
  console.log('Conectado a la base de datos MySQL');
});

export default connection;
