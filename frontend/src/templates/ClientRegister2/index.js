import React from 'react';
import {Link} from 'react-router-dom';
import '../../js/select'
import { MdSkipNext } from "react-icons/md";

export default function CadastrarClientForm(){
    return (
        <form>
            <h3>Cadastre-se</h3>
            <ul>
                <li>
                    <label>UF</label><br/>
                    <select id="uf"><option defaultValue >Estado</option></select>
                </li>
                <li>
                    <label>Cidade</label><br/>
                    <select id="cidade"> <option defaultValue >Cidade</option></select>
                </li>
                <li>
                    <label>Logradouro</label><br/>
                    <input id="street" placeholder="Logradouro"/>
                </li>
                <li>
                    <label>Nº</label><br/>
                    <input id="number" placeholder="Nº"/>
                </li>
            </ul>
            <div className="x-icon"><Link to="/"><MdSkipNext size={20}/></Link></div>
        </form>
    )
}