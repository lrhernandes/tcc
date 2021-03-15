import React from 'react';
import './styles.css';

import { IoIosFemale, IoIosMale, IoIosCalendar } from "react-icons/io";
import { MdFavoriteBorder, MdLocationOn} from "react-icons/md";
import {Link} from 'react-router-dom';

export default function AnnouncementItemFromInicio(){
    return (
        <div className="announcement__item">
            <div className="announcement__item__picture">
            </div>
            <div className="announcement___item___description">
                <div className="name-and-fav">
                    <p className="description-announcement-item-from-list-name">MALIA</p>
                    <div className="content-favorite-icon-announcement-item-from-list">
                        <Link to="/" title="Adicionar anúncio aos favoritos"><MdFavoriteBorder size={20} className="favorite-announcement-item-from-list-icon"/></Link>
                    </div>
                </div>
                <p className="description-announcement-item-from-list-descript"> <MdLocationOn size={12}/> Canoas, RS</p>
                <div className="announcement__item__description__animal__item-wrapper">
                    <p className="announcement__item__description__animal-item"> <IoIosFemale/>Fêmea</p>
                    <p className="announcement__item__description__animal-item">  <IoIosCalendar/>Adulto</p>
                </div>
            </div>
        </div>
    )
}