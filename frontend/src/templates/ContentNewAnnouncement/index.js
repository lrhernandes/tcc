import React, {useState, useEffect} from 'react';
import './styles.css';
import { MdInfo, MdFileUpload, MdClose } from "react-icons/md";
import {Link, useHistory} from 'react-router-dom';
import api from '../../services/api';
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
    const history = useHistory();
    const [items, setItems] = useState([]);
    const [itemsCpy, setItemsCpy] = useState([]);
    const [errorMessages, setErrorMessages] = useState([]);
    const [checked, setChecked] = useState(false);

    useEffect(() => {
        function loadSelect(){
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
            }init()})(
                document.getElementById('uf'),
                document.getElementById('cidade'),
                3469034
            );
        }
        loadSelect();
    });

    const handleKeyPress = (event) => {
        if(event.key === "Enter"){
            if(items.length < 9){    
                setItems([ ...items, {
                    id: Math.floor(Math.random()*1000+1),
                    value: event.target.value
                }])
                event.target.value = "";
                console.log("Tamanho: " + [items.length+1])
            }else{
                setErrorMessages([...errorMessages, {
                    id: Math.floor(Math.random()*1000+1),
                    message: "É possível inserir até 9 itens de temperamento do bichinho",
                    tag: "temperamento"
                }])
            }
        }
    }
    function removeItem(id) {
        console.log(JSON.stringify(items))
        const _items = items;
        const index = _items.map((el) => el.id).indexOf(id);
        if (index > -1) {
            items.splice(index, 1);
            //NÃO SEI PQ, MAS FUNCIONA
            for(let cont=0; cont<9; cont++){
                setItemsCpy([ ...itemsCpy, items[cont]])
            }
        }
        setItems(items)
    }

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [animalType, setAnimalType] = useState('');
    const [animalSize, setAnimalSize] = useState('');
    const [animalSex, setAnimalSex] = useState('');
    const [animalAge, setAnimalAge] = useState('');
    const [uf, setUF] = useState('');
    const [city, setCity] = useState('');
    const [castrated, setCastrated] = useState(false);
    const [vaccinated, setVaccinated] = useState(false);
    const [dewormed, setDewormed] = useState(false);
    const [isSpecial, setIsSpecial] = useState(false);
    const [specialDescription, setSpecialDescription] = useState('');

    async function handleAnnouncementRegister(e){
        /** PEGA OS DADOS DO STATE */
        const type = animalType;
        const size = animalSize;
        const sex = animalSex;
        const age = animalAge;
        var temperament = '';
        for (var i = 0; i < items.length; i++) {
            if(i< items.length-1){
                temperament = temperament + items[i].value + ', '
            }else{
                temperament = temperament + items[i].value + '.';
            }
            
        }
        const userId = localStorage.getItem('user-id')
        const data = { name, description, sex, age, castrated, vaccinated, dewormed, isSpecial, temperament, type, size, uf, city, specialDescription, userId};
        try{
            const response = await api.post('/announcements', data);
            if(response){
                history.push('/myannouncements');
            }
        }catch(err){
            alert(err);
        }
    }

    function handleIsSpecial(e){
        setChecked(!checked);
        setIsSpecial(e.target.checked);
    }

    return (
        <div className="content-new-announcement">    
            <div className="default-page-content-wrapper">
                <div className="form-new-announcement-item" id="form-new-announcement-item-name">
                    <label className="form-label-new-announcement">Nome do anúncio</label>
                    <input className="default-input-new-announcement" type="text" placeholder="Ex.: Pedrinho" value={name} onChange={e => setName(e.target.value)}/>
                </div>

                <div className="form-new-announcement-item">
                    <label className="form-label-new-announcement">Descrição do anúncio</label>
                    <p className="subtitle-seccion">Qual a história desse bichinho? quais são as suas características?</p>
                    <textarea placeholder="Ex.: Cachorro brincalhão resgatado do antigo tutor por maus tratos..." value={description} onChange={e => setDescription(e.target.value)}/>
                </div>

                <div className="form-new-announcement-item" id="form-new-announcement-item-type">
                    <label className="form-label-new-announcement">Tipo</label>
                    <p className="subtitle-seccion">Que tipo de animal é esse?</p>

                    <div className="form-new-announcement-item-type-grid" onChange={e => {setAnimalType(e.target.id)}}>

                        <div className="form-new-announcement-item-type-content-item">
                            <input type="radio" id="dog" name="animal-type"/>
                            <label id="arredondar-first-radio" className="form-new-announcement-item-type-label" htmlFor="dog"><img alt="icon dog" src={cachorro}/> <p className="label-type-form-new-announcement">CACHORRO</p></label>
                        </div>
                        <div className="form-new-announcement-item-type-content-item">
                            <input type="radio" id="cat" name="animal-type"/>
                            <label className="form-new-announcement-item-type-label" htmlFor="cat"><img alt="icon cat" src={gato}/> <p className="label-type-form-new-announcement">GATO</p></label>
                        </div>
                        <div className="form-new-announcement-item-type-content-item">
                            <input type="radio" id="reptile" name="animal-type"/>
                            <label className="form-new-announcement-item-type-label" htmlFor="reptile"><img alt="icon reptile" src={reptil}/> <p className="label-type-form-new-announcement">RÉPTIL</p></label>
                        </div>
                        <div className="form-new-announcement-item-type-content-item">
                            <input type="radio" id="rodent" name="animal-type"/>
                            <label className="form-new-announcement-item-type-label" htmlFor="rodent"><img alt="icon rodent" src={hamster}/> <p className="label-type-form-new-announcement">ROEDOR</p></label>
                        </div>
                        <div className="form-new-announcement-item-type-content-item">
                            <input type="radio" id="equino" name="animal-type"/>
                            <label className="form-new-announcement-item-type-label" htmlFor="equino"><img alt="icon equine" src={equino}/> <p className="label-type-form-new-announcement">EQUINO</p></label>
                        </div>
                        <div className="form-new-announcement-item-type-content-item">
                            <input type="radio" id="other" name="animal-type"/>
                            <label id="arredondar-last-radio" className="form-new-announcement-item-type-label" htmlFor="other"><img alt="icon other" src={outros}/> <p className="label-type-form-new-announcement">OUTRO</p></label>
                        </div>
                    </div>
                </div>
                <div className="form-new-announcement-item" id="form-new-announcement-item-size">
                    <label className="form-label-new-announcement">Porte</label>
                    <p className="subtitle-seccion">Porte de acordo com o tipo de pet selecionado</p>
                    <div className="form-new-announcement-item-size-grid"  onChange={e => {setAnimalSize(e.target.id)}}>
                        <div className="form-new-announcement-item-size-content-item">
                            <input type="radio" id="mini" name="animal-size"/>
                            <label id="arredondar-first-radio" className="form-new-announcement-item-size-label" htmlFor="mini" ><p>MINI</p></label>
                        </div>
                        <div className="form-new-announcement-item-size-content-item">
                            <input type="radio" id="small" name="animal-size"/>
                            <label className="form-new-announcement-item-size-label" htmlFor="small" ><p>PEQUENO</p></label>
                        </div>
                        <div className="form-new-announcement-item-size-content-item">
                            <input type="radio" id="medium" name="animal-size"/>
                            <label className="form-new-announcement-item-size-label" htmlFor="medium"><p>MÉDIO</p></label>
                        </div>
                        <div className="form-new-announcement-item-size-content-item">
                            <input type="radio" id="big" name="animal-size"/>
                            <label className="form-new-announcement-item-size-label" htmlFor="big"><p>GRANDE</p></label>
                        </div>
                        <div className="form-new-announcement-item-size-content-item">
                            <input type="radio" id="giant" name="animal-size"/>
                            <label id="arredondar-last-radio" className="form-new-announcement-item-size-label" htmlFor="giant"><p>GIGANTE</p></label>
                        </div>
                    </div>
                </div>
                <div className="content-item-sex-age-grid">
                    <div className="form-new-announcement-item" id="form-new-announcement-item-sex">
                        <label className="form-label-new-announcement">Sexo</label>
                        <div className="form-new-announcement-item-sex-grid" onChange={e => {setAnimalSex(e.target.id)}}>
                            <div className="form-new-announcement-item-sex-content-item">
                                <input type="radio" id="fem" name="animal-sex"/>
                                <label id="arredondar-first-radio" className="form-new-announcement-item-sex-label" htmlFor="fem"><img alt="icon female" src={f}/> <p> FÊMEA </p></label>
                            </div>
                            <div className="form-new-announcement-item-sex-content-item">
                                <input type="radio" id="mas" name="animal-sex"/>
                                <label className="form-new-announcement-item-sex-label" htmlFor="mas"><img alt="icon male" src={m}/> <p> MACHO </p></label>
                            </div>
                            <div className="form-new-announcement-item-sex-content-item">
                                <input type="radio" id="notDefined" name="animal-sex"/>
                                <label id="arredondar-last-radio" className="form-new-announcement-item-sex-label" htmlFor="notDefined"><img alt="icon undefined" src={u}/> <p> INDEFINIDO </p></label>
                            </div>
                        </div>
                    </div>
                    <div className="form-new-announcement-item" id="form-new-announcement-item-age">
                        <label className="form-label-new-announcement">Idade</label>
                        <div className="form-new-announcement-item-age-grid" onChange={e => {setAnimalAge(e.target.id)}}>
                            <div className="form-new-announcement-item-age-content-item">
                                <input type="radio" id="puppy" name="animal-age"/>
                                <label id="arredondar-first-radio" className="form-new-announcement-item-age-label" htmlFor="puppy"><img alt="icon puppy" src={ninho}/><p>FILHOTE</p></label>
                            </div>
                            <div className="form-new-announcement-item-age-content-item">
                                <input type="radio" id="adult" name="animal-age"/>
                                <label className="form-new-announcement-item-age-label" htmlFor="adult"><img alt="icon adult" src={pintinho}/><p>ADULTO</p></label>
                            </div>
                            <div className="form-new-announcement-item-age-content-item">
                                <input type="radio" id="elderly" name="animal-age"/>
                                <label id="arredondar-last-radio" className="form-new-announcement-item-age-label" htmlFor="elderly"><img alt="icon elderly" src={galinha}/><p>IDOSO</p></label>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="form-new-announcement-item" id="form-new-announcement-item-health">
                    <label className="form-label-new-announcement">Histórico de saúde</label>
                    <p className="subtitle-seccion">Qual o estado de saúde do pet? descreva suas necessidades especiais na descrição do anúncio</p>
                    <div className="form-new-announcement-item-health-content-item">
                        <input type="checkbox" id="castrado" name="animal-health" value={castrated} onChange={e => setCastrated(e.target.checked)} />
                        <label className="form-new-announcement-item-health-label" htmlFor="castrado"><p>Castrado</p></label>
                    </div>
                    <div className="form-new-announcement-item-health-content-item">
                        <input type="checkbox" id="vacinado" name="animal-health" value={vaccinated} onChange={e => setVaccinated(e.target.checked)} />
                        <label className="form-new-announcement-item-health-label" htmlFor="vacinado"><p>Vacinado</p></label>
                    </div>
                    <div className="form-new-announcement-item-health-content-item">
                        <input type="checkbox" id="vermifugado" name="animal-health" value={dewormed} onChange={e => setDewormed(e.target.checked)} />
                        <label className="form-new-announcement-item-health-label" htmlFor="vermifugado"><p>Vermifugado </p></label>
                    </div>
                    <div className="form-new-announcement-item-health-content-item">
                        <input type="checkbox" id="especial" name="animal-health" value={isSpecial} checked={checked} onChange={handleIsSpecial}/>
                        <label className="form-new-announcement-item-health-label" htmlFor="especial"><p>Possui necessidades especiais <MdInfo title="Doenças como FIV, FELV, cinomose, hepatite, deficiências físicas, alergias e afins devem ser indicadas nesse campo" size={15} className="form-new-announcement-item-health-icon"/> </p></label>
                    </div>
                </div>         

                
                {checked && (
                    <div>
                        <label className="form-new-announcement-description-special-label">Descreva aqui as necessidades especiais apresentadas pelo bichinho</label>
                        <textarea className="form-new-announcement-description-special-textarea" value={specialDescription} onChange={e => setSpecialDescription(e.target.value)} />
                    </div>
                )}
                {!checked && (
                    <div>
                    </div>
                )}


                <div className="form-new-announcement-item" id="form-new-announcement-item-health">
                    <label className="form-label-new-announcement">Temperamento</label>
                    <p className="subtitle-seccion">Como esse bichinho costuma ser?</p>

                    <div>
                        <input onKeyPress={handleKeyPress} className="default-input-new-announcement" type="text" placeholder="Separe com Enter as características do seu pet"/>
                        <ul className="list-temperament">
                            {items.map( item => 
                                <li className="list-item-temperament" key={item.id}>
                                    {item.value}<MdClose onClick={()=> removeItem(item.id)}/>
                                </li>
                            )}
                        </ul>
                    </div>

                </div>
                
                <div className="form-new-announcement-item" id="form-new-announcement-item-address">
                    <label className="form-label-new-announcement">Endereço</label>
                    <p className="subtitle-seccion">Onde o animal está alojado?</p>
                    <div className="form-new-announcement-item-address-grid">
                        <div>
                            <label className="form-label-new-announcement">UF</label>
                            <select id="uf" value={uf} onChange={e => setUF(e.nativeEvent.target[e.nativeEvent.target.selectedIndex].text)}><option defaultValue >Estado</option></select>
                        </div>
                        <div id="second-item-address-grid">
                            <label className="form-label-new-announcement">Cidade</label>
                            <select id="cidade" value={city} onChange={e => setCity(e.nativeEvent.target[e.nativeEvent.target.selectedIndex].text)}> <option defaultValue >Cidade</option></select>
                        </div>
                    </div>
                </div>
                <div className="form-new-announcement-item" id="form-new-announcement-item-pictures">
                    <label className="form-label-new-announcement">Fotos</label>
                    <p className="subtitle-seccion">Selecione até 5 fotos do seu bichinho</p>
                    <label htmlFor="input-file-animal" className="button-charge-files"> <p><MdFileUpload/> CARREGAR ARQUIVOS</p> </label>
                    <input type="file" id="input-file-animal"/>
                </div>
                <button className="negative-purple">CANCELAR</button>
                <button type="button" onClick={handleAnnouncementRegister} className="purple">CADASTRAR</button>
            </div>
            <div className="new-announcement-background-cat-wrapper">
                <div className="new-announcement-background-cat"/>
            </div>
        </div>
    )
}

