import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Iframe from 'react-iframe'
import api from '../services/api';

import './styles.css';


export default function HomePage() {
    const [food, setFood] = useState([]);
    const [ingredientes, setIngredientes] = useState([]);
    const [busc, setBusc] = useState(false);

    async function randomFood(){
        const response = await api.get('randomSelection');
        setBusc(true)
        setFood(response.data[0]);
        setIngredientes(JSON.parse(response.data[0].ingredientes))
        console.log(ingredientes)
    }

    return (
        <div className="container">
            <div className="box-randomFood">
                <div className="randomFood">
                    <h1>Com fome?</h1>
                    <p>Faça uma refeição aleatória clicando no botão abaixo</p>
                    <Button onClick={randomFood} variant="primary" size="lg">Pegar Refeição</Button>
                </div>
            </div>
            
            <div className="imagemFood" style = {{display: busc ? 'flex' : 'none'}} >
                <div className="imgFood">
                    <img src={food.img} alt="hello world" />
                </div>
                <div className="textFood">
                <h2>{food.name}</h2>
                    <spam>{food.descricao}</spam>
                </div>
            </div>
            

            <div className="ingredientes">
                <h3>Ingredientes</h3>
                <ul>
                    <li>Plain chocolate - 250g</li>
                    <li>Butter - 175g</li>
                    <li>Milk - 2 tablespoons</li>
                    <li>Eggs - 5</li>
                    <li>Granulated Sugar - 175g</li>
                    <li>Flour - 125g</li>
                </ul>
            </div>
            <div className="videoReceita" style = {{display: busc ? 'flex' : 'none'}}>
                <h3>Video de Receita</h3>
                <div className="videoWrapper">
                    <Iframe url="https://youtu.be/WFvj71RZYPc"
                        width="960px"
                        height="565px"
                        id="myId"
                        className="myClassname"
                        display="initial"
                        position="relative"/>
                    </div>
                </div>
        </div>
    )
}