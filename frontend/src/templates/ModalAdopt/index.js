import React from 'react';
import './styles.css';
import {Link} from 'react-router-dom';
import {MdInsertDriveFile} from 'react-icons/md'

export default function ModalAdopt(){
    return (
        <div className="modal-adopt">
            <div className="modal-adopt-wrapper">
                <p className="modal-adopt-title"><strong>o doador</strong></p>
                <p>Lara Hernandes, 18</p>
                <p className="modal-adopt-title"><strong>Não se esqueça!</strong></p>
                <p>Ao adotar um pet na plataforma GetPet você <strong>concorda</strong> com os termos de adoção responsável</p>
                <div className="modal-adoption-file">
                    <MdInsertDriveFile className="icon-modal-adoption-file" size={30}/>
                    <p>Termo de Adoção</p>
                </div>
            </div>
        </div>
    )
}