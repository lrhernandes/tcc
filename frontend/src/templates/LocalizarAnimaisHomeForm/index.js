import React from 'react';
import './styles.css';

export default function LocalizarAnimaisHomeForm (){  

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
        
    return (
      <div className="gambiarra">
        <div className="localizar-animais-home-form">
          <div>
            <label>Em qual estado?</label><br/>
            <select id="uf"><option defaultValue >Selecionar</option></select>
          </div>
          <div>
            <label>E cidade?</label><br/>
            <select id="cidade"> <option defaultValue >Selecionar</option></select>
          </div>
          <div id="filtrar-button-box">
            <button className="purple">LOCALIZAR</button>
          </div>
        </div>
        <iframe src="https://stackoverflow.com/" onLoad={()=>{loadSelect()}}/>
      </div>
    )
}