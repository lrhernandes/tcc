import React from 'react';
import './styles.css';

import {Link} from 'react-router-dom';
import ContentMyAnnouncements from '../../templates/ContentMyFavouriteAnnouncements'

import elipse7 from '../../assets/Ellipse 7.1.svg'
import dots from '../../assets/whitedots.svg'

export default function LikedAnnouncements(){
    return (
        <div className="liked-announcements">
            
            <img id="dots-my-announcements" src={dots}/>
            <img id="elipse7-my-announcements" src={elipse7}/>

            <div className="content-my-announcements">
                <p className="title-default-page">MEUS ANÚNCIOS FAVORITOS</p>
                <p className="subtitle-default-page">Os bichinhos que tenho interesse em adotar</p>
                <Link to="/termo"><button className="purple">TERMO DE ADOÇÃO</button></Link>
                <div className="content-itens-my-announcements" id="content-itens-my-favourite-announcements">
                    <ContentMyAnnouncements/>
                </div>
            </div>
        </div>
    )
}