import React from 'react'
import Stories from './Stories'

function TopStories({type}) {

  const [stories] = Stories(type)

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



