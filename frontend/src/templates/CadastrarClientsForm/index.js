import React from 'react';
import './styles.css'

export default function CadastrarClientForm(){
    return (
        <form>
            <h3>Cadastre-se no GetPet</h3>
            <table>
                <tr>
                    <td >
                        <input id="firstName" placeholder="Nome"/>
                    </td>
                    <td >
                        <input id="lastName" placeholder="Sobrenome"/>
                    </td>
                </tr>
                <tr>
                    <td >
                        <input id="user" placeholder="Usuário"/>
                    </td>
                    <td>
                        <input id="rg" placeholder="RG"/>
                    </td>
                </tr>
                <tr>
                    <td>
                        <select id="uf"><option selected disabled>Estado</option></select>
                    </td>
                    <td>
                        <select id="cidade"> <option selected disabled>Cidade</option></select>
                    </td>
                </tr>
                <tr>
                    <td>
                        <input id="street" placeholder="Logradouro"/>
                    </td>
                    <td>
                        <input id="number" placeholder="Nº"/>
                    </td>
                </tr>
                <tr>
                    <td colSpan="2">
                        <input id="email" placeholder="E-mail"/>
                    </td>
                </tr>
                <tr>
                    <td>
                        <input id="born" type="date"/> 
                    </td>
                    <td>
                        <input id="whatsapp" placeholder="WhatsApp"/>
                    </td>
                </tr>
            </table>
        </form>
    )
}