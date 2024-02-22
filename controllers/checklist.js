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

export const getChecklistById = async (req, res) => {
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
    try {
        const { id_radio, id_fazenda, id_pivo, id_cliente, id_template, id_responsavel, fields } = req.body;
        const updatedChecklist = await Checklist.findByIdAndUpdate(req.params.id, { id_radio, id_fazenda, id_pivo, id_cliente, id_template, id_responsavel, fields }, { new: true });
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