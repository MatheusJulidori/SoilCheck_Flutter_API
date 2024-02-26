import Checklist from '../models/checklist.js';

export const createChecklist = async (req, res) => {
    try {
        const { id_radio, id_fazenda, id_pivo, id_cliente, id_template, id_responsavel, fields } = req.body;
        const newChecklist = new Checklist({ id_radio, id_fazenda, id_pivo, id_cliente, id_template, id_responsavel, fields });
        const savedChecklist = await newChecklist.save();
        res.status(201).json(savedChecklist);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const getAllChecklists = async (req, res) => {
    try {
        const checklists = await Checklist.find();
        res.status(200).json(checklists);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const getChecklist = async (req, res) => {
    try {
        const checklist = await Checklist.findById(req.params.id);
        if (checklist) {
            res.status(200).json(checklist);
        } else {
            res.status(404).json({ message: 'Checklist not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const updateChecklist = async (req, res) => {
    const { id_radio, id_fazenda, id_pivo, id_cliente, id_template, id_responsavel, fields } = req.body;
    const {id} = req.params;
    try {
        const checklist = await Checklist.findById(id);
        if (!checklist) {
            return res.status(404).json({ message: 'Checklist not found' });
        }
        if (id_radio) checklist.id_radio = id_radio;
        if (id_fazenda) checklist.id_fazenda = id
        if (id_pivo) checklist.id_pivo = id_pivo;
        if (id_cliente) checklist.id_cliente = id_cliente;
        if (id_template) checklist.id_template = id_template;
        if (id_responsavel) checklist.id_responsavel = id_responsavel;
        if (fields) checklist.fields = fields;
        checklist.data_atualizacao = Date.now();
        const updatedChecklist = await checklist.save();
        if (updatedChecklist) {
            res.status(200).json(updatedChecklist);
        } else {
            res.status(404).json({ message: 'Checklist not found' });
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const deleteChecklist = async (req, res) => {
    try {
        const deletedChecklist = await Checklist.findByIdAndDelete(req.params.id);
        if (deletedChecklist) {
            res.status(200).json({ message: 'Checklist successfully deleted' });
        } else {
            res.status(404).json({ message: 'Checklist not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const countChecks = async (req, res) => {
    try {
        const count = await Checklist.countDocuments({ id_responsavel: req.params.id });
        res.status(200).json(count);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}