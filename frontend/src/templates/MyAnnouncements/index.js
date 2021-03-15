import React from 'react';
import './styles.css';
import {Link} from 'react-router-dom';

import ContentMyAnnouncements from '../../templates/ContentMyAnnouncementsItens'

export default function MyAnnouncements(){
    return (
        <div className="my-announcements">
            <div className="content-find-announcements">
                <p className="title-default-page">MEUS ANÚNCIOS</p>
                <p className="subtitle-default-page">Animais cadastrados para adoção</p>
                <Link to="/newannouncement"><button className="purple">NOVO ANÚNCIO</button></Link>
                <div className="content-itens-my-favourite-announcements">
                    <ContentMyAnnouncements/>
                </div>
            </div>
        </div>
    )
}