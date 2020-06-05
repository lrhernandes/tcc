import React from 'react';
import './styles.css';

import Gallery from '../../templates/GalleryAnnouncement'
import ContentAnnouncement from '../../templates/ContentAnnouncement'
import ContentAnnouncementBottom from '../../templates/ContentAnnouncementBottom'

export default function Announcement(){
    return (
        <div className="new-announcement">
            <div>
                <div className="announcement-sections">
                    <p className="title-default-page">MALIA</p>
                    <p className="subtitle-default-page">CANOAS/RS</p>
                    <div className="announcement-sections-height">
                        <div className="announcement-sections-grid">
                            <section className="section-gallery-announcement-sections">
                                <Gallery/>
                            </section>
                            <section className="section-content1-announcement-sections">
                                <ContentAnnouncement/>
                            </section>
                        </div>
                        <section className="section-content2-announcement-sections">
                            <ContentAnnouncementBottom/>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    )
}