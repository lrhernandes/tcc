import React from 'react';
import './styles.css';

import Form from '../../templates/LocalizarAnimaisHomeForm';
import Announcement from '../../templates/AnnouncementItemFromList'

var data = new Date();
var day = data.getDate();
var month = data.getMonth();
var monthString = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

export default function ContentFindAnnouncement(){
    return (
        <div className="arrendondar-right-session">
            <div className="content-find-announcement">
                <p className="current-day">{day} de {monthString[month]}</p>
                <div className="home-form-locate-animals">
                    <Form/>
                </div>
                <p className="bichinhos-regiao">BICHINHOS NA SUA REGIÃO</p>
                <div className="box-home-announcements-animals">
                    <ul className="home-announcements-animals">
                        <li> <Announcement/> </li>
                        <li> <Announcement/> </li>
                        <li> <Announcement/> </li>
                        <li> <Announcement/> </li>
                        <li> <Announcement/> </li>
                        <li> <Announcement/> </li>
                    </ul>
                </div>
            </div>
        </div>
        
    )
}