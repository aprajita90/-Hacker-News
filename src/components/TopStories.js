import React, { useState, useEffect } from 'react'
import axios from 'axios'

var stories = []

function TopStories() {
    const url = `https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty`
    const [topData, setTopData] = useState([]);

    useEffect(() => { 
        (async () => {
        const response = await fetch(url);
        const data = await response.json();
        setTopData(data);
    })();
    
}, [url, stories]);

const storyDetail = Promise.all(topData.slice(0,30).map((id) => {
    return axios.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`)
        .then(response => {
            console.log('fetch news', response.data)
            return {
                success:true,
                data:response.data
            }
        })
        .catch(error => {
            return{
                success:false
            }
        })
})).then(
    result => {
        stories = result.map((item) => {
            return (
                item.data
            )
        })
        console.log(stories)
    }
)  
    return (
        <div>
            <ul style={{color:"gray"}}>
            {  stories.map((item) => {
                    return (
                        <li className="m-1" key={item.id}>
                            <a href = {item.url} style={{color:"gray"}}>{item.title}</a>
                        </li>
                    )
                })
            }
            </ul>
        </div>
    )
}

export default TopStories



