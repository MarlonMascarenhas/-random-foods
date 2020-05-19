const express = require('express');

const connection = require('./database/connection');

const routes = express.Router();

routes.get('/comidas', async(request, response) => {
    const comidas = await connection('comidas').select('*')
    
    return response.json(comidas);
})

routes.post('/comidas', async (request, response) => {
    const { name, descricao, img, ingredients, video }  = request.body;
    
    var ingredientes = JSON.stringify(ingredients);
    
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