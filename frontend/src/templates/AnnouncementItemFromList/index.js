import React from 'react';
import './styles.css';

import { MdFavoriteBorder } from "react-icons/md";
import {Link} from 'react-router-dom';

export default function AnnouncementItemFromList(){
    return (
        <div className="announcement-item-from-list">
            <div className="image-announcement-item-from-list">
                
            </div>
            <div className="description-announcement-item-from-list">
                <p className="description-announcement-item-from-list-name">MALIA</p>
                <p className="description-announcement-item-from-list-descript">Cachorro</p>
                <p className="description-announcement-item-from-list-descript">Fêmea</p>
                <p className="description-announcement-item-from-list-descript">Adulta</p>

                <div className="content-favorite-icon-announcement-item-from-list">
                    <Link to="/" title="Adicionar anúncio aos favoritos"><MdFavoriteBorder size={20} className="favorite-announcement-item-from-list-icon"/></Link>
                </div>
            </div>
        </div>
        
    )
}