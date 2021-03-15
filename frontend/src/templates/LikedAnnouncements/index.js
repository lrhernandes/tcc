import React from 'react';
import './styles.css';

import {Link} from 'react-router-dom';
import ContentMyAnnouncements from '../../templates/ContentMyFavouriteAnnouncements'
export default function LikedAnnouncements(){
    return (
        <div className="liked-announcements">
            <div className="content-find-announcements">
                <p className="title-default-page">MEUS ANÚNCIOS FAVORITOS</p>
                <p className="subtitle-default-page">Os bichinhos que tenho interesse em adotar</p>
                <Link to="/termo"><button className="purple">TERMO DE ADOÇÃO</button></Link>
                <div id="content-itens-my-favourite-announcements">
                    <ContentMyAnnouncements/>
                </div>
            </div>
        </div>
    )
}