import mongoose,{ Schema } from 'mongoose';

const checklistSchema = new mongoose.Schema({
  id_radio: { type: String, required: true, unique:true},
  id_fazenda: {type: String},
  id_pivo: {type: String},
  id_cliente: {type: String},
  id_template: {type: String, required: true},
  id_responsavel: {type: String, required: true},
  data_criacao: { type: Date, default: Date.now },
  data_atualizacao: { type: Date, default: Date.now },
  fields: { type: Schema.Types.Mixed, required: true},
},{strict:false});

const Checklist = mongoose.model('Checklist', checklistSchema, 'checklist');

export default Checklist;
