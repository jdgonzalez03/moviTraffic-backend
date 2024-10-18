const express = require('express');
const router = express.Router();
const User = require('../models/User'); 
const bcrypt = require('bcrypt'); 
const jwt = require('jsonwebtoken');
require('dotenv').config();

// Obtener todos los usuarios
router.get("/user", async (req, res) => {
  try {
    const users = await User.find({});
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener usuarios", error: error.message });
  }
});

// Login 
router.post('/login', async(req, res) => {
  const { CC, password } = req.body;

  try{
    //Verifica usuario
    const user = await User.findOne({ CC });
    if (!user) {
      return res.status(400).json({ message: 'Usuario no encontrado', CC });
    }

    //Verifica contraseña
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Contraseña incorrecta' });
    }

    // Genera el token JWT
    const token = jwt.sign({ id: user._id }, process.env.SECRET_KEY, { expiresIn: '1h' });

    res.status(200).json({
      message: 'Inicio de sesión exitoso',
      token,
      user: {
        fullname: user.fullname,
        phone: user.phone,
        CC: user.CC,
        vehiclePlates: user.vehiclePlates,
      },
    });

  }catch (error) {
    res.status(500).json({ message: 'Error al iniciar sesión', error: error.message });
  }
})

// Registrar nuevo usuario
router.post('/register', async (req, res) => {
  const { fullname, phone, CC, vehiclePlates, password } = req.body;

  try {
    // Verifica si el usuario ya existe
    const existingUser = await User.findOne({ CC });
    if (existingUser) {
      return res.status(400).json({ message: 'El usuario ya existe' });
    }

    // Encripta la contraseña
    const hashedPassword = await bcrypt.hash(password, 10);

    // Crea un nuevo objeto de usuario
    const newUser = new User({
      fullname,
      phone,
      CC,
      vehiclePlates,
      password: hashedPassword, // Guarda la contraseña encriptada
    });

    // Guarda el usuario en la base de datos
    await newUser.save();

    res.status(201).json({ message: 'Usuario registrado exitosamente' });
  } catch (error) {
    res.status(500).json({ message: 'Error al registrar el usuario', error: error.message }); // Incluye el error para depuración
  }
});



module.exports = router;
