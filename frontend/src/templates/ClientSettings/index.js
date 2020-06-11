import React from 'react';
import './styles.css';

import {Link} from 'react-router-dom';
import elipse7 from '../../assets/Ellipse 7.1.svg'
import dots from '../../assets/whitedots.svg'

import ContentClientSettings from '../../templates/ContentClientSettings'

export default function ClientSettings(){
    return (
        <div className="client-settings">
            
            <img id="dots-my-announcements" src={dots}/>
            <img id="elipse7-my-announcements" src={elipse7}/>

            <div className="client-settings-content-title-content">
                <div>
                    <p className="title-default-page">MEU PERFIL</p>
                    <p className="subtitle-default-page">Meus dados cadastrados</p>
                </div>
                <div className="default-page-content-wrapper">
                    <ContentClientSettings/>
                </div>
            </div>
        </div>
    )
}