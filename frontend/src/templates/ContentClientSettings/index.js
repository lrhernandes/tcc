import React from 'react';
import './styles.css';

import profilepic from '../../images/profile 2.jpg'

export default function ContentClientSettings(){
    return (
        <div className="content-client-settings">
            <div className="content-client-settings-left-wrapper">
                <img src={profilepic} className="profile-pic-client-settings"/>
                <p className="name-client-settings">Lara Cardoso Hernandes</p>
                <p className="username-client-settings">@lrhernandes</p>
            </div>
            <div className="content-client-settings-right-wrapper">
                AAAA
            </div>
        </div>
    )
}