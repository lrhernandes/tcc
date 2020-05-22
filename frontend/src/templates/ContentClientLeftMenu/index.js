import React from 'react';
import './styles.css';
import { MdHome, MdExitToApp, MdSettings, MdPets, MdFavorite } from "react-icons/md";
import {Link} from 'react-router-dom';

import icon from '../../assets/icon.png'

export default function ContentClientLeftMenu(){
    return (
        <div className="content-client-left-menu">
            <h3 id="icon">GP</h3>
            <ul>
                <div className="left-menu-item-group-center">
                    <li className="left-menu-item-center">
                        <div><Link to="/home"  title="Tela inicial"><MdHome size={20}/></Link></div>
                    </li>
                    <li className="left-menu-item-center">
                        <div><Link to="/myannouncements"  title="Meus anúncios"><MdPets size={20}/></Link></div>
                    </li>
                    <li className="left-menu-item-center">
                        <div><Link to="/myfavorites"  title="Anúncios favoritos"><MdFavorite size={20}/></Link></div>
                    </li>
                    <li className="left-menu-item-center">
                        <div><Link to="/settings"  title="Configurações da conta"><MdSettings size={20}/></Link></div>
                    </li>
                </div>
            </ul>
            <div id="logout"><Link to="/" title="Sair"><MdExitToApp size={20}/></Link></div>
        </div>
    )
}