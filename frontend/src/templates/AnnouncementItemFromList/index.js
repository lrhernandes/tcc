import React from 'react';
import './styles.css';

import { MdFavoriteBorder, MdFavorite, MdLocationOn} from "react-icons/md";
import {Link, useHistory} from 'react-router-dom';
import api from '../../services/api';

import f from '../../assets/femea.svg'
import m from '../../assets/fluido-de-genero.svg'
import u from '../../assets/simbolo-sexual.svg'
import ninho from '../../assets/ninho.svg'
import pintinho from '../../assets/pintinho.svg'
import galinha from '../../assets/galinha.svg'
import regua from '../../assets/regua.svg'
import { useEffect } from 'react';
import { useState } from 'react';

export default function AnnouncementItemFromList({ann}){
    const history = useHistory();
    const user = localStorage.getItem('user-id');
    const [isFavorite, setIsFavorite] = useState(false)

    useEffect(()=>{
        async function handleAllFavorites(){
            const fav = await api.get(`/allfavourites/${user}`)
            for(var i=0; i<fav.data.length; i++){
                if(fav.data[i].announcementId === ann.id){
                    setIsFavorite(true)
                }
            }
        }
        handleAllFavorites();
    })

    async function handleFavorite(e){
        try{
            const fav = await api.post(`/addfavourite/${ann.id}/${user}/`);
        }catch(err){
            alert(err);
        }
    }

    async function handleRemoveFavorite(e){
        try{
            const fav = await api.post(`/addfavourite/${ann.id}/${user}/`);
        }catch(err){
            alert(err);
        }
    }
    function handleOpenAnnouncement(e){
        history.push(`/announcement/${ann.id}`);
    }
    return (
        <Link onClick={handleOpenAnnouncement}>
            <div className="announcement-item-from-list">
                <div className="image-announcement-item-from-list">
                </div>
                <div className="description-announcement-item-from-list">
                    <div className="name-and-fav">
                        <p className="description-announcement-item-from-list-name">{ann.name}</p>
                        <div className="content-favorite-icon-announcement-item-from-list">
                            {isFavorite &&  (
                                <Link onClick={handleFavorite}> <MdFavorite size={20} className="favorite-announcement-item-from-list-icon"/></Link>    
                            )}
                            {!isFavorite &&  (
                                <Link onClick={handleRemoveFavorite}> <MdFavoriteBorder size={20} className="favorite-announcement-item-from-list-icon"/></Link>    
                            )}
                            
                        </div>
                    </div>
                    <p className="description-announcement-item-from-list-descript"> <MdLocationOn size={12}/> {ann.city}, {ann.uf}</p>
                    <div className="caracteristicas-announcement">
                        <div id="arredondar-first-radio">
                            {ann.sex === 'fem' && (
                                <div>
                                    <img alt="img announcement item" src={f}/>
                                    <p>FÊMEA</p>
                                </div>
                            )}
                            {ann.sex === 'mas' && (
                                <div>
                                    <img alt="img announcement item" src={m}/>
                                    <p>MACHO</p>
                                </div>
                            )}
                            {ann.sex === 'notDefined' && (
                                <div>
                                    <img alt="img announcement item" src={u}/>
                                    <p>INDEFINIDO</p>
                                </div>
                            )}
                            
                        </div>
                        <div id="arredondar-second-radio">
                            {ann.age === 'puppy' && (
                                <div>
                                    <img alt="img announcement item" src={ninho}/>
                                    <p>FILHOTE</p>
                                </div>
                            )}
                            {ann.age === 'adult' && (
                                <div>
                                    <img alt="img announcement item" src={pintinho}/>
                                    <p>ADULTO</p>
                                </div>
                            )}
                            {ann.age === 'elderly' && (
                                <div>
                                    <img alt="img announcement item" src={galinha}/>
                                    <p>IDOSO</p>
                                </div>
                            )}
                        </div>
                        <div id="arredondar-last-radio">
                            {ann.size === 'mini' && (
                                <div>
                                    <img alt="img announcement item" src={regua}/>
                                    <p>MINI</p>
                                </div>
                            )}
                            {ann.size === 'small' && (
                                <div>
                                    <img alt="img announcement item" src={regua}/>
                                    <p>PEQUENO</p>
                                </div>
                            )}
                            {ann.size === 'medium' && (
                                <div>
                                    <img alt="img announcement item" src={regua}/>
                                    <p>MÉDIO</p>
                                </div>
                            )}
                            {ann.size === 'big' && (
                                <div>
                                    <img alt="img announcement item" src={regua}/>
                                    <p>GRANDE</p>
                                </div>
                            )}
                            {ann.size === 'giant' && (
                                <div>
                                    <img alt="img announcement item" src={regua}/>
                                    <p>GIGANTE</p>
                                </div>
                            )}
                        </div>
                    </div>
                    
                </div>
            </div>
        </Link>
    )
}