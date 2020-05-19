const express = require('express');

const connection = require('./database/connection');

const routes = express.Router();

routes.post('/comidas', async (request, response) => {
    const { name, descricao, img, ingredientes, video }  = request.body;
    
    console.log(ingredientes)
    await connection('comidas').insert({
        name,
        descricao,
        img,
        ingredientes,
        video
    })
    
    
    return response.json({retorno: 'connection successful'})
})


module.exports = routes;