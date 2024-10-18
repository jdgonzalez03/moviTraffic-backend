const express = require('express');
const router = express.Router();
const TaxiPicoPlaca = require('../models/PicoPlacaTaxi'); 

router.get('/taxis', async (req, res) => {
  try {
    const taxiPicoPlaca = await TaxiPicoPlaca.find({});
    res.json(taxiPicoPlaca);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener pico y placa de taxis", error: error.message });
  }
})

module.exports = router;