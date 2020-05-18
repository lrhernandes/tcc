import React, { useState } from 'react';
import './styles.css'
import '../../js/select'
import {Link} from 'react-router-dom';

export default function CadastrarClientForm(){
    const [step, setStep] = useState(0);
    return (
        <div>
            {step == 0 && (
                <div>
                    <form>
                        <div>
                            <h2>Cadastre-se</h2>
                            <h4 className="h4">Dados pessoais</h4>
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
                        </div>
                    </form>
                    <button className="next-button" onClick={() => setStep(step + 1) }>PRÓXIMO 🡢</button>
                    <div className="bottom-register">
                        <p className="login-link"> <Link to="/login">Já possuo cadastro</Link></p> 
                    </div>
                </div>
            )}

            {step == 1 && (
                <div id="register-step1">
                    <h4 className="h4">Endereço</h4>
                    <label>UF</label><br/>
                    <select id="uf"><option defaultValue >Estado</option></select>

                    <label>Cidade</label><br/>
                    <select id="cidade"> <option defaultValue >Cidade</option></select>

                    <div className="form-group-3">
                        <label>Logradouro</label><br/>
                        <input id="street" placeholder="Logradouro"/>
                    </div>

                    <div className="form-group-4">
                        <label>Nº</label><br/>
                        <input id="number" placeholder="Nº"/>
                    </div>
                    <button className="previous-button" onClick={() => setStep(step - 1) }>🡠VOLTAR</button>
                    <button className="next-button" onClick={() => setStep(step + 1) }>PRÓXIMO 🡢</button>
                </div>
            )}

            {step ==2 && (
                <div id="register-step2">
                    <h4 className="h4">Contato</h4>
                    <label>E-mail</label><br/>
                    <input id="email" placeholder="E-mail"/>

                    <label>WhatsApp</label><br/>
                    <p className="form-sujest">Com código do país e área</p>
                    <input id="whatsapp" placeholder="Apenas números"/>
                    <button className="previous-button" onClick={() => setStep(step - 1) }>🡠VOLTAR</button>
                    <button className="next-button" onClick={() => setStep(step + 1) }>PRÓXIMO 🡢</button>
                </div>
            )}

            {step == 3 && (
                <div id="register-step3">
                    <h4 className="h4">Acesso</h4>
                    <label>Nome de usuário</label><br/>
                    <input id="user" placeholder="Usuário"/>

                    <label>Senha</label><br/>
                    <p className="form-sujest">Use no mínimo 6 caracteres</p>
                    <input id="password" placeholder="Senha"/>
                    <div className="button-group-space">
                        <Link to="/"><button className="negative-purple">CANCELAR</button></Link>
                        <Link to="/"><button className="purple">CADASTRE-SE</button></Link>
                    </div>
                </div>
            )}

        </div>
    )
}
