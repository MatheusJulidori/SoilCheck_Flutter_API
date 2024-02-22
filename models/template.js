import mongoose, { Schema } from 'mongoose';

const templateSchema = new mongoose.Schema({
  name: { type: String, required: true, unique:true },
  fields: { type: Schema.Types.Mixed, required: true},
},{strict:false});

const Template = mongoose.model('Template', templateSchema, 'checklist_template');

export default Template;
