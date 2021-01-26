import React from 'react';
import './styles.css';
import {Link} from 'react-router-dom';
import { MdClose } from "react-icons/md";
import { MdArrowBack } from "react-icons/md";

export default function ContentAreaCenteredRedefineForm(){
    return (
        <div className="content-area-centered">
            <section>
                <div className="content-left-about">
                    <div className="sobrepor"/>
                </div>
            </section>
            <section>
                <div className="content-right-exception redefine-right">
                    <div className="x-icon"><Link to="/"><MdClose size={20}/></Link></div>
                    <div className="redefine-right-content">
                        <label>E-mail</label><br/>
                        <input type="text" id="email" placeholder="nome@email.com"/>     
                        <Link to="/"><button className="purple">RECUPERAR SENHA</button></Link>
                    </div>
                    <a href="javascript:history.back()" className="back-link"><MdArrowBack/>Voltar</a>
                </div>
            </section>
        </div>
    )
}