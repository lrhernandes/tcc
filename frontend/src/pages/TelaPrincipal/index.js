//IMPORTS
import React from 'react';
import './styles.css';
import { MdCopyright } from "react-icons/md";

import elipse3 from '../../assets/Ellipse 3.svg';
import elipse4 from '../../assets/Ellipse 4.svg';
import dots from '../../assets/change1 2.svg';

import FormularioLocalizar from '../../templates/LocalizarAnimaisForm';
import NovosAnimais from '../../templates/NovosAnimais';
import BannerPrincipal from '../../templates/BannerPrincipal';
import MenuHorizontal from '../../templates/MenuHorizontal';

export default function TelaPrincipal(){
    return (
        <div className="page"> 
            <div className="content-area">

                {/* MENU HORIZONTAL E BANNER */}
                <header>
                    <MenuHorizontal/>
                    <BannerPrincipal/>
                </header>

                {/* FORMULÁRIO DE BUSCA POR ANÚNCIOS */}
                <div className="form-content">
                    <img id="elipse3" src={elipse3}/>
                    <img id="dots" src={dots}/>
                    <div className="center-form">
                        <h1 className="title-seccion">Localize pets para adotar na sua cidade</h1>
                        <p className="subtitle-seccion">Pesquise por tipo, idade, sexo...</p>
                        <FormularioLocalizar/>
                        <button className="gray">LOCALIZAR PETS</button>
                    </div>
                </div>

                {/* NOVOS ANÚNCIOS NO SITE*/}
                <div className="new-announcements-content">
                    <img id="elipse4" src={elipse4}/>
                    <img id="dots2" src={dots}/>
                    <NovosAnimais/>
                </div>

                {/* RODAPÉ */}
                <hr/>
                <p className="copy">
                    2020 <MdCopyright size={12}/> GetPet
                </p>
                
            </div>
        </div>
    );
}