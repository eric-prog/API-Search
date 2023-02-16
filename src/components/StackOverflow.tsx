import React from 'react';
import { StackOverflowResponse } from '../models/StackOverflowResponse';
import "../styles/StackItem.css"
import None from "./None"


interface StackOverflowItemProps {
    data: StackOverflowResponse
}


function StackOverflowItem({ data }: StackOverflowItemProps) {
   
  return ( 
    <>
        {data.items.length ? data.items?.map((item, index) => (
            <div className='s-item' key={index}>
                <a target="_blank" href={item.link} className='s-link'>{item.title}</a>
                <div className='stats'>
                  <p className='s-ans'>Number of Answers: <span className='ans-count'>{item.answer_count}</span></p>
                  <p className='s-ans s-view'>View Count: <span className='ans-count'>{item.view_count}</span></p>
                  {item.accepted_answer_id && <p className='s-ans s-view accepted'>Has Accepted Answer!</p>}
                </div>
            </div>
        )): <None />}
    </>
  );
}

export default StackOverflowItem;
