import React from 'react';
import { WikipediaResponse } from '../models/WikipediaResponse';
import "../styles/Wiki.css"
import None from './None';


interface WikiItemProps {
    data: WikipediaResponse
}


function WikiItem({ data }: WikiItemProps) {
  return (
    <div className='wiki-container'>
        {data.data.length ? data.data.map((item, index) => (
            <a key={index} className='wiki-item' target="_blank" href={item.link}>{item.title}</a>
        )): <None />}
    </div>
  );
}

export default WikiItem;
