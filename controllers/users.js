const { response, request } = require('express');

const getUsers = (req = request, res = response) => {
    const { q, nombre } = req.query;

    res.json({
        message: 'GET API - Controller',
        q,
        nombre
    });
}

const updateUser = (req = request, res = response) => {
    const id = req.params.id;

    res.json({
        message: 'PUT API - Controller',
        id
    });
}

const addUser = (req = request, res = response) => {
    const { nombre, edad } = req.body;

    res.status(201).json({
        message: 'POST API - Controller',
        nombre,
        edad
    });
}

const deleteUser = (req = request, res = response) => {
    res.json({
        message: 'DELETE API - Controller'
    });
}

const patchUser = (req = request, res = response) => {
    res.json({
        message: 'PATCH API - Controller'
    });
}

module.exports = {
    getUsers,
    updateUser,
    addUser,
    deleteUser,
    patchUser
}