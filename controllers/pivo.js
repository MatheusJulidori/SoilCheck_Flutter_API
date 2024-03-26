import Pivo from "../models/pivo.js";

export const createPivo = async (req, res) => {
    try {
        const { name, idFazenda } = req.body;
        const newPivo = new Pivo({ name, idFazenda });
        const savedPivo = await newPivo.save();
        res.status(201).json(savedPivo);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const getAllPivos = async (req, res) => {
    try {
        const pivos = await Pivo.find();
        res.status(200).json(pivos);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getPivo = async (req, res) => {
    try {
        const pivo = await Pivo.findById(req.params.id);
        if (pivo) {
            res.status(200).json(pivo);
        } else {
            res.status(404).json({ message: 'Pivo not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const updatePivo = async (req, res) => {
    const { id } = req.params;
    const { name, idFazenda } = req.body;
    try {
        const pivo = await Pivo.findById(id);
        if (!pivo) {
            return res.status(404).json({ message: 'Pivo not found' });
        }
        if (name) pivo.name = name;
        if (idFazenda) pivo.idFazenda = idFazenda;
        const updatedPivo = await pivo.save();
        res.status(200).json(updatedPivo);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const deletePivo = async (req, res) => {
    try {
        const deletedPivo = await Pivo.findByIdAndDelete(req.params.id);
        if (deletedPivo) {
            res.status(200).json({ message: 'Pivo successfully deleted' });
        } else {
            res.status(404).json({ message: 'Pivo not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};