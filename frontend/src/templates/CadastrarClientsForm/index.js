import React from 'react';
import './styles.css'
import '../../js/select'
import ClientRegister1 from '../../templates/ClientRegister1';

export default function CadastrarClientForm({form}){
    const Form = form;
    return (
        //<Form/>
        <div id="form-register-switcher">
            <ClientRegister1></ClientRegister1>
        </div>
    )
}