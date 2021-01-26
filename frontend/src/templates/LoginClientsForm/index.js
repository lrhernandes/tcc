import React from 'react';
import {Link} from 'react-router-dom';
import './styles.css';

export default function LoginClientForm(){
    return (
        <div classname="login-clients-form">
            <form id="form-login">
                <div>
                    <h2 id="h2">Entrar</h2>
                    <h4 className="h4">Bem-vindo de volta</h4>
                </div>
                <div>
                    <label>E-mail</label><br/>
                    <input type="text" id="email" placeholder="nome@email.com"/> 
                    <label>Senha</label><br/>
                    <input type="password" id="password" placeholder="••••••••••"/>
                </div>
                <div className="button-group-space">
                    <Link className="menu-link" to="/home"><button className="purple">ENTRAR</button></Link>
                </div>
            </form>
            <div className="bottom-register">
                <p className="register-link"> <Link to="/redefine-password">Esqueci minha senha</Link></p>
                <p className="register-link"> <Link to="/register">Ainda não tenho cadastro</Link></p> 
            </div>
        </div>
    )
    
}

