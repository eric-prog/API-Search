import React from 'react';
import { GiphyResponse } from '../models/GIPHYResponse';
import "../styles/Giphy.css"
import None from './None';


interface GiphyItemProps {
  data: GiphyResponse
}


function GiphyItem({ data }: GiphyItemProps) {
  return (
    <div className='giphy-wrapper'>
        {data.data.length ? data.data.map((item, index) => (
            <div className='gif-container' key={index}>
                <a className='gif-link' target="_blank" href={item.url}>{item.title}</a>
                <img className='gif-img' src={item.images.original.url.split('?')[0]} alt="Image" />
            </div>
        )): <None />}
    </div>
  );
}

export default GiphyItem;
