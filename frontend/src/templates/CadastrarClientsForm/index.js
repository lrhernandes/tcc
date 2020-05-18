import React from 'react';
import './styles.css'
import '../../js/select'
import {Link} from 'react-router-dom';

export default function CadastrarClientForm(){
    return (
        <div>
            <form id="form-register-scroll">
                <div id="space-scroll-div">
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
                    
                    <h4 className="space-h4">Endereço</h4>
                        <label>UF</label><br/>
                        <select id="uf"><option defaultValue >Estado</option></select>

                        <label>Cidade</label><br/>
                        <select id="cidade"> <option defaultValue >Cidade</option></select>

                        <label>Logradouro</label><br/>
                        <input id="street" placeholder="Logradouro"/>

                        <label>Nº</label><br/>
                        <input id="number" placeholder="Nº"/>

                    
                    <h4 className="space-h4">Contato</h4>
                        <label>E-mail</label><br/>
                        <input id="email" placeholder="E-mail"/>

                        <label>WhatsApp</label><br/>
                        <p className="form-sujest">Com código do país e área</p>
                        <input id="whatsapp" placeholder="Apenas números"/>

                    <h4 className="space-h4">Acesso</h4>
                        <label>Nome de usuário</label><br/>
                        <input id="user" placeholder="Usuário"/>

                        <label>Senha</label><br/>
                        <p className="form-sujest">Use no mínimo 6 caracteres</p>
                        <input id="password" placeholder="Senha"/>

                    <div className="button-group-space">
                        <Link to="/"><button className="purple">CADASTRE-SE</button></Link>
                        <Link to="/"><button className="negative-purple">CANCELAR</button></Link>
                    </div>
                </div>
            </form>
            <div className="bottom-register">
                <p className="login-link"> <Link to="/login">Já possuo cadastro</Link></p> 
            </div>
        </div>
    )
    
}

