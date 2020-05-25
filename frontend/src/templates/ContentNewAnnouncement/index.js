import React from 'react';
import './styles.css';

export default function ContentNewAnnouncement(){
    return (
        <div className="content-new-announcement">
            <form className="form-new-announcement">
                <h4>Dados do bichinho</h4>
                <label>Nome do anúncio</label>
                <input type="text" placeholder="Qual o nome do seu bichinho?"/>
                
                <label>Descrição</label>
                <textarea placeholder="Descreva seu anúncio"/>
                
                <label>Tipo</label>
                <select>
                    <option defaultValue>Que animal é esse?</option>
                    <option>Cachorro</option>
                    <option>Gato</option>
                    <option>Roedores</option>
                    <option>Répteis</option>
                    <option>Outros</option>
                </select>

                <label>Sexo</label>
                <div>
                    <input type="radio" id="macho"/>
                    <label className="exception" for="macho">Macho</label>
                </div>
                <div>
                    <input type="radio" id="femea"/>
                    <label className="exception" for="femea">Fêmea</label>
                </div>

                <label>Idade</label>
                <div>
                    <div>
                        <input type="radio" name="animal-age" value="filhote" id="filhote" />
                        <label for="filhote" className="exception">Filhote</label>
                    </div>
                    <div>
                        <input type="radio" name="animal-age" value="adulto" id="adulto" />
                        <label for="adulto" className="exception">Adulto</label>
                    </div>
                    <div>
                        <input type="radio" name="animal-age" value="idoso" id="idoso" />
                        <label for="idoso" className="exception">Idoso</label>
                    </div>
                </div>
                <label>Porte</label>
                <div>
                    <div>
                        <input type="radio" name="animal-size" value="mini" id="mini" />
                        <label for="mini" className="exception">Mini</label>
                    </div>
                    <div>
                        <input type="radio" name="animal-size" value="pequeno" id="pequeno" />
                        <label for="pequeno" className="exception">Pequeno</label>
                    </div>
                    <div>
                        <input type="radio" name="animal-size" value="medio" id="medio" />
                        <label for="medio" className="exception">Médio</label>
                    </div>
                    <div>
                        <input type="radio" name="animal-size" value="grande" id="grande" />
                        <label for="grande" className="exception">Grande</label>
                    </div>
                    <div>
                        <input type="radio" name="animal-size" value="gigante" id="gigante" />
                        <label for="gigante" className="exception">Gigante</label>
                    </div>
                    <div>
                        <input type="radio" name="animal-size" value="naovaria" id="naovaria" />
                        <label for="naovaria" className="exception">Não varia</label>
                    </div>
                </div>

                <h4>Onde o animal está alojado?</h4>
                <div>
                    <label>Estado</label><br/>
                    <select id="uf"><option defaultValue >Selecionar</option></select>
                </div>
                <div>
                    <label>Cidade</label><br/>
                    <select id="cidade"> <option defaultValue >Selecionar</option></select>
                </div>
                <label>Logradouro</label>
                <input type="text" placeholder="Nome da rua"/>
                <label>Número</label>
                <input type="number" placeholder="Nº"/>

                <h4>Fotos</h4>
                <label>Escolha até 5 fotos para fazer parte do anúncio</label>
                <input type="file"/>
            </form>
        </div>
    )
}