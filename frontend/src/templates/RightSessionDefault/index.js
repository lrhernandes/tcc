import React from 'react';
import './styles.css';

export default function RightSession({content}){
    const Content = content;
    return (
        <div className="right-session">
            <Content/>
        </div>
    )
}