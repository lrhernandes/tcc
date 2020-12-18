import React from 'react';
import './styles.css'

import { MdDelete, MdLocationOn} from "react-icons/md";
import {Link} from 'react-router-dom';
import f from '../../assets/femea.svg'
import m from '../../assets/fluido-de-genero.svg'
import u from '../../assets/simbolo-sexual.svg'
import ninho from '../../assets/ninho.svg'
import pintinho from '../../assets/pintinho.svg'
import galinha from '../../assets/galinha.svg'
import regua from '../../assets/regua.svg'

export default function MyAnnouncementItem(){
    return (
        <Link to="/announcement">
            <div className="announcement-item-from-list">
                <div className="image-announcement-item-from-list">
                </div>
                <div className="description-announcement-item-from-list">
                    <div className="name-and-fav">
                        <p className="description-announcement-item-from-list-name">MALIA</p>
                        <div className="content-favorite-icon-announcement-item-from-list">
                            <Link to="/" title="Deletar anúncio"><MdDelete size={20} className="favorite-announcement-item-from-list-icon"/></Link>
                        </div>
                    </div>
                    <p className="description-announcement-item-from-list-descript"> <MdLocationOn size={12}/> Canoas, RS</p>
                    <div className="caracteristicas-announcement">
                        <div id="arredondar-first-radio">
                            <img src={f}/>
                            <p>FÊMEA</p>
                        </div>
                        <div id="arredondar-second-radio">
                            <img src={pintinho}/>
                            <p>ADULTO</p>
                        </div>
                        <div id="arredondar-last-radio">
                            <img src={regua}/>
                            <p>MÉDIO</p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </Link>
    )
}