import mongoose from 'mongoose';

const fazendaSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true},
  idCliente: { type: String, required: true },
});

const Fazenda = mongoose.model('Fazenda', fazendaSchema, 'fazenda');

export default Fazenda;
