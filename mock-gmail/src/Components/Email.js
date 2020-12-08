import React from 'react'
import { useParams } from 'react-router-dom'
import Popup from 'reactjs-popup';

const Email = ({ data }) => {
    
    const emailChunk = (x) => (
      <div>
        <h2>{data[x].subject}</h2>
            <h3>From: {data[x].sender}</h3>
            <blockquote>{
              data[x].message.substring(0,100) + '...'
              } 
            </blockquote>
            <Popup trigger={<button>Read Full Email</button>} position="right center">
              <div>
                 <h2>{data[x].subject}</h2>
                 <h3>From: {data[x].sender}</h3>
                  <blockquote>{
                     data[x].message} 
                  </blockquote>
                  <h4>{data[x].date}</h4>
              </div>
            </Popup>
      </div>
    )
    var emailArray=[]
    for (var z = 0; z < data.length; z++)
    {
        emailArray.push(emailChunk(z))
    }
    return (
      <article>
        { emailArray }
      </article>
    )
}
export default Email