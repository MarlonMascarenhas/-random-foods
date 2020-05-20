import React from 'react';
import Button from 'react-bootstrap/Button';

import './styles.css';

export default function HomePage() {
    function randomFood(){
        console.log('hello world');
    }

    return (
        <div className="box-randomFood">
            <div className="randomFood">
                <h1>Com fome?</h1>
                <p>Faça uma refeição aleatória clicando no botão abaixo</p>
                <Button onClick={randomFood} variant="primary" size="lg">Pegar Refeição</Button>
            </div>
        </div>
        
    )
}