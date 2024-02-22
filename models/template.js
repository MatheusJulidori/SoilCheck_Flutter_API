import mongoose from 'mongoose';

const templateSchema = new mongoose.Schema({
  name: { type: String, required: true, unique:true },
  fields: { type: Schema.Types.Mixed},
},{strict:false});

const Template = mongoose.model('Template', templateSchema, 'checklist_template');

export default Template;
