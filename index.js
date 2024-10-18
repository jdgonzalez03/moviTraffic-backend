const express = require('express')
const app = express();
const cors = require("cors");
//ConectDb
require("./config/db.js");


//Routes
const userRoutes = require('./routes/userRoutes.js');
const particularPicoPlacaRoutes = require('./routes/PicoPlacaParticularRoutes.js')
const taxisPicoPlacaRoutes = require('./routes/PicoPlacaTaxisRoutes.js')

//Use middleware
app.use(express.json());

app.use(cors());
app.use('/api', userRoutes); 
app.use('/api', particularPicoPlacaRoutes)
app.use('/api', taxisPicoPlacaRoutes)

// PORT
const PORT = process.env.PORT || 3001;

//Server on
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})