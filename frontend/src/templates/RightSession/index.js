import React from 'react';
import './styles.css';

export default function RightSession({contentAnnouncement, contentMap}){
    const Content = contentAnnouncement;
    const ContentMap = contentMap
    return (
        <div className="right-session">
            <Content/>
            <ContentMap/>
        </div>
    )
}