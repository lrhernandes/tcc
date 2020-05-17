import React from 'react';
import {Link} from 'react-router-dom';
import '../../js/select'
import ReactDOM, { render } from "react-dom";

export default function ClientRegister1(){
    return (
        
        <div>
            <form>
                <h2>Cadastre-se</h2>
                <h4>Dados pessoais</h4>
                    <label>Nome</label><br/>
                    <input id="firstName" placeholder="Nome"/> 
    
                    <label>Sobrenome</label><br/>
                    <input id="lastName" placeholder="Sobrenome"/>

                    <div className="form-group-1">
                        <label>RG</label><br/>
                        <input id="rg" placeholder="Apenas números"/>
                    </div>
    
                    <div className="form-group-2">
                        <label>Data de nascimento</label><br/>
                        <input id="born" type="date"/>
                    </div>
            </form>
            <div className="bottom-register">
                <button className="next-icon">
                    <Link to="/">PRÓXIMO 🡢</Link>
                </button>
                <p className="login-link"> <Link to="/login">Já possuo cadastro</Link></p> 
            </div>
        </div>
    )
    
}

