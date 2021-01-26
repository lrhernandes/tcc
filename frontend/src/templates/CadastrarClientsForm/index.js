import React, { useEffect } from 'react';
import './styles.css'
import {Link} from 'react-router-dom';

export default function CadastrarClientForm(){
    useEffect(() => {
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
          }init()})(
              document.getElementById('uf'),
              document.getElementById('cidade'),
              3469034
          );
      }
      loadSelect();
    });
    return (
        <div className="cadastrar-client-form">
          <h2>Cadastre-se</h2>
          <label>Nome</label><br/>
          <input type="text" id="firstName" placeholder="Nome"/> 
  
          <label>Sobrenome</label><br/>
          <input type="text" id="lastName" placeholder="Sobrenome"/>
              
          <label>E-mail</label><br/>
          <input type="text"id="email" placeholder="E-mail"/>

          <label>WhatsApp</label><br/>
          <p className="form-sujest">Com código do país e área</p>
          <input type="number" id="whatsapp" placeholder="Apenas números"/>

          <label>UF</label><br/>
          <select id="uf"><option defaultValue >Estado</option></select>

          <label>Cidade</label><br/>
          <select id="cidade"> <option defaultValue >Cidade</option></select>

          <label>Senha</label><br/>
          <p className="form-sujest">Use no mínimo 6 caracteres</p>
          <input  type="text" id="password" placeholder="Senha"/>
          <div className="button-group-space">
              <Link to="/"><button className="negative-purple">CANCELAR</button></Link>
              <Link to="/"><button className="purple">CADASTRE-SE</button></Link>
          </div>
        </div>
    )
}