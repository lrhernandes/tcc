import React from 'react';
import './styles.css'
import api from '../../services/api';
import { MdDelete, MdLocationOn} from "react-icons/md";
import {Link, useHistory} from 'react-router-dom';
import f from '../../assets/femea.svg'
import m from '../../assets/fluido-de-genero.svg'
import u from '../../assets/simbolo-sexual.svg'
import ninho from '../../assets/ninho.svg'
import pintinho from '../../assets/pintinho.svg'
import galinha from '../../assets/galinha.svg'
import regua from '../../assets/regua.svg'

export default function MyAnnouncementItem({ann, setAnnouncements}){
    const history = useHistory();
    async function handleDelete(e){
        const response = window.confirm("Tem certeza que deseja excluir o anúncio?");
        if(response){
            try{
                const del = await api.delete(`/announcements/delete/${ann.userId}/${ann.id}`);
                setAnnouncements(state => state.filter(announcement => announcement.id !== ann.id));
            }catch(err){
                alert(err);
            }
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
                            <Link onClick={handleDelete} title="Deletar anúncio"><MdDelete size={20} className="favorite-announcement-item-from-list-icon"/></Link>
                        </div>
                    </div>
                    <p className="description-announcement-item-from-list-descript"> <MdLocationOn size={12}/> {ann.city}, {ann.uf}</p>
                    <div className="caracteristicas-announcement">
                        <div id="arredondar-first-radio">
                            {ann.sex == 'fem' && (
                                <div>
                                    <img src={f}/>
                                    <p>FÊMEA</p>
                                </div>
                            )}
                            {ann.sex == 'mas' && (
                                <div>
                                    <img src={m}/>
                                    <p>MACHO</p>
                                </div>
                            )}
                            {ann.sex == 'notDefined' && (
                                <div>
                                    <img src={u}/>
                                    <p>INDEFINIDO</p>
                                </div>
                            )}
                            
                        </div>
                        <div id="arredondar-second-radio">
                            {ann.age == 'puppy' && (
                                <div>
                                    <img src={ninho}/>
                                    <p>FILHOTE</p>
                                </div>
                            )}
                            {ann.age == 'adult' && (
                                <div>
                                    <img src={pintinho}/>
                                    <p>ADULTO</p>
                                </div>
                            )}
                            {ann.age == 'elderly' && (
                                <div>
                                    <img src={galinha}/>
                                    <p>IDOSO</p>
                                </div>
                            )}
                        </div>
                        <div id="arredondar-last-radio">
                            {ann.size == 'mini' && (
                                <div>
                                    <img src={regua}/>
                                    <p>MINI</p>
                                </div>
                            )}
                            {ann.size == 'small' && (
                                <div>
                                    <img src={regua}/>
                                    <p>PEQUENO</p>
                                </div>
                            )}
                            {ann.size == 'medium' && (
                                <div>
                                    <img src={regua}/>
                                    <p>MÉDIO</p>
                                </div>
                            )}
                            {ann.size == 'big' && (
                                <div>
                                    <img src={regua}/>
                                    <p>GRANDE</p>
                                </div>
                            )}
                            {ann.size == 'giant' && (
                                <div>
                                    <img src={regua}/>
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