import mongoose from 'mongoose';

const clienteSchema = new mongoose.Schema({
  name: { type: String, required: true, unique:true },
});

const Cliente = mongoose.model('Cliente', clienteSchema, 'cliente');

export default Cliente;
