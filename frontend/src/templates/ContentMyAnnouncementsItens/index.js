import React from 'react';
import './styles.css';

import Announcement from '../../templates/MyAnnouncementItem';

export default function ContentMyAnnouncementsItens(){
    return (
        <div className="content-my-announcements-itens">
            <ul>
                <li> <Announcement/> </li>
                <li> <Announcement/> </li>
                <li> <Announcement/> </li>
                <li> <Announcement/> </li>
                <li> <Announcement/> </li>
                <li> <Announcement/> </li>
                <li> <Announcement/> </li>
                <li> <Announcement/> </li>
                <li> <Announcement/> </li>
                <li> <Announcement/> </li>
                <li> <Announcement/> </li>
            </ul>
        </div>
    )
}