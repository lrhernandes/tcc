//IMPORTS
import React from 'react';
import './styles.css';
import { MdCopyright } from "react-icons/md";

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
                    <div className="center-form">
                        <h1 className="title-seccion">Localize pets para adotar na sua cidade</h1>
                        <p className="subtitle-seccion">Pesquise por tipo, idade, sexo...</p>
                        <FormularioLocalizar/>
                        <button className="gray">LOCALIZAR PETS</button>
                    </div>
                </div>

                {/* NOVOS ANÚNCIOS NO SITE*/}
                <div className="new-announcements-content">
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