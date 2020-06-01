import React from 'react';
import './styles.css'

import { MdDelete } from "react-icons/md";
import {Link} from 'react-router-dom';

export default function MyAnnouncementItem(){
    return (
        <Link to="/announcement">
            <div className="announcement-item-from-list" id="announcement-item-from-list-my-announcement">
                <div className="image-announcement-item-from-list">
                </div>
                <div className="description-announcement-item-from-list">
                    <p className="description-announcement-item-from-list-name">MALIA</p>
                    <p className="description-announcement-item-from-list-descript">Cachorro</p>
                    <p className="description-announcement-item-from-list-descript">Fêmea</p>
                    <p className="description-announcement-item-from-list-descript">Adulta</p>

                    <div className="content-favorite-icon-announcement-item-from-list">
                        <Link to="/" title="Deletar anúncio"><MdDelete size={20} className="favorite-announcement-item-from-list-icon"/></Link>
                    </div>
                </div>
            </div>
        </Link>
    )
}