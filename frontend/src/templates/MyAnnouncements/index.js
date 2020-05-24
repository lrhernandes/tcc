import React from 'react';
import './styles.css';

import ContentMyAnnouncements from '../../templates/ContentMyAnnouncementsItens'

import elipse7 from '../../assets/Ellipse 7.1.svg'
import dots from '../../assets/whitedots.svg'

export default function MyAnnouncements(){
    return (
        <div className="my-announcements">
            
            <img id="dots-my-announcements" src={dots}/>
            <img id="elipse7-my-announcements" src={elipse7}/>

            <div className="content-my-announcements">
                <p className="title-default-page">MEUS ANÚNCIOS</p>
                <p className="subtitle-default-page">Animais cadastrados para adoção</p>
                <button className="purple">NOVO ANÚNCIO</button>
                <div className="content-itens-my-announcements">
                    <ContentMyAnnouncements/>
                </div>
            </div>
        </div>
    )
}