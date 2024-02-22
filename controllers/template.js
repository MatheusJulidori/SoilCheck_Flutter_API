import Template from "../models/template.js";

export const createTemplate = async (req, res) => {
    try {
        const { name, fields } = req.body;
        const newTemplate = new Template({ name, fields });
        const savedTemplate = await newTemplate.save();
        res.status(201).json(savedTemplate);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const getAllTemplates = async (req, res) => {
    try {
        const templates = await Template.find();
        res.status(200).json(templates);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getTemplate = async (req, res) => {
    try {
        const template = await Template.findById(req.params.id);
        if (template) {
            res.status(200).json(template);
        } else {
            res.status(404).json({ message: 'Template not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const updateTemplate = async (req, res) => {
    const { id } = req.params;
    const { name, fields } = req.body;
    try {
        const template = await Template.findById(id);
        if (!template) {
            return res.status(404).json({ message: 'Template not found' });
        }
        if (name) template.name = name;
        if (fields) template.fields = fields;
        const updatedTemplate = await template.save();
        res.status(200).json(updatedTemplate);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const deleteTemplate = async (req, res) => {
    try {
        const deletedTemplate = await Template.findByIdAndDelete(req.params.id);
        if (deletedTemplate) {
            res.status(200).json({ message: 'Template successfully deleted' });
        } else {
            res.status(404).json({ message: 'Template not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};