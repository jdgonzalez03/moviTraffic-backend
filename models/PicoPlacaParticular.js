const mongoose = require("mongoose")

const particularPicoPlacaSchema = new mongoose.Schema({
  dia: { type: String, required: true },        
  placas: { type: [Number], required: true },     
});

const particularPicoPlaca = mongoose.model("particularPicoPlaca", particularPicoPlacaSchema);
module.exports = particularPicoPlaca;

// const picoPlaca = new particularPicoPlaca({
//   dia: 'viernes',
//   placas: [7, 8]
// })

// picoPlaca.save().then((result) => {
//   console.log('pico y placa, guardado')
//   mongoose.connection.close();
// })

