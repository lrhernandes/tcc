import React, {useEffect} from 'react';
import './styles.css';

export default function LocalizarAnimaisForm (){
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
        <div className="inicial__form">
            <div className="inicial__form__select-group">
                <div className="inicial__form__select-item">
                    <label>Seu estado vai aqui</label><br/>
                    <select id="uf"><option defaultValue >Selecionar</option></select>
                </div>
                <div className="inicial__form__select-item">
                    <label>E a cidade aqui :)</label><br/>
                    <select id="cidade"> <option defaultValue >Selecionar</option></select>
                </div>
            </div>  
            <div id="inicial__form__button">
                <button className="purple">LOCALIZAR PETS</button>
            </div>
        </div>
    )
}