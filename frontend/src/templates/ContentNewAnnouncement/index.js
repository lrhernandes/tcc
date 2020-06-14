import React, {useState, useEffect} from 'react';
import './styles.css';
import { MdInfo, MdFileUpload, MdClose } from "react-icons/md";

import cachorro from '../../assets/animais (2).svg';
import gato from '../../assets/gato.svg';
import reptil from '../../assets/animais (1).svg';
import hamster from '../../assets/hamster.svg';
import equino from '../../assets/cavalo.svg';
import outros from '../../assets/animais-de-estimacao.svg';
import f from '../../assets/femea.svg'
import m from '../../assets/fluido-de-genero.svg'
import u from '../../assets/simbolo-sexual.svg'
import ninho from '../../assets/ninho.svg'
import pintinho from '../../assets/pintinho.svg'
import galinha from '../../assets/galinha.svg'

export default function ContentNewAnnouncement(){
    const [step, setStep] = useState(0);
    const [items, setItems] = useState([]);
    const [itemsCpy, setItemsCpy] = useState([]);

    const handleKeyPress = (event) => {
        if(event.key === "Enter"){
            if(items.length < 9){    
                setItems([ ... items, {
                    id: items.length,
                    value: event.target.value
                }])
                event.target.value = "";
                console.log("Tamanho: " + [items.length+1])
            }
        }
    }
    function removeItem(id) {
        console.log(JSON.stringify(items))
        const _items = items;
        const index = _items.map((el) => el.id).indexOf(id);
        console.log("ID: " + index);
        if (index > -1) {
            items.splice(index, 1);
            console.log(JSON.stringify(items))
            for(let cont=0; cont<9; cont++){
                setItemsCpy([ ... itemsCpy, items[cont]])
            }
            console.log("cpy: ")
            console.log(JSON.stringify(itemsCpy))
        }
    }

    useEffect(() => {
        document.title = items.length 
    }, [items, setItems]);

    return (
        <div>    
            <div className="default-page-content-wrapper">
                <div className="form-new-announcement-item" id="form-new-announcement-item-name">
                    <label classname="form-label-new-announcement">Nome do anúncio</label>
                    <input type="text" placeholder="Ex.: Pedrinho"/>
                </div>
                <div className="form-new-announcement-item">
                    <label classname="form-label-new-announcement">Descrição do anúncio</label>
                    <p className="subtitle-seccion">Qual a história desse bichinho? quais são as suas características?</p>
                    <textarea placeholder="Ex.: Cachorro brincalhão resgatado do antigo tutor por maus tratos..."/>
                </div>
                <div className="form-new-announcement-item" id="form-new-announcement-item-type">
                    <label classname="form-label-new-announcement">Tipo</label>
                    <p className="subtitle-seccion">Que tipo de animal é esse?</p>
                    <div className="form-new-announcement-item-type-grid">
                        <div className="form-new-announcement-item-type-content-item">
                            <input type="radio" id="dog" name="animal-type"/>
                            <label id="arredondar-first-radio" className="form-new-announcement-item-type-label" for="dog"><img src={cachorro}/> <p className="label-type-form-new-announcement">CACHORRO</p></label>
                        </div>
                        <div className="form-new-announcement-item-type-content-item">
                            <input type="radio" id="cat" name="animal-type"/>
                            <label className="form-new-announcement-item-type-label" for="cat"><img src={gato}/> <p className="label-type-form-new-announcement">GATO</p></label>
                        </div>
                        <div className="form-new-announcement-item-type-content-item">
                            <input type="radio" id="reptile" name="animal-type"/>
                            <label className="form-new-announcement-item-type-label" for="reptile"><img src={reptil}/> <p className="label-type-form-new-announcement">RÉPTIL</p></label>
                        </div>
                        <div className="form-new-announcement-item-type-content-item">
                            <input type="radio" id="rodent" name="animal-type"/>
                            <label className="form-new-announcement-item-type-label" for="rodent"><img src={hamster}/> <p className="label-type-form-new-announcement">ROEDOR</p></label>
                        </div>
                        <div className="form-new-announcement-item-type-content-item">
                            <input type="radio" id="equino" name="animal-type"/>
                            <label className="form-new-announcement-item-type-label" for="equino"><img src={equino}/> <p className="label-type-form-new-announcement">EQUINO</p></label>
                        </div>
                        <div className="form-new-announcement-item-type-content-item">
                            <input type="radio" id="other" name="animal-type"/>
                            <label id="arredondar-last-radio" className="form-new-announcement-item-type-label" for="other"><img src={outros}/> <p className="label-type-form-new-announcement">OUTRO</p></label>
                        </div>
                    </div>
                </div>
                <div className="form-new-announcement-item" id="form-new-announcement-item-size">
                    <label classname="form-label-new-announcement">Porte</label>
                    <p className="subtitle-seccion">Porte de acordo com o tipo de pet selecionado</p>
                    <div className="form-new-announcement-item-size-grid">
                        <div className="form-new-announcement-item-size-content-item">
                            <input type="radio" id="mini" name="animal-size"/>
                            <label id="arredondar-first-radio" className="form-new-announcement-item-size-label" for="mini" ><p>MINI</p></label>
                        </div>
                        <div className="form-new-announcement-item-size-content-item">
                            <input type="radio" id="small" name="animal-size"/>
                            <label className="form-new-announcement-item-size-label" for="small" ><p>PEQUENO</p></label>
                        </div>
                        <div className="form-new-announcement-item-size-content-item">
                            <input type="radio" id="medium" name="animal-size"/>
                            <label className="form-new-announcement-item-size-label" for="medium"><p>MÉDIO</p></label>
                        </div>
                        <div className="form-new-announcement-item-size-content-item">
                            <input type="radio" id="big" name="animal-size"/>
                            <label className="form-new-announcement-item-size-label" for="big"><p>GRANDE</p></label>
                        </div>
                        <div className="form-new-announcement-item-size-content-item">
                            <input type="radio" id="giant" name="animal-size"/>
                            <label id="arredondar-last-radio" className="form-new-announcement-item-size-label" for="giant"><p>GIGANTE</p></label>
                        </div>
                    </div>
                </div>
                <div className="content-item-sex-age-grid">
                    <div className="form-new-announcement-item" id="form-new-announcement-item-sex">
                        <label classname="form-label-new-announcement">Sexo</label>
                        <div className="form-new-announcement-item-sex-grid">
                            <div className="form-new-announcement-item-sex-content-item">
                                <input type="radio" id="fem" name="animal-sex"/>
                                <label id="arredondar-first-radio" className="form-new-announcement-item-sex-label" for="fem"><img src={f}/> <p> FÊMEA </p></label>
                            </div>
                            <div className="form-new-announcement-item-sex-content-item">
                                <input type="radio" id="mas" name="animal-sex"/>
                                <label className="form-new-announcement-item-sex-label" for="mas"><img src={m}/> <p> MACHO </p></label>
                            </div>
                            <div className="form-new-announcement-item-sex-content-item">
                                <input type="radio" id="undefined" name="animal-sex"/>
                                <label id="arredondar-last-radio" className="form-new-announcement-item-sex-label" for="undefined"><img src={u}/> <p> INDEFINIDO </p></label>
                            </div>
                        </div>
                    </div>
                    <div className="form-new-announcement-item" id="form-new-announcement-item-age">
                        <label classname="form-label-new-announcement">Idade</label>
                        <div className="form-new-announcement-item-age-grid">
                            <div className="form-new-announcement-item-age-content-item">
                                <input type="radio" id="puppy" name="animal-age"/>
                                <label id="arredondar-first-radio" className="form-new-announcement-item-age-label" for="puppy"><img src={ninho}/><p>FILHOTE</p></label>
                            </div>
                            <div className="form-new-announcement-item-age-content-item">
                                <input type="radio" id="adult" name="animal-age"/>
                                <label className="form-new-announcement-item-age-label" for="adult"><img src={pintinho}/><p>ADULTO</p></label>
                            </div>
                            <div className="form-new-announcement-item-age-content-item">
                                <input type="radio" id="elderly" name="animal-age"/>
                                <label id="arredondar-last-radio" className="form-new-announcement-item-age-label" for="elderly"><img src={galinha}/><p>IDOSO</p></label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="form-new-announcement-item" id="form-new-announcement-item-health">
                    <label classname="form-label-new-announcement">Histórico de saúde</label>
                    <p className="subtitle-seccion">Qual o estado de saúde do pet? descreva suas necessidades especiais na descrição do anúncio</p>
                    <div className="form-new-announcement-item-health-content-item">
                        <input type="checkbox" id="castrado" name="animal-health"/>
                        <label className="form-new-announcement-item-health-label" for="castrado"><p>Castrado</p></label>
                    </div>
                    <div className="form-new-announcement-item-health-content-item">
                        <input type="checkbox" id="vacinado" name="animal-health"/>
                        <label className="form-new-announcement-item-health-label" for="vacinado"><p>Vacinado</p></label>
                    </div>
                    <div className="form-new-announcement-item-health-content-item">
                        <input type="checkbox" id="vermifugado" name="animal-health"/>
                        <label className="form-new-announcement-item-health-label" for="vermifugado"><p>Vermifugado </p></label>
                    </div>
                    <div className="form-new-announcement-item-health-content-item">
                        <input type="checkbox" id="especial" name="animal-health" onChange={()=>{setStep(step + 1)}}/>
                        <label className="form-new-announcement-item-health-label" for="especial"><p>Possui necessidades especiais <MdInfo title="Doenças como FIV, FELV, cinomose, hepatite, deficiências físicas, alergias e afins devem ser indicadas nesse campo" size={15} className="form-new-announcement-item-health-icon"/> </p></label>
                    </div>
                </div>         

                <div className="form-new-announcement-item" id="form-new-announcement-item-health">
                    <label classname="form-label-new-announcement">Temperamento</label>
                    <p className="subtitle-seccion">Como esse bichinho costuma ser?</p>

                    <div>
                        <input onKeyPress={handleKeyPress} type="text"/>
                        <ul className="list-temperament">
                            {items.map( item => 
                                <li className="list-item-temperament" key={item.id}>
                                    {item.id}{item.value} <MdClose onClick={()=> removeItem(item.id)}/>
                                </li>
                            )}
                        </ul>
                    </div>

                </div>
                
                <div className="form-new-announcement-item" id="form-new-announcement-item-address">
                    <label classname="form-label-new-announcement">Endereço</label>
                    <p className="subtitle-seccion">Onde o animal está alojado?</p>
                    <div className="form-new-announcement-item-address-grid">
                        <div>
                            <label classname="form-label-new-announcement">UF</label>
                            <select id="uf"><option defaultValue >Estado</option></select>
                        </div>
                        <div id="second-item-address-grid">
                            <label classname="form-label-new-announcement">Cidade</label>
                            <select id="cidade"> <option defaultValue >Cidade</option></select>
                        </div>
                        <div id="third-item-address-grid">
                            <label classname="form-label-new-announcement">Logradouro</label>
                            <input type="text" placeholder="Rua" id="street"/>
                        </div>
                        <div>
                            <label classname="form-label-new-announcement">Número</label>
                            <input type="number" placeholder="Nº" id="number" min="0"/>
                        </div>
                    </div>
                    <div className="form-new-announcement-item-address-grid-second">
                        
                    </div>
                </div>
                <div className="form-new-announcement-item" id="form-new-announcement-item-pictures">
                    <label classname="form-label-new-announcement">Fotos</label>
                    <p className="subtitle-seccion">Selecione até 5 fotos do seu bichinho</p>
                    <label for="input-file-animal" className="button-charge-files"> <p><MdFileUpload/> CARREGAR ARQUIVOS</p> </label>
                    <input type="file" id="input-file-animal"/>
                </div>
                <div className="content-buttons-new-announcement">
                    <button className="negative-purple">CANCELAR</button>
                    <button className="purple">CADASTRAR</button>
                </div>
            </div>
        </div>
    )
    function loadSelect(){
        setStep(0)
        return (function(uf, city, api) {
        function createOption (value, text) {
          const option = document.createElement('option')
          option.value = value
          option.innerHTML = text
          return option
        }
        function pushSelect (item, el) {
          const opt = createOption(item.geonameId, item.toponymName)
          el.append(opt)
        } 
        function handleAjax (res, el) {   
         res.geonames.forEach(each => {
           pushSelect(each, el)
         })
        } 
        function getinfo (geoid, hasUf = false) {
          fetch(`https://www.geonames.org/childrenJSON?geonameId=${geoid}`)
            .then(res => res.json())
            .then(res => {
              if(hasUf) {
                city.length = 1; //clear
                handleAjax(res, city)
              } else {
                handleAjax(res, uf)
              }
          });
        }
        function init () {
          uf.addEventListener('change', function() {
            getinfo(this.value, true)
          })
          getinfo(api)
        }
        init()
      })(
        document.getElementById('uf'),
        document.getElementById('cidade'),
        3469034
      );
    }
}

