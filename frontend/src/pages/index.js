import React from 'react';
import Button from 'react-bootstrap/Button';
import Iframe from 'react-iframe'

import './styles.css';
import imgTemp from './assets/imgTemp.jpg';

export default function HomePage() {
    function randomFood(){
        console.log('hello world');
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
            
            <div className="imagemFood">
                <div className="imgFood">
                    <img src={imgTemp} alt="hello world" /> 
                    <p><b>Category:</b> Pasta</p>
                    <p><b>Area:</b> Italian</p>
                </div>
                <div className="textFood">
                    <h2>Pilchard puttanesca</h2>
                    <spam>Cook the pasta following pack instructions. Heat the oil in a non-stick frying pan and cook the onion, 
                        garlic and chilli for 3-4 mins to soften. Stir in the tomato purée and cook for 1 min, then add the pilchards with their sauce. 
                        Cook, breaking up the fish with a wooden spoon, then add the olives and continue to cook for a few more mins. Drain the pasta and 
                        add to the pan with 2-3 tbsp of the cooking water.
                        Toss everything together well, then divide between plates and serve, scattered with Parmesan.
                    </spam>
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
            <div className="videoReceita">
                <h3>Video de Receita</h3>
                <div className="videoWrapper">
                    <Iframe url="http://www.youtube.com/embed/xDMP3i36naA"
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