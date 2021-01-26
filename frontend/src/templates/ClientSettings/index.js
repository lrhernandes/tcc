import React from 'react';
import './styles.css';

import ContentClientSettings from '../../templates/ContentClientSettings'

export default function ClientSettings(){
    return (
        <div className="client-settings">
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