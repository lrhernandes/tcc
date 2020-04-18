//IMPORTS
import React from 'react';
import './styles.css';
import {Link} from 'react-router-dom';
import { MdCopyright } from "react-icons/md";

import elipse1 from '../../assets/Ellipse 1.svg';
import elipse2 from '../../assets/Ellipse 2.svg';
import elipse3 from '../../assets/Ellipse 3.svg';
import elipse4 from '../../assets/Ellipse 4.svg';
import dots from '../../assets/change1 2.svg';
import cat1 from '../../assets/cat5.svg';


export default function TelaPrincipal(){
    return (
        <div className="page"> 
            <div className="content-area">
                <header>
                    <nav className="menu-horizontal">
                        <h1>GetPet</h1>
                        <div className="menu-right">
                            <Link className="menu-link" to="/about"> <h2>SOBRE</h2> </Link>
                            <Link className="menu-link" to="/register"> <h2>CADASTRE-SE</h2> </Link>
                            <Link className="menu-link" to="/login"><button className="purple">Login</button></Link>
                        </div>
                    </nav>
                    <div className="banner">
                        <h1 className="big">
                            <p>Encontre quem faltava na sua família</p>
                            <img id="elipse1" src={elipse1}/>
                            <img id="elipse2" src={elipse2}/>
                            <img id="cat1" src={cat1}/>
                        </h1>
                    </div>
                </header>

                <div className="form-content">
                    <img id="elipse3" src={elipse3}/>
                    <img id="dots" src={dots}/>
                    <div className="center-form">
                        <h1 className="title-seccion">Localize pets para adotar na sua cidade</h1>
                        <p className="subtitle-seccion">Pesquise por tipo, idade, sexo...</p>
                        <div className="fake-form">
                            <h1>Formulário de pesquisa</h1>
                        </div>
                    <button className="gray">LOCALIZAR PETS</button>
                    </div>
                </div>

                <div className="new-announcements-content">
                    <img id="elipse4" src={elipse4}/>
                    <img id="dots2" src={dots}/>
                    <div className="center-announcements">
                        <h1 className="title-seccion">Novos bichinhos no site</h1>
                        <div className="fake-announcements">
                            
                            <div className="small-announcement">
                                <div className="item">
                                    <Link className="announcement-link" to="/">
                                        <div className="picture"/>
                                        <h3 className="name">Margot</h3>
                                        <p className="description">Hamster para doação em Canoas. Fêmea de pelo castanho foi abandonada com o irmão...</p>
                                        <p className="type">Roedor</p>
                                    </Link>
                                </div>
                            </div>
                            <div className="small-announcement">
                                <div className="item">
                                    <Link className="announcement-link" to="/">
                                        <div className="picture"/>
                                        <h3 className="name">Margot</h3>
                                        <p className="description">Hamster para doação em Canoas. Fêmea de pelo castanho foi abandonada com o irmão...</p>
                                        <p className="type">Roedor</p>
                                    </Link>
                                </div>
                            </div>
                            <div className="small-announcement">
                                <div className="item">
                                    <Link className="announcement-link" to="/">
                                        <div className="picture"/>
                                        <h3 className="name">Margot</h3>
                                        <p className="description">Hamster para doação em Canoas. Fêmea de pelo castanho foi abandonada com o irmão...</p>
                                        <p className="type">Roedor</p>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>                    
                </div>

                <hr/>
                <p className="copy">
                    2020 <MdCopyright size={12}/> GetPet
                </p>
            </div>
        </div>
    );
}