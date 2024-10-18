const mongoose = require("mongoose");

const taxiPicoPlacaSchema = new mongoose.Schema({
  fecha: { type: Date, required: true },        // Fecha específica del pico y placa
  placa: { type: Number, required: true }, // Último dígito de placa restringido en esa fecha
});

const taxiPicoPlaca = mongoose.model("taxiPicoPlaca", taxiPicoPlacaSchema); 

module.exports = taxiPicoPlaca


// const picoPlaca = new taxiPicoPlaca({
//   fecha: "2024-10-31",
//   placa: 6
// })

// picoPlaca.save().then((result) => {
//   console.log('pico y placa, guardado')
//   mongoose.connection.close();
// })