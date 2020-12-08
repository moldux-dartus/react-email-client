import React from 'react';
import Email from './Email'

const Home = ({ emails }) => {
    return (
      <>
      <span>INBOX</span>
        <h3>{emails[0].sender}</h3>
          <p>{emails[0].message.substring(0,100) + '...'} </p>
      </>
    )
}

export default Home