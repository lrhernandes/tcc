import React, {useEffect, useState} from 'react';
import './styles.css';
import api from '../../services/api';
import Announcement from '../../templates/AnnouncementItemFromList';

export default function ContentMyFavouriteAnnouncements(){
    const [announcements, setAnnouncements] = useState([]);
    
    useEffect(()=>{
        async function fetchData() {
            const userId = localStorage.getItem('user-id');
            const resp = await api.get(`/myfavourites/${userId}`);
            setAnnouncements(resp.data);
            
        }
        fetchData();
    }, []);
    return (
        <div className="content-my-announcements-itens">
            <ul>
                {announcements.map( announce => 
                    <li key={announce.id}>
                        <Announcement ann={announce}/>
                    </li>
                )}
                
            </ul>
        </div>
    )
}