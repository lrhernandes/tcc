import React from 'react';
import elipse1 from '../../assets/Ellipse 1.svg';
import cat1 from '../../assets/cat5.svg';

export default function BannerPrincipal(){
    return (
        <div className="banner">
            <h1 className="big">
                <p>Encontre quem faltava na sua família</p>
                <img id="elipse1" src={elipse1}/>
                <img id="cat1" src={cat1}/>
            </h1>
        </div>
        
    )
}