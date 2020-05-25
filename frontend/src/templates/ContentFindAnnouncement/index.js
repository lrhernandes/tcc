import React, {useState} from 'react';
import './styles.css';

import { FaFilter } from "react-icons/fa";
import {Link} from 'react-router-dom';

import Form from '../../templates/LocalizarAnimaisHomeForm';
import Announcement from '../../templates/AnnouncementItemFromList'

var data = new Date();
var day = data.getDate();
var month = data.getMonth();
var monthString = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

export default function ContentFindAnnouncement(){
    const [step, setStep] = useState(0);
        
    return (
        <div className="arrendondar-right-session">
            <div className="content-find-announcement">
                <div className="date-title">
                    <p className="title-default-page" id="title-from-title-date">ENCONTRE SEU NOVO AMIGO</p>
                    <p className="current-day">{day} de {monthString[month]}</p>
                </div>
                <div className="home-form-locate-animals">
                    <Form/>
                </div>
                
                {step === 0 && (
                    <div className="step0-filter">
                        <div className="content-bichinhos-filtrar">
                            <p className="bichinhos-regiao">BICHINHOS NA SUA REGIÃO</p>
                            <p className="filtrar-announcements"> <Link className="content-find-announcement-filtrar" onClick={() => {setStep(1)}} > <FaFilter size={10}/> FILTRAR</Link></p>
                        </div>
                    
                    <div className="box-home-announcements-animals">
                        <ul className="home-announcements-animals">
                            <li> <Announcement/> </li>
                            <li> <Announcement/> </li>
                            <li> <Announcement/> </li>
                            <li> <Announcement/> </li>
                            <li> <Announcement/> </li>
                            <li> <Announcement/> </li>
                            <li> <Announcement/> </li>
                            <li> <Announcement/> </li>
                            <li> <Announcement/> </li>
                        </ul>
                    </div>
                    </div>
                )}

                {step === 1 && (
                    <div className="step1-filter">
                        <div className="content-bichinhos-filtrar">
                            <p className="bichinhos-regiao">BICHINHOS NA SUA REGIÃO</p>
                            <p className="filtrar-announcements"> <Link className="content-find-announcement-filtrar" onClick={() => {setStep(0)}} > <FaFilter size={10}/> FILTRAR</Link></p>
                        </div>
                        <form>
                            <div>
                                <label>Nome do anúncio</label>
                                <input type="text" placeholder="Você está procurando um anúncio específico?"/>  
                            </div>

                            <div className="animal-options">
                                <div className="animal-types">
                                    <p className="form-subtitle">Quais bichinhos deseja encontrar?</p>
                                    <div>
                                        <div>
                                            <input type="checkbox" name="animal-types" value="cachorros" id="cachorros" />
                                            <label for="cachorros" className="exception">Cachorros</label>
                                        </div>

                                        <div>
                                            <input type="checkbox" name="animal-types" value="gatos" id="gatos" />
                                            <label for="gatos" className="exception">Gatos</label>
                                        </div>

                                        <div>
                                            <input type="checkbox" name="animal-types" value="roedores" id="roedores" />
                                            <label for="roedores" className="exception">Roedores</label>
                                        </div>

                                        <div>
                                            <input type="checkbox" name="animal-types" value="repteis" id="repteis" />
                                            <label for="repteis" className="exception">Répteis</label>
                                        </div>

                                        <div>
                                            <input type="checkbox" name="animal-types" value="outros" id="outros" />
                                            <label for="outros" className="exception">Outros</label>
                                        </div>
                                    </div>
                                </div>
                                    
                                <div className="animal-sex">
                                    <p className="form-subtitle">De qual sexo?</p>
                                    <div>
                                        <div>
                                            <input type="checkbox" name="animal-types" value="macho" id="macho" />
                                            <label for="macho" className="exception">Macho</label>
                                        </div>

                                        <div>
                                            <input type="checkbox" name="animal-types" value="femea" id="femea" />
                                            <label for="femea" className="exception">Fêmea</label>
                                        </div>

                                    </div>
                                </div>

                                <div className="animal-age">
                                    <p className="form-subtitle">Alguma preferência de idade?</p>
                                    <div>
                                        <div>
                                            <input type="checkbox" name="animal-types" value="filhote" id="filhote" />
                                            <label for="filhote" className="exception">Filhote</label>
                                        </div>

                                        <div>
                                            <input type="checkbox" name="animal-types" value="adulto" id="adulto" />
                                            <label for="adulto" className="exception">Adulto</label>
                                        </div>

                                        <div>
                                            <input type="checkbox" name="animal-types" value="idoso" id="idoso" />
                                            <label for="idoso" className="exception">Idoso</label>
                                        </div>
                                    </div>
                                </div>

                                <div className="animal-health">
                                    <p className="form-subtitle">Estado de saúde</p>
                                    <div>
                                        <div>
                                            <input type="checkbox" name="animal-types" value="castrado" id="castrado" />
                                            <label for="castrado" className="exception">Castrado</label>
                                        </div>

                                        <div>
                                            <input type="checkbox" name="animal-types" value="vacinado" id="vacinado" />
                                            <label for="vacinado" className="exception">Vacinado</label>
                                        </div>

                                        <div>
                                            <input type="checkbox" name="animal-types" value="vermifugado" id="vermifugado" />
                                            <label for="vermifugado" className="exception">Vermifugado</label>
                                        </div>

                                        <div>
                                            <input type="checkbox" name="animal-types" value="especial" id="especial" />
                                            <label for="especial" className="exception">Especial</label>
                                        </div>
                                    </div>
                                </div>

                                <div className="animal-adoption">
                                    <p className="form-subtitle">Adoção conjunta</p>
                                    <div>
                                        <div>
                                            <input type="checkbox" name="animal-types" value="individual" id="individual" />
                                            <label for="individual" className="exception">Individual</label>
                                        </div>

                                        <div>
                                            <input type="checkbox" name="animal-types" value="conjunta" id="conjunta" />
                                            <label for="conjunta" className="exception">Conjunta</label>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            
                            <div className="button-group-filter">
                                <button className="negative-purple" onClick={()=>{setStep(0)}}>CANCELAR</button>
                                <button className="purple" onClick={()=>{setStep(0)}}>APLICAR FILTROS</button>
                            </div>
                        </form>
                    </div>
                )}

                {step ==2 && (
                    <div className="box-home-announcements-animals">
                        <ul className="home-announcements-animals">
                            <li> <Announcement/> </li>
                            <li> <Announcement/> </li>
                            <li> <Announcement/> </li>
                            <li> <Announcement/> </li>
                            <li> <Announcement/> </li>
                            <li> <Announcement/> </li>
                            <li> <Announcement/> </li>
                            <li> <Announcement/> </li>
                            <li> <Announcement/> </li>
                        </ul>
                    </div>
                )}
            </div>
        </div>
        
    )
}