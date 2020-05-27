import React from 'react';
import './styles.css';

import cachorro from '../../assets/animais (2).svg';
import gato from '../../assets/gato.svg';
import reptil from '../../assets/animais (1).svg';
import hamster from '../../assets/hamster.svg';
import outros from '../../assets/animais-de-estimacao.svg';

export default function ContentNewAnnouncement(){
    return (
        <div className="content-new-announcement">    
            <form className="form-new-announcement">
                <div className="content-form-part">
                    <h4>Dados do bichinho</h4>
                    <label>Nome do anúncio</label>
                    <p className="subtitle-seccion">Qual o nome do seu pet?</p>
                    <input type="text" placeholder="Ex.: Pedrinho"/>
                    <label>Descrição</label>
                    <p className="subtitle-seccion">Descreva seu anúncio</p>
                    <textarea placeholder="Ex.: Cachorro resgatado para adoção. Carinhoso e lida bem com outros cachorros..."/>
                    <label>Tipo</label>
                    <p className="subtitle-seccion">Qual o tipo de animal que você deseja doar?</p>
                    <div className="grid-checkbox-line-animal">
                        <div>
                            <input className="checkbox-line-animal" type="radio" name="type" id="cachorro"/>
                            <label className="radio-tipo-animal" id="first-radio-tipo-animal" for="cachorro"> <p>CACHORRO</p> <img src={cachorro}/></label>
                        </div>
                        <div>
                            <input className="checkbox-line-animal" type="radio" name="type" id="gato"/>
                            <label className="radio-tipo-animal" for="gato"> <p>GATO</p> <img src={gato}/></label>
                        </div>
                        <div>
                            <input className="checkbox-line-animal" type="radio" name="type" id="repteirs"/>
                            <label className="radio-tipo-animal" for="repteirs"> <p>RÉPTIL</p> <img src={reptil}/></label>
                        </div>
                        <div>
                            <input className="checkbox-line-animal" type="radio" name="type" id="roedores"/>
                            <label className="radio-tipo-animal" for="roedores"> <p>ROEDOR</p> <img src={hamster}/></label>
                        </div>
                        <div>
                            <input className="checkbox-line-animal" type="radio" name="type" id="outros"/>
                            <label className="radio-tipo-animal" id="last-radio-tipo-animal" for="outros"> <p>OUTRO</p> <img src={outros}/></label>
                        </div>
                    </div>
                </div>
                <div className="content-form-part">
                    <div className="divide-form-new-announcement">
                        <div className="divide-form-new-announcement-item" id="content-sex">
                            <label>Sexo</label>
                            <p className="subtitle-seccion">Selecione o sexo do animal</p>
                            <div>
                                <session>
                                    <input className="checkbox-line" type="radio" name="sex" id="macho"/>
                                    <label className="radio-padrao" id="first-radio-age-animal"  for="macho">MACHO</label>
                                </session>
                                <session>
                                    <input className="checkbox-line" type="radio" name="sex" id="femea"/>
                                    <label className="radio-padrao" id="last-radio-age-animal"  for="femea">FÊMEA</label>
                                </session>
                            </div>
                            
                        </div>
                        <div className="divide-form-new-announcement-item" id="content-age">
                            <label>Idade</label>
                            <p className="subtitle-seccion">Qual a idade dele?</p>
                            <div>
                                <session>
                                    <input className="checkbox-line" type="radio" name="age" id="filhote"/>
                                    <label className="radio-padrao" id="first-radio-age-animal" for="filhote">FILHOTE</label>
                                </session>
                                <session>
                                    <input className="checkbox-line" type="radio" name="age" id="adulto"/>
                                    <label className="radio-padrao" for="adulto">ADULTO</label>
                                </session>
                                <session>
                                    <input className="checkbox-line" type="radio" name="age" id="idoso"/>
                                    <label className="radio-padrao"  id="last-radio-age-animal" for="idoso">IDOSO</label>
                                </session>
                            </div>                            
                        </div>
                    </div>
                    <div className="content-grid-checkbox">
                        <label>Porte</label>
                        <p className="subtitle-seccion">Selecione o porte de acordo com o tipo de pet selecionado</p>
                        <div className="grid-checkbox-line-size">
                            <div>
                                <input className="checkbox-line" type="radio" name="size" id="mini"/>
                                <label className="radio-padrao" id="first-radio-age-animal" for="mini">MINI</label>
                            </div>
                            <div>
                                <input className="checkbox-line" type="radio" name="size" id="pequeno"/>
                                <label className="radio-padrao" for="pequeno">PEQUENO</label>
                            </div>
                            <div>
                                <input className="checkbox-line" type="radio" name="size" id="medio"/>
                                <label className="radio-padrao" for="medio">MÉDIO</label>
                            </div>
                            <div>
                                <input className="checkbox-line" type="radio" name="size" id="grande"/>
                                <label className="radio-padrao" for="grande">GRANDE</label>
                            </div>
                            <div>
                                <input className="checkbox-line" type="radio" name="size" id="gigante"/>
                                <label className="radio-padrao" id="last-radio-age-animal" for="gigante">GIGANTE</label>
                            </div>
                        </div>
                        
                    </div>
                    
                </div>
                <div className="content-form-part">
                    <h4>Onde o animal está alojado?</h4>
                    <div className="select-line-address">
                        <div>
                            <label>Estado</label><br/>
                            <select id="uf"><option defaultValue >Selecionar</option></select>
                        </div>
                        <div>
                            <label>Cidade</label><br/>
                            <select id="cidade"> <option defaultValue >Selecionar</option></select>
                        </div>
                    </div>
                    <div className="add-line-address">
                        <div>
                            <label>Logradouro</label>
                            <input type="text" placeholder="Nome da rua"/>
                        </div>
                        <div>
                            <label>Número</label>
                            <input type="number" placeholder="Nº"/>
                        </div>
                    </div>
                    <h4>Fotos</h4>
                    <p className="subtitle-seccion">Escolha até 5 fotos para fazer parte do anúncio</p>
                    <input type="file"/>
                </div>
            </form>
        </div>
    )
}