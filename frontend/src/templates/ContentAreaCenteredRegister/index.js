import React from 'react';
import {Link} from 'react-router-dom';
import { MdClose } from "react-icons/md";

import '../../js/select';

import CadastrarClientRegister from '../../templates/CadastrarClientsForm';

export default function ContentareaCenteredRegister(){
    return (
        <div className="content-area-centered">
            <section>
                <div className="content-left-register">
                    <p className="title-center-page"><Link to="/" className="none-visited">GetPet</Link></p>
                </div>
            </section>
            <section>
                <div className="content-right-register">
                    <div className="x-icon"><Link to="/"><MdClose size={20}/></Link></div>
                    <div className="camada-fix">
                        <div className="form-register">
                            <CadastrarClientRegister/>
                        </div>
                        <Link className="register-button" to="/"><button className="purple">CADASTRE-SE</button></Link>
                        <Link className="menu-link" to="/login"> <p>Já possuo cadastro</p> </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}