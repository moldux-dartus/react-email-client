import React from 'react';
import Email from './Email'

const Home = ({ emails }) => {
    return (
      <>
        <h1>{emails.sender}</h1>
      </>
    )
}

export default Home