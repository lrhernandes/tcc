import React from 'react';
import './styles.css';

import cat from '../../assets/cat7.svg';

import ContentNewAnnouncement from '../../templates/ContentNewAnnouncement';

export default function NewAnnouncement(){
    return (
        <div className="new-announcement">
            <div>
                <p className="title-default-page">NOVO ANÚNCIO</p>
                <p className="subtitle-default-page">Como é o bichinho que preciso doar?</p>
                <div>
                    <ContentNewAnnouncement/>
                </div>
            </div>
            <img id="background-new-announcement-cat"src={cat}/>
        </div>
    )
}