import React, {useState, useEffect} from 'react';
import './styles.css';
import api from '../../services/api';
import { FaFilter } from "react-icons/fa";
import {Link} from 'react-router-dom';
import Announcement from '../../templates/AnnouncementItemFromList'

var data = new Date();
var day = data.getDate();
var month = data.getMonth();
var monthString = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

export default function ContentFindAnnouncement(){
    const [step, setStep] = useState(0);
    const [announcements, setAnnouncements] = useState([]);
    const [city, setCity] = useState([]);
    const [uf, setUF] = useState([]);
    
    const userId = localStorage.getItem('user-id');

    useEffect(()=>{
        function loadSelect(){
          return (function(uf, city, api) {
          function createOption (value, text) {
            const option = document.createElement('option')
            option.value = value
            option.innerHTML = text
            return option
          }
          function pushSelect (item, el) {
            const opt = createOption(item.geonameId, item.toponymName)
            el.append(opt)
          } 
          function handleAjax (res, el) {   
           res.geonames.forEach(each => {
             pushSelect(each, el)
           })
          } 
          function getinfo (geoid, hasUf = false) {
            fetch(`https://www.geonames.org/childrenJSON?geonameId=${geoid}`)
              .then(res => res.json())
              .then(res => {
                if(hasUf) {
                  city.length = 1; //clear
                  handleAjax(res, city)
                } else {
                  handleAjax(res, uf)
                }
            });
          }
          function init () {
            uf.addEventListener('change', function() {
              getinfo(this.value, true)
            })
            getinfo(api)
          }
          init()
        })(
          document.getElementById('uf'),
          document.getElementById('cidade'),
          3469034
        );
        }
        loadSelect();
      })
    
    useEffect(()=>{
        async function fetchData() {
            const user = await api.get(`/client/${userId}`)
            const userdata = user.data
            const resp = await api.get(`/availableannouncementsbyaddress/${userId}/${userdata.city}/${userdata.uf}`)
            setAnnouncements(resp.data);
        }
        fetchData();
    }, []);
        
    async function handleFindAnnouncements(){
        const resp = await api.get(`/availableannouncementsbyaddress/${userId}/${city}/${uf}`)
        setAnnouncements(resp.data);
    }
    return (
        <div className="content-right">
            <div className="content-find-announcement">
                <div className="date-title">
                    <p className="title-default-page" id="title-from-title-date">ENCONTRE SEU NOVO AMIGO</p>
                    <p className="current-day">{day} de {monthString[month]}</p>
                </div>
                <div className="home-form-locate-animals">
                    <div className="gambiarra">
                        <div className="localizar-animais-home-form">
                        <div>
                            <label>Em qual estado?</label><br/>
                            <select id="uf" onChange={e => setUF(e.nativeEvent.target[e.nativeEvent.target.selectedIndex].text)}><option defaultValue >Selecionar</option></select>
                        </div>
                        <div>
                            <label>E cidade?</label><br/>
                            <select id="cidade" onChange={e => setCity(e.nativeEvent.target[e.nativeEvent.target.selectedIndex].text)}> <option defaultValue >Selecionar</option></select>
                        </div> 
                        <div id="filtrar-button-box">
                            <button onClick={handleFindAnnouncements} className="purple">LOCALIZAR</button>
                        </div>
                        </div>
                    </div>
                </div>
                
                {step === 0 && (
                    <div className="step0-filter">
                        <div className="content-bichinhos-filtrar">
                            <p className="bichinhos-regiao">BICHINHOS NA SUA REGIÃO</p>
                            <p className="filtrar-announcements"> <Link className="content-find-announcement-filtrar" onClick={() => {setStep(1)}} > <FaFilter size={10}/> FILTRAR</Link></p>
                        </div>
                    
                    <div className="box-home-announcements-animals">
                        <ul className="home-announcements-animals">
                            {announcements.map( announce => 
                                <li key={announce.id}>
                                    <Announcement ann={announce}/>
                                </li>
                            )}
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

                            <div className="animal-options">
                                <div className="animal-types">
                                    <p className="form-subtitle">Quais bichinhos deseja encontrar?</p>
                                    <div>
                                        <div>
                                            <input type="checkbox" name="animal-types" value="cachorros" id="cachorros" />
                                            <label htmlFor="cachorros" className="exception">Cachorros</label>
                                        </div>

                                        <div>
                                            <input type="checkbox" name="animal-types" value="gatos" id="gatos" />
                                            <label htmlFor="gatos" className="exception">Gatos</label>
                                        </div>

                                        <div>
                                            <input type="checkbox" name="animal-types" value="roedores" id="roedores" />
                                            <label htmlFor="roedores" className="exception">Roedores</label>
                                        </div>

                                        <div>
                                            <input type="checkbox" name="animal-types" value="repteis" id="repteis" />
                                            <label htmlFor="repteis" className="exception">Répteis</label>
                                        </div>

                                        <div>
                                            <input type="checkbox" name="animal-types" value="outros" id="outros" />
                                            <label htmlFor="outros" className="exception">Outros</label>
                                        </div>
                                    </div>
                                </div>
                                    
                                <div className="animal-sex">
                                    <p className="form-subtitle">De qual sexo?</p>
                                    <div>
                                        <div>
                                            <input type="checkbox" name="animal-types" value="macho" id="macho" />
                                            <label htmlFor="macho" className="exception">Macho</label>
                                        </div>

                                        <div>
                                            <input type="checkbox" name="animal-types" value="femea" id="femea" />
                                            <label htmlFor="femea" className="exception">Fêmea</label>
                                        </div>

                                    </div>
                                </div>

                                <div className="animal-age">
                                    <p className="form-subtitle">Alguma preferência de idade?</p>
                                    <div>
                                        <div>
                                            <input type="checkbox" name="animal-types" value="filhote" id="filhote" />
                                            <label htmlFor="filhote" className="exception">Filhote</label>
                                        </div>

                                        <div>
                                            <input type="checkbox" name="animal-types" value="adulto" id="adulto" />
                                            <label htmlFor="adulto" className="exception">Adulto</label>
                                        </div>

                                        <div>
                                            <input type="checkbox" name="animal-types" value="idoso" id="idoso" />
                                            <label htmlFor="idoso" className="exception">Idoso</label>
                                        </div>
                                    </div>
                                </div>

                                <div className="animal-health">
                                    <p className="form-subtitle">Estado de saúde</p>
                                    <div>
                                        <div>
                                            <input type="checkbox" name="animal-types" value="castrado" id="castrado" />
                                            <label htmlFor="castrado" className="exception">Castrado</label>
                                        </div>

                                        <div>
                                            <input type="checkbox" name="animal-types" value="vacinado" id="vacinado" />
                                            <label htmlFor="vacinado" className="exception">Vacinado</label>
                                        </div>

                                        <div>
                                            <input type="checkbox" name="animal-types" value="vermifugado" id="vermifugado" />
                                            <label htmlFor="vermifugado" className="exception">Vermifugado</label>
                                        </div>

                                        <div>
                                            <input type="checkbox" name="animal-types" value="especial" id="especial" />
                                            <label htmlFor="especial" className="exception">Especial</label>
                                        </div>
                                    </div>
                                </div>

                                <div className="animal-adoption">
                                    <p className="form-subtitle">Adoção conjunta</p>
                                    <div>
                                        <div>
                                            <input type="checkbox" name="animal-types" value="individual" id="individual" />
                                            <label htmlFor="individual" className="exception">Individual</label>
                                        </div>

                                        <div>
                                            <input type="checkbox" name="animal-types" value="conjunta" id="conjunta" />
                                            <label htmlFor="conjunta" className="exception">Conjunta</label>
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

                {step === 2 && (
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