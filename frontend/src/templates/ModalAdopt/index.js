import React from 'react';
import './styles.css';
import {Link} from 'react-router-dom';
import {MdInsertDriveFile, MdMail, MdPhoneIphone} from 'react-icons/md'

export default function ModalAdopt(){
    return (
        <div className="modal-adopt">
            <div className="modal-adopt-wrapper">
                <div className="modal-adopt-content-wrapper">
                    <p className="modal-adopt-title"><strong>Quer adotar esse bichinho?</strong></p>
                    <p className="modal-adopt-subtitle">Entre em contato com o doador:</p>
                    <p className="modal-adopt-content">Utilize os botões abaixo para entrar em contato com Lara Hernandes.</p>
                    <div className="modal-adopt-contact-wrappper">
                        <div className="modal-adoption-contact">
                            <MdPhoneIphone className="icon-modal-adoption-contact" size={20}/>
                            <p>WhatsApp</p>
                        </div>
                        <div className="modal-adoption-contact">
                            <MdMail className="icon-modal-adoption-contact" size={20}/>
                            <p>E-Mail</p>
                        </div>
                    </div>

                    <p id="second-title-modal" className="modal-adopt-title"><strong>Não se esqueça:</strong></p>
                    <p className="modal-adopt-subtitle">Faça download do arquivo e o leia com atenção</p>
                    <p className="modal-adopt-content">Ao adotar um pet na plataforma GetPet você concorda com os termos de adoção responsável.</p>
                    <div className="modal-adoption-file">
                        <MdInsertDriveFile className="icon-modal-adoption-file" size={20}/>
                        <p>Termo de Adoção</p>
                    </div>
                </div>
                <div className="modal-adopt-image-wrapper">
                </div>
            </div>
        </div>
    )
}