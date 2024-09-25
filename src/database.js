import mongoose from "mongoose";

mongoose.connect("mongodb+srv://maximoperret:coderhouse@cluster0.rclpj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    .then(() => console.log("Conectados a la BD"))
    .catch((error) => console.log("Tenemos un error: ", error))