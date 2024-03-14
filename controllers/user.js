import User from "../models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createUser = async (req, res) => {
    const { username, name, password, isAdmin } = req.body;
    const encryptedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
        username,
        name,
        password: encryptedPassword,
        isAdmin,
        isActive: true
    });
    try {
        await newUser.save();
        res.status(201).json(newUser);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const getUser = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await User.findById(id);
        if (!user) return res.status(404).json({ message: 'User not found' });
        res.status(200).json(user);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const updateUser = async (req, res) => {
    const { id } = req.params;
    const { username, name, password, isAdmin, isActive } = req.body;
    try {
        const user = await User.findById(id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        if (username) user.username = username;
        if (name) user.name = name;
        if (password) {
            const encryptedPassword = await bcrypt.hash(password, 10);
            user.password = encryptedPassword;
        }
        if (isAdmin != undefined) user.isAdmin = isAdmin;
        if (isActive != undefined) user.isActive = isActive;
        const updatedUser = await user.save();
        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export const deleteUser = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await User.findByIdAndDelete(id);
        if (!user) return res.status(404).json({ message: "User not found" });
        res.status(200).json("User has been deleted");
    } catch (e) {
        res.status(404).json({ message: e.message });
    }
};

export const loginUser = async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await User.findOne({ username: username });
        if (!user) throw new Error('User not found');
        if (!user.isActive) throw new Error('User is not active')

        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) throw new Error('Invalid password');
        const token = jwt.sign({ _id: user._id , isAdmin: user.isAdmin}, process.env.TOKEN_SECRET);
        res.status(200).json({ token });
    } catch (err) {
        console.log(err.message);
        res.status(401).json({ message: err.message })
    }
}

export const changePassword = async (req,res) => {
    const { id } = req.params;
    const { oldPassword, newPassword } = req.body;
    try {
        const user = await User.findById(id);
        if (!user) throw new Error('User not found');
        const validPassword = await bcrypt.compare(oldPassword, user.password);
        if (!validPassword) throw new Error('Invalid password');
        const encryptedPassword = await bcrypt.hash(newPassword, 10);
        user.password = encryptedPassword;
        const updatedUser = await user.save();
        res.status(200).json(updatedUser);
    } catch (err) {
        res.status(401).json({ message: err.message });
    }
}