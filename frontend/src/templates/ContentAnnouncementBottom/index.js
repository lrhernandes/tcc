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

import cat from '../../assets/cat6.svg'

export default function ContentAnnouncementBottom(){
    return (
        <div className="content-announcement-bottom">
            <div className="historico-saude-announcement-section">
                <p className="title-announcement-sections">Histórico de saúde</p>
                <div className="saude-announcement-section">
                    <div className="content-list-saude-announcement-section">
                        <p className="checked-list-item-announcement-section"><div/><p>CASTRADO</p></p>
                        <p className="checked-list-item-announcement-section"><div/><p>VACINADO</p></p>
                        <p className="checked-list-item-announcement-section"><div/><p>VERMIFUGADO</p></p>
                    </div>
                    <div className="content-description-saude-section">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In facilisis justo augue, ut semper ex dignissim et. Vestibulum et libero nec libero dapibus ultricies et sed est. Nam egestas tortor in nulla cursus, eu semper lectus gravida. Maecenas a tempor turpis. Integer blandit ex sed facilisis ornare. Fusce velit justo, mattis nec auctor at, vulputate sed enim.</p>    
                    </div>
                </div>
            </div>
            <div className="temperamento-announcement-section">
                <div className="temperamento-announcement-section-left">
                    <p className="title-announcement-sections">Temperamento do bichinho</p>
                    <div className="content-list-temperamento-announcement-section">
                        <p className="checked-list-item-announcement-section"><div/><p>CARINHOSO</p></p>
                        <p className="checked-list-item-announcement-section"><div/><p>CALMO</p></p>
                        <p className="checked-list-item-announcement-section"><div/><p>PROTETOR</p></p>
                        <p className="checked-list-item-announcement-section"><div/><p>CARINHOSO</p></p>
                        <p className="checked-list-item-announcement-section"><div/><p>CALMO</p></p>
                        <p className="checked-list-item-announcement-section"><div/><p>PROTETOR</p></p>
                        <p className="checked-list-item-announcement-section"><div/><p>CARINHOSO</p></p>
                        <p className="checked-list-item-announcement-section"><div/><p>CALMO</p></p>
                        <p className="checked-list-item-announcement-section"><div/><p>PROTETOR</p></p>
                    </div>
                    <div className="content-description-saude-section">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In facilisis justo augue, ut semper ex dignissim et. Vestibulum et libero nec libero dapibus ultricies et sed est. Nam egestas tortor in nulla cursus, eu semper lectus gravida. Maecenas a tempor turpis. Integer blandit ex sed facilisis ornare. Fusce velit justo, mattis nec auctor at, vulputate sed enim.</p>    
                    </div>
                </div>
            </div>
        </div>
    )
}