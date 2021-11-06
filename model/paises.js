const mongoose = require("mongoose");

const paisesModel = new mongoose.Schema({
    nome: {type: String, required: true },
    populacao: { type: Number},
    idioma: { type: Number, required: true},
    pib: {type: Number}
});

const Pessoa = mongoose.model("Paises", paisesModel);

module.exports = Paises; 