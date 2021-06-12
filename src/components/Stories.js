import { useState, useEffect } from 'react'
import axios from 'axios'

// var stories=[];
function useStories(type) {
    //console.log(type);
    //const url = `https://hacker-news.firebaseio.com/v0/${type}stories.json?print=pretty`
    const [topData, setTopData] = useState([]);
    const [stories, setStories] = useState([]);
    const [err, setError] = useState(null);
    const [loading, setLoading] = useState(null)
    useEffect(() => { 
        (async () => {
            try{
                const response = await fetch(
                    `https://hacker-news.firebaseio.com/v0/${type}.json?print=pretty`
                    );
                const data = await response.json();
                setTopData(data);
            }catch (err) {
                setError(err)
            } finally {
                setLoading(false)
            }
    })(); 
    return () => {
        setLoading(true)
        setTopData([]);
    }; 
},[type]);

useEffect(() => {
    Promise.all(
        topData.slice(0,30).map((id) => {
        console.log(topData)
        return axios.get(`
        https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`
        );
    })
    ).then((result) => {
            let parsedStories = result.map((item) => {
                return item.data;
            });
            setStories(parsedStories);
        });
    },[topData]);

   return [stories];
    
}

export default useStories;
