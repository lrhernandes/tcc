import React from 'react';
import {Link} from 'react-router-dom';
import { MdClose } from "react-icons/md";

import '../../js/select';

import CadastrarClientRegister from '../../templates/CadastrarClientsForm';
import ClientRegister1 from '../../templates/ClientRegister1';

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
                            <CadastrarClientRegister form={ClientRegister1}/>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}