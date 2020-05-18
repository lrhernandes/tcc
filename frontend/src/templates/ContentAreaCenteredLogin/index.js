import React from 'react';
import {Link} from 'react-router-dom';
import { MdClose } from "react-icons/md";
import './styles.css';
import ClientLoginForm from '../LoginClientsForm';

export default function ContentareaCenteredLogin(){
    return (
        <div className="content-area-centered">
            <section>
                <div className="content-left-login">
                    <p className="title-center-page"><Link to="/" className="none-visited">GetPet</Link></p>
                    <div id="camada-fix-login">
                        <div className="form-login">
                            <ClientLoginForm/>
                        </div>
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