import Cliente from "../models/cliente.js";

export const createCliente = async (req, res) => {
    try {
        const { name } = req.body;
        const newCliente = new Cliente({ name });
        const savedCliente = await newCliente.save();
        res.status(201).json(savedCliente);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const getAllClientes = async (req, res) => {
    try {
        const clientes = await Cliente.find();
        res.status(200).json(clientes);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getCliente = async (req, res) => {
    try {
        const cliente = await Cliente.findById(req.params.id);
        if (cliente) {
            res.status(200).json(cliente);
        } else {
            res.status(404).json({ message: 'Cliente not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const updateCliente = async (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    try {
        const cliente = await Cliente.findById(id);
        if (!cliente) {
            return res.status(404).json({ message: 'Cliente not found' });
        }
        if (name) cliente.name = name;
        const updatedCliente = await cliente.save();
        res.status(200).json(updatedCliente);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const deleteCliente = async (req, res) => {
    try {
        const deletedCliente = await Cliente.findByIdAndDelete(req.params.id);
        if (deletedCliente) {
            res.status(200).json({ message: 'Cliente successfully deleted' });
        } else {
            res.status(404).json({ message: 'Cliente not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};