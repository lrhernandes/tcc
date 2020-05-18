import React from 'react';
import {Link} from 'react-router-dom';
import './styles.css';

export default function LoginClientForm(){
    return (
        <div>
            <form id="form-login">
                <h2 id="h2">Entrar</h2>
                <h4 id="h4">Bem-vindo de volta</h4>
                <label>User</label><br/>
                <input id="user" placeholder="User"/> 
        
                <label>Senha</label><br/>
                <input type="password" id="password" placeholder="••••••••••"/>

                <div className="button-group-space">
                    <Link to="/"><button className="purple">ENTRAR</button></Link>
                    <Link to="/"><button className="negative-purple">CANCELAR</button></Link>
                </div>
            </form>
            <div className="bottom-register">
                <p className="login-link"> <Link to="/register">Não possuo cadastro</Link></p> 
            </div>
        </div>
    )
    
}

