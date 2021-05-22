import { useState, useEffect } from 'react'
import axios from 'axios'

var stories=[];
function Stories(Link) {
    const url = `https://hacker-news.firebaseio.com/v0/${Link}stories.json?print=pretty`
    const [topData, setTopData] = useState([]);
    const [err, setError] = useState(null);
    const [loading, setLoading] = useState(null)
    useEffect(() => { 
        (async () => {
            try{
                const response = await fetch(url);
                const data = await response.json();
                setTopData(data);
            }catch (err) {
                setError(err)
            } finally {
                setLoading(false)
            }
    })();   
},[]);

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
   return [url, stories]
    
}

export default Stories
