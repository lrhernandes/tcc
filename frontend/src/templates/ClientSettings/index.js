import React from 'react';
import './styles.css';

import elipse7 from '../../assets/Ellipse 7.1.svg'
import dots from '../../assets/whitedots.svg'

export default function ClientSettings(){
    return (
        <div className="client-settings">
            
            <img id="dots-my-announcements" src={dots}/>
            <img id="elipse7-my-announcements" src={elipse7}/>

            <div>
                <p className="title-default-page">Meu perfil</p>
                <p className="subtitle-default-page">Meus dados cadastrados</p>
            </div>
        </div>
    )
}