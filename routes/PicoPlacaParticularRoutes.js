const express = require('express');
const router = express.Router();
const ParticularPicoPlaca = require('../models/PicoPlacaParticular'); 

router.get('/particular', async (req, res) => {
  try {
    const particularPicoPlaca = await ParticularPicoPlaca.find({});
    res.json(particularPicoPlaca);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener pico y placa de particulares", error: error.message });
  }
})

module.exports = router;