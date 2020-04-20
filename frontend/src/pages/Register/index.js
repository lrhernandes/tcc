import React from 'react';
import './styles.css';
import {Link} from 'react-router-dom';
import { MdClose } from "react-icons/md";

import dots3 from '../../assets/change1 1.png';
import curls from '../../assets/curls 1.png';
import elipse5 from '../../assets/Ellipse 6.png';
import elipse6 from '../../assets/Ellipse 6-1.png';

export default function Register() {
    /*
  constructor() {
    super();
    this.state = {
      someKey: 'someValue'
    };
  }

  render() {
    <div className="page">

    </div>
  }*/

  return(
      <div className="center-page">

          <img id="elipse5" src={elipse5}/>
          <img id="elipse6" src={elipse6}/>
          <img id="dots3" src={dots3}/>
          <img id="curls" src={curls}/>
          <div className="camada">
            <div className="content-area-centered">
                <section>
                    <div className="content-left-register">
                        <p className="title-center-page"><Link to="/" className="none-visited">GetPet</Link></p>
                    </div>
                </section>
                <section>
                    <div className="content-right-register">
                        <div className="x-icon"><Link to="/"><MdClose size={20}/></Link></div>
                        <div className="camada-fix">
                            <div className="form-register">
                                <p>Formulário para cadastro de client</p>
                            </div>
                            <Link className="register-button" to="/"><button className="purple">Cadastre-se</button></Link>
                            <Link className="menu-link" to="/login"> <p>Já possuo cadastro</p> </Link>
                        </div>
                    </div>
                </section>
            </div>
          </div>
      </div>
  );

}

