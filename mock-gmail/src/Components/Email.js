import React from 'react'
import { useParams } from 'react-router-dom'

const Email = ({ data }) => {
    
    const emailChunk = (x) => (
      <div>
        <h2>{data[x].subject}</h2>
            <h3>From: {data[x].sender}</h3>
            <p>{data[x].message.substring(0,100) + '...'} </p>
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