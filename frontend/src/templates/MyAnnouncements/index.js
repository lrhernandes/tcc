import React from 'react';
import './styles.css';

import Announcement from '../../templates/AnnouncementItemFromList'
import ContentMyAnnouncements from '../../templates/ContentMyAnnouncementsItens'

import elipse7 from '../../assets/Ellipse 7.svg';
import dots from '../../assets/change1 2.svg'

export default function MyAnnouncements(){
    return (
        <div className="my-announcements">
            
            <img id="elipse7-my-announcements" src={elipse7}/>
            <img id="dots-my-announcements" src={dots}/>

            <div className="content-my-announcements">
                <p className="title-default-page">Meus anúncios</p>
                <p className="subtitle-default-page">Animais cadastrados para adoção</p>
                <button className="purple">NOVO ANÚNCIO</button>
                <div className="content-itens-my-announcements">
                    <ContentMyAnnouncements/>
                </div>
            </div>
        </div>
    )
}