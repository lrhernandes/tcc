import React, {useState} from 'react';
import './styles.css';
import {MdPerson} from 'react-icons/md'

export default function ContentClientSettings(){
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
    const [step, setStep] = useState(0);
    const [step2, setStep2] = useState(0);
    return (
        <div className="content-client-settings">
            <div className="content-client-settings-left-wrapper" onMouseEnter={()=>{setStep2(1)}} onMouseLeave={()=>{setStep2(0)}}>
                {step2 == 0 && ( <div></div>)}
                {step2 == 1 && (
                    <div className="change-profile-pic-box" type="image">
                        <label for="change-profile-pic-label" title="Trocar foto de perfil"/>
                        <input type="file" id="change-profile-pic-label"/>
                    </div>
                )}
            </div>
            {step === 0 && (
                <div className="content-client-settings-right-wrapper">
                    <p className="name-client-settings">Lara Cardoso Hernandes</p>
                    <p className="username-client-settings">@lrhernandes</p>
                    <div onClick={()=>{setStep(1)}} className="profile-edit">Editar perfil</div>

                    <p className="title-announcement-sections">Endereço</p>
                    <p className="description-announcement-section">Rua Padre Anchieta, 591</p>
                    <p className="description-announcement-section">CANOAS / RIO GRANDE DO SUL</p>

                    <p className="title-announcement-sections">Contato</p>
                    <p className="description-announcement-section">Whatsapp: 51992194825</p>
                    <p className="description-announcement-section">Email: larachernandes@gmail.com</p>

                    <p className="title-announcement-sections">DADOS PESSOAIS</p>
                    <p className="description-announcement-section">RG: 6128581251</p>
                    <p className="description-announcement-section">Data de nascimento: 16/10/2001</p>
                </div>
            )}
            
            {step == 1 && (
                <div className="content-client-settings-right-wrapper">
                    <div className="gambiarra">
                        <iframe src="https://stackoverflow.com/" onLoad={()=>{loadSelect()}}/>
                    </div>
                    <div className="edit-client-settings-form">
                        <p className="name-client-settings">Lara Cardoso Hernandes</p>
                        <p className="username-client-settings">@lrhernandes</p>

                        <p className="modal-adopt-subtitle">Endereço</p>
                        <div className="modal-client-settings-address-wrapper">
                            <div className="modal-client-settings-address-uf">
                                <label className="form-label-new-announcement">UF</label>
                                <select id="uf"><option defaultValue >Estado</option></select>
                            </div>
                            <div className="modal-client-settings-address-city">
                                <label classname="form-label-new-announcement">Cidade</label>
                                <select id="cidade"> <option defaultValue >Cidade</option></select>
                            </div>
                            <div className="modal-client-settings-address-street">
                                <label classname="form-label-new-announcement">Logradouro</label>
                                <input type="text" placeholder="Rua" id="street"/>
                            </div>
                            <div className="modal-client-settings-address-number">
                                <label classname="form-label-new-announcement">Número</label>
                                <input type="number" placeholder="Nº" id="number" min="0"/>
                            </div>
                        </div>

                        <p className="modal-adopt-subtitle">Contato</p>
                        <div className="modal-client-settings-contact-whatsapp">
                            <label classname="form-label-new-announcement">WhatsApp</label>
                            <input type="number" id="whatsapp" placeholder="51992184825"/>
                        </div>
                        <div className="modal-client-settings-contact-email">
                            <label classname="form-label-new-announcement">E-mail</label>
                            <input type="text" id="mail" placeholder="larachernandes@gmail.com"/>
                        </div>

                        <p className="modal-adopt-subtitle">Trocar senha</p>
                        <div className="modal-client-settings-my-password">
                            <label>Senha atual</label>
                            <input type="password" id="my-password" placeholder="••••••••••"/>
                        </div>
                        <div className="modal-client-settings-new-password">
                            <label>Nova senha</label>
                            <input type="password" id="new-password" placeholder="••••••••••"/>
                        </div>
                        <div className="content-buttons-client-settings">
                            <button className="negative-purple" onClick={()=>{setStep(0)}}>DESCARTAR</button>
                            <button className="purple">SALVAR</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}