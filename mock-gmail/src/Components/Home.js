import React from 'react';
import Email from './Email'

const Home = ({ emails }) => {
  const emails2 = emails
    return (
      <>
      <span>INBOX</span>
        <Email data={emails2}/>
      </>
    )
}

export default Home