import React from 'react'
import { useParams } from 'react-router-dom'

const Email = ({ data }) => {
    
    const emailChunk = (x) => (
      <div>
        <h3>{data[x].sender}</h3>
          <p>{data[x].message.substring(0,100) + '...'} </p>
      </div>
    )
    return (
      <article>
        { emailChunk(0) }
      </article>
    )
}
export default Email