import mongoose from 'mongoose';

const pivoSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true},
  idFazenda: { type: String, required: true },
});

const Pivo = mongoose.model('Pivo', pivoSchema, 'pivo');

export default Pivo;
