import React from 'react';
import Button from 'react-bootstrap/Button';

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
                    <p>Category: Pasta</p>
                    <p>Area: Italian</p>
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
        </div>
    )
}