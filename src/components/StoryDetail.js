import React, { useEffect } from 'react'
import TopStories from './TopStories';

function StoryDetail() {
    const TopData = TopStories();

    useEffect(() => {

        const fetchData = async () => {
            const response = await fetch(
                `https://hacker-news.firebaseio.com/v0/item/{TopData.json}?print=pretty`
            );
            const data = await response.json();
            console.log(data)
            //setBestData(data);
            // setStatus('fetched');
        };
    
        fetchData();
    }, []);

    return (
        <div>
            
        </div>
    )
}

export default StoryDetail
