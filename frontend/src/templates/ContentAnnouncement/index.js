import React from 'react';
import './styles.css';

import cachorro from '../../assets/animais (2).svg';
import gato from '../../assets/gato.svg';
import reptil from '../../assets/animais (1).svg';
import hamster from '../../assets/hamster.svg';
import equino from '../../assets/cavalo.svg';
import outros from '../../assets/animais-de-estimacao.svg';

import f from '../../assets/femea.svg'
import m from '../../assets/fluido-de-genero.svg'
import u from '../../assets/simbolo-sexual.svg'

import ninho from '../../assets/ninho.svg'
import pintinho from '../../assets/pintinho.svg'
import galinha from '../../assets/galinha.svg'

import regua from '../../assets/regua.svg'

export default function ContentAnnouncement(){
    return (
        <div className="content-announcement">
                <div className="content-announcement-sections">
                    <p className="current-day">INSERIDO EM 01/06/2020 POR @LRHERNANDES</p>
                    <p className="title-announcement-sections" id="first-title-announcement-section">Que bichinho é esse?</p>
                    <p className="description-announcement-section">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In facilisis justo augue, ut semper ex dignissim et. Vestibulum et libero nec libero dapibus ultricies et sed est. Nam egestas tortor in nulla cursus, eu semper lectus gravida. Maecenas a tempor turpis. Integer blandit ex sed facilisis ornare. Fusce velit justo, mattis nec auctor at, vulputate sed enim. Donec ullamcorper semper nibh, ut varius urna euismod a. Duis cursus ultrices blandit. In pretium hendrerit nisl nec molestie. Nulla imperdiet dictum orci et tempus.</p>
                    <p className="title-announcement-sections">Quais são suas características?</p>
                    <div className="caracteristicas-announcement-section">
                        <div id="arredondar-first-radio">
                            <img src={hamster}/>
                            <p>ROEDOR</p>
                        </div>
                        <div id="arredondar-second-radio">
                            <img src={f}/>
                            <p>FÊMEA</p>
                        </div>
                        <div id="arredondar-third-radio">
                            <img src={pintinho}/>
                            <p>ADULTO</p>
                        </div>
                        <div id="arredondar-last-radio">
                            <img src={regua}/>
                            <p>MÉDIO</p>
                        </div>
                    </div>
                    
                    <div className="temperamento-announcement-sections">
                        <p className="title-announcement-sections">Temperamento do bichinho</p>
                        <div className="content-list-saude-announcement-section">
                            <p className="checked-list-item-announcement-section"><div/><p>CARINHOSO</p></p>
                            <p className="checked-list-item-announcement-section"><div/><p>CALMO</p></p>
                            <p className="checked-list-item-announcement-section"><div/><p>PROTETOR</p></p>
                        </div>
                    </div>
                </div>
        </div>
    )
}