const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: true,
    trim: true,
  },
  phone: {
    type: String,
    required: true,
    validate: {
      validator: function (v) {
        return /^\+?[0-9\s-]+$/.test(v);
      },
      message: (props) => `${props.value} no es un número de teléfono válido!`,
    },
  },
  CC: {
    type: String,
    required: true,
    unique: true,
  },
  vehiclePlates: [
    {
      dateSoat: {
        type: Date,
        required: true,
      },
      plate: {
        type: String,
        required: true,
        trim: true,
      },
    },
  ],
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
});

const User = mongoose.model("User", userSchema);
module.exports = User;


// const user = new User({
//   fullname: 'Juan Gonzalez ',
//   phone: '3014980859',
//   CC:'11110000',
//   vehiclePlates: ['GIJ65G'],
//   password: 'EstoEsUnaPrueba'
// })

// user.save().then((result) => {
//   console.log("User saved!");
//   mongoose.connection.close();
// });




// const userSchema = new mongoose.Schema({
//   fullname: String,
//   phone: String,
//   CC: Number,
//   vehiclePlates: Array,
//   password: String
// });
