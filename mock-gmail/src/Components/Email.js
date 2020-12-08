import React from 'react'
import { useParams } from 'react-router-dom'

const Email = ({ emails }) => {
    return (
        <li>
        <h2>{emails.sender}</h2>
      </li>
    )
}
export default Email