import React from 'react';
import './styles.css';

import dots3 from '../../assets/change1 1.png';
import curls from '../../assets/curls 1.png';
import elipse5 from '../../assets/Ellipse 6.png';
import elipse6 from '../../assets/Ellipse 6-1.png';

export default function Login() {
  return(
    <div className="center-page">

        <img id="elipse5" src={elipse5}/>
        <img id="elipse6" src={elipse6}/>
        <img id="dots3" src={dots3}/>
        <img id="curls" src={curls}/>
        <div className="camada">
        <div className="content-area-centered">
            <section>
                <div className="content-left-login">
                    
                </div>
            </section>
            <section>
                <div className="content-right-login">
                    
                </div>
            </section>
        </div>
        </div>
    </div>
  );
}

