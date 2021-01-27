import React, { useEffect, useState, useCallback } from 'react';
import './styles.css'
import {Link} from 'react-router-dom';
import api from '../../services/api';

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

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [uf, setUF] = useState('');
    const [city, setCity] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [password, setPassword] = useState('');

    async function handleRegister(e){
        e.preventDefault();
        const active = true;
        const data = {firstName, lastName, password, email, uf, city, whatsapp, active};
        try{
            const response = await api.post('/client', data);
            alert(`Seu token: ${response.data}`)
        }catch(err){
            alert(err);
        }
    }
    return (
            <div className="cadastrar-client-form">
                <form onSubmit={handleRegister}>
                    <h2>Cadastre-se</h2>
                    <label>Nome</label><br/>
                    <input type="text" id="firstName" placeholder="Nome" value={firstName} onChange={e => setFirstName(e.target.value)}/> 
            
                    <label>Sobrenome</label><br/>
                    <input type="text" id="lastName" placeholder="Sobrenome" value={lastName} onChange={e => setLastName(e.target.value)}/>
                        
                    <label>E-mail</label><br/>
                    <input type="text"id="email" placeholder="E-mail" value={email} onChange={e => setEmail(e.target.value)}/>

                    <label>WhatsApp</label><br/>
                    <p className="form-sujest">Com código do país e área</p>
                    <input type="number" id="whatsapp" placeholder="Apenas números" value={whatsapp} onChange={e => setWhatsapp(e.target.value)}/>
                    
                    <label>UF</label><br/>
                    <select id="uf" value={uf} onChange={e => setUF(e.target.value)}><option defaultValue >Estado</option></select>

                    <label>Cidade</label><br/>
                    <select id="cidade" value={city} onChange={e => setCity(e.target.value)}> <option defaultValue >Cidade</option></select>

                    <label>Senha</label><br/>
                    <p className="form-sujest">Use no mínimo 6 caracteres</p>
                    <input  type="text" id="password" placeholder="Senha" value={password} onChange={e => setPassword(e.target.value)}/>

                    <div className="button-group-space">
                        <Link to="/"><button className="negative-purple">CANCELAR</button></Link>
                        <button className="purple" type="submit">CADASTRE-SE</button>
                    </div>
                </form>
            </div>
    )
}