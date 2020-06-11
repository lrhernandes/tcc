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
                    <p className="modal-adopt-content">Utilize os botões abaixo para falar com Lara Hernandes.</p>
                    <div className="modal-adopt-contact-wrappper">
                        <div className="modal-adoption-contact">
                            <p><MdPhoneIphone className="icon-modal-adoption-contact" size={20}/>
                            WhatsApp</p>
                        </div>
                        <div className="modal-adoption-contact">
                            <p><MdMail className="icon-modal-adoption-contact" size={20}/>
                            Email</p>
                        </div>
                    </div>
                    <p id="second-title-modal" className="modal-adopt-title"><strong>Não se esqueça:</strong></p>
                    <p className="modal-adopt-subtitle">Leia os termos com atenção</p>
                    <p className="modal-adopt-content">Ao adotar um pet na plataforma GetPet você concorda com os termos de adoção responsável.</p>
                    <Link className="default-link" to="/termo" target="_blank"><div className="modal-adoption-file">
                        <p><MdInsertDriveFile className="icon-modal-adoption-contact" size={20}/>
                        Termo de Adoção</p>
                    </div></Link>
                    </div>
                <div className="modal-adopt-image-wrapper">
                </div>
            </div>
        </div>
    )
}