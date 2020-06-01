import React from 'react';
import './styles.css';

import Gallery from '../../templates/GalleryAnnouncement'
import ContentAnnouncement from '../../templates/ContentAnnouncement'

export default function Announcement(){
    return (
        <div className="new-announcement">
            <div>
                <p className="title-default-page">MALIA</p>
                <p className="subtitle-default-page">CANOAS/RS</p>
                <div className="announcement-sections">
                    <section>
                        <Gallery/>
                    </section>
                    <section>
                        <ContentAnnouncement/>
                    </section>
                </div>
            </div>
        </div>
    )
}