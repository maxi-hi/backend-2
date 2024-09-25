import mongoose from "mongoose";

const usuarioSchema = new mongoose.Schema({
  usuario: String,
  password: String,
  first_name: String,
  last_name: String,
  email: { type: String, unique: true },
  age: Number,
  cart: { type: mongoose.Schema.Types.ObjectId, ref: 'Carts' },
  rol: {
    type: String,
    enum: ["admin", "user"],
    default: "user"
  }
});

const UsuarioModel = mongoose.model("usuarios", usuarioSchema);

export default UsuarioModel;