import Fazenda from "../models/fazenda.js";

export const createFazenda = async (req, res) => {
    try {
        const { name, idCliente } = req.body;
        const newFazenda = new Fazenda({ name, idCliente });
        const savedFazenda = await newFazenda.save();
        res.status(201).json(savedFazenda);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const getAllFazendas = async (req, res) => {
    try {
        const fazendas = await Fazenda.find();
        res.status(200).json(fazendas);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getFazenda = async (req, res) => {
    try {
        const fazenda = await Fazenda.findById(req.params.id);
        if (fazenda) {
            res.status(200).json(fazenda);
        } else {
            res.status(404).json({ message: 'Fazenda not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const updateFazenda = async (req, res) => {
    const { id } = req.params;
    const { name, idCliente } = req.body;
    try {
        const fazenda = await Fazenda.findById(id);
        if (!fazenda) {
            return res.status(404).json({ message: 'Fazenda not found' });
        }
        if (name) fazenda.name = name;
        if (idCliente) fazenda.idCliente = idCliente;
        const updatedFazenda = await fazenda.save();
        res.status(200).json(updatedFazenda);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const deleteFazenda = async (req, res) => {
    try {
        const deletedFazenda = await Fazenda.findByIdAndDelete(req.params.id);
        if (deletedFazenda) {
            res.status(200).json({ message: 'Fazenda successfully deleted' });
        } else {
            res.status(404).json({ message: 'Fazenda not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};