import getConnection from './db.js';
import bcrypt from 'bcrypt';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Método no permitido' });
  }

  const { name, email, password, confirmPassword } = req.body;

  if (!name || !email || !password || !confirmPassword) {
    return res.status(400).json({ success: false, message: 'Todos los campos son requeridos' });
  }

  if (password !== confirmPassword) {
    return res.status(400).json({ success: false, message: 'Las contraseñas no coinciden' });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ success: false, message: 'Email no válido' });
  }

  try {
    const connection = await getConnection();

    // Check if email exists
    const [existingUser] = await connection.execute('SELECT id FROM usuarios WHERE email = ?', [email]);
    if (existingUser.length > 0) {
      connection.release();
      return res.status(409).json({ success: false, message: 'El email ya está registrado' });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert user
    const [result] = await connection.execute('INSERT INTO usuarios (nombre, email, password) VALUES (?, ?, ?)', [name, email, hashedPassword]);
    connection.release();

    res.status(201).json({ success: true, message: 'Usuario registrado exitosamente', userId: result.insertId });
  } catch (error) {
    console.error('Error during registration:', error);
    res.status(500).json({ success: false, message: 'Error en el servidor' });
  }
}
