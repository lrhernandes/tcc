import React from 'react';
import './styles.css';

import ContentEditAnnouncement from '../ContentEditAnnouncement';

export default function NewAnnouncement(){
    return (
        <div className="default-wrapper">
            <div>
                <p className="title-default-page">EDITAR ANÚNCIO</p>
                <p className="subtitle-default-page">Como é o bichinho que preciso doar?</p>
                <div>
                    <ContentEditAnnouncement/>
                </div>
            </div>
        </div>
    )
}