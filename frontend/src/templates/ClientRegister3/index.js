import React from 'react';
import './styles.css'
import {Link} from 'react-router-dom';
import '../../js/select'

export default function CadastrarClientForm(){
    return (
        <form>
            <h3>Cadastre-se</h3>
            <ul>
                <li>
                    <label>Nome de usuário</label><br/>
                    <p className="form-sujest">No mínimo 3 caracteres</p>
                    <input id="user" placeholder="Usuário"/>
                </li>
                <li>
                    <label>E-mail</label><br/>
                    <input id="email" placeholder="E-mail"/>
                </li>
                <li>
                    <label>WhatsApp</label><br/>
                    <input id="whatsapp" placeholder="WhatsApp"/>
                </li>
            </ul>
            <Link className="register-button" to="/"><button className="purple">CADASTRE-SE</button></Link>
        </form>
    )
}