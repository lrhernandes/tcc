import React from 'react';
import './styles.css';

import { FaFilter } from "react-icons/fa";
import {Link} from 'react-router-dom';

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
                <div className="date-title">
                    <p className="title-default-page" id="title-from-title-date">ENCONTRE SEU NOVO AMIGO</p>
                    <p className="current-day">{day} de {monthString[month]}</p>
                </div>
                <div className="home-form-locate-animals">
                    <Form/>
                </div>
                <div className="content-bichinhos-filtrar">
                    <p className="bichinhos-regiao">BICHINHOS NA SUA REGIÃO</p>
                    <p className="filtrar-announcements"> <Link to=""  className="content-find-announcement-filtrar"> <FaFilter size={10}/> FILTRAR</Link></p>
                </div>
                
                <div className="box-home-announcements-animals">
                    <ul className="home-announcements-animals">
                        <li> <Announcement/> </li>
                        <li> <Announcement/> </li>
                        <li> <Announcement/> </li>
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