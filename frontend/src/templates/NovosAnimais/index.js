import React from 'react';
import {Link} from 'react-router-dom';

export default function NovosAnimais(){
    return (
        <div className="center-announcements">
            <h1 className="title-seccion">Novos bichinhos no site</h1>
            <div className="fake-announcements">
                
                <div className="small-announcement">
                    <div className="item">
                        <Link className="announcement-link" to="/">
                            <div className="picture"/>
                            <h3 className="name">Margot</h3>
                            <p className="description">Hamster para doação em Canoas. Fêmea de pelo castanho foi abandonada com o irmão...</p>
                            <p className="type">Roedor</p>
                        </Link>
                    </div>
                </div>
                <div className="small-announcement">
                    <div className="item">
                        <Link className="announcement-link" to="/">
                            <div className="picture"/>
                            <h3 className="name">Margot</h3>
                            <p className="description">Hamster para doação em Canoas. Fêmea de pelo castanho foi abandonada com o irmão...</p>
                            <p className="type">Roedor</p>
                        </Link>
                    </div>
                </div>
                <div className="small-announcement">
                    <div className="item">
                        <Link className="announcement-link" to="/">
                            <div className="picture"/>
                            <h3 className="name">Margot</h3>
                            <p className="description">Hamster para doação em Canoas. Fêmea de pelo castanho foi abandonada com o irmão...</p>
                            <p className="type">Roedor</p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}