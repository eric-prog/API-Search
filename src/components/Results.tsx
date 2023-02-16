import React, { useState, useEffect, useCallback } from 'react';
import { StackOverflowResponse } from '../models/StackOverflowResponse';
import { GiphyResponse } from '../models/GIPHYResponse';
import { WikiObj, WikipediaResponse } from '../models/WikipediaResponse';
import StackOverflowItem from './StackOverflow';
import GiphyItem from './Giphy';
import WikiItem from './Wikipedia';
import "../styles/Results.css"


type ResultsType = {
    query: string,
    source: string,
}

class Wiki implements WikipediaResponse {
    type = 2;
    title = "";
    data: WikiObj[] = [];
}


function Results({ query, source }: ResultsType) {
    const [data, setData] = useState<(StackOverflowResponse | GiphyResponse | WikipediaResponse)>()

    const getResults = useCallback(async () => {
        let responseData: StackOverflowResponse | GiphyResponse | WikipediaResponse; 

        if (source === 'StackOverflow') { // I could use switch case statement but if statement accomplishes the same thing
            const response = await fetch(`https://api.stackexchange.com/2.3/search?order=desc&sort=activity&intitle=${query}&site=stackoverflow`);
            responseData = await response.json() as StackOverflowResponse
            responseData.type = 0
        } else if (source === 'GIPHY') {
            const API_KEY = "MiGjC9xij7QTMRmKyuzBTerTYb9DnMuu"
            const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${query}`)
            responseData = await response.json() as GiphyResponse
            responseData.type = 1
        } else { 
            const response = await fetch(`https://en.wikipedia.org/w/api.php?origin=*&action=opensearch&search=${query}&limit=10&namespace=0&format=json`);
            responseData = new Wiki()
            const getData = await response.json()
            for (let i = 0; i < getData[1].length; i++) {
                const tempObj = {title: getData[1][i], link: getData[3][i]}
                responseData?.data.push(tempObj)
            }
        } 

        setData(responseData)
    }, [query, source])


    useEffect(() => {
        if (query !== '') getResults();
    }, [query, source])


    return (
        <div className='results'>
            {data?.type === 0 && <StackOverflowItem data={data as StackOverflowResponse}/> }
            {data?.type === 1 && <GiphyItem data={data as GiphyResponse}/> }
            {data?.type === 2 && <WikiItem data={data as WikipediaResponse} /> }
        </div>
    );
}
  
export default Results;