import React from 'react';
import {Link} from 'react-router-dom';
import Item from '../AnnouncementItemFromInicio'

export default function NovosAnimais(){
    return (
        <div className="center-announcements">
            <h1 className="title-seccion">Novos por aqui</h1>
            <p className="subtitle-seccion">Alguns pets que achamos que você vai curtir!</p>
            <div className="fake-announcements">
                <div className="small-announcement">
                    <div className="item">
                        <Link className="announcement-link" to="/">
                            <Item/>
                        </Link>
                    </div>
                    <div className="item">
                        <Link className="announcement-link" to="/">
                            <Item/>
                        </Link>
                    </div>
                    <div className="item">
                        <Link className="announcement-link" to="/">
                            <Item/>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}