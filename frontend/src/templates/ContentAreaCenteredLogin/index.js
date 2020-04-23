import React from 'react';
import {Link} from 'react-router-dom';
import { MdClose } from "react-icons/md";
import './styles.css';

export default function ContentareaCenteredLogin(){
    return (
        <div className="content-area-centered">
            <section>
                <div className="content-left-login">
                    <p className="title-center-page"><Link to="/" className="none-visited">GetPet</Link></p>
                    <div id="camada-fix-login">
                        <div className="form-login">
                            <p>Formulário para login de client</p>
                        </div>
                        <Link className="register-button" to="/"><button className="purple">Entrar</button></Link>
                        <Link className="menu-link" to="/register"> <p>Não possuo cadastro</p> </Link>
                    </div>
                </div>
            </section>
            <section>
                <div className="content-right-login">
                    <div className="x-icon"><Link to="/"><MdClose size={20}/></Link></div>
                </div>
            </section>
        </div>
    )
}