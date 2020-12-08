import React from 'react';
import Email from './Email'
import Popup from 'reactjs-popup';

const Home = ({ emails }) => {
  const emails2 = emails
    return (
      <>
      <span>INBOX</span>
        <Email data={emails2}/>
        <div />
        <div />
        <Popup trigger={<button>Draft New Email</button>} position="right bottom">
              <div>
                <label for="subject">Subject</label>
                <input id='subject'></input>
                <div />
                <label for="recipient">Recipient</label>
                <input id='recipient'></input>
                <div />
                <label for="mb">Message Body</label>
                <div />
                <textarea id="mb" rows="4" cols="50"></textarea>
                <div />
                <button>Send</button>
              </div>
            </Popup>
      </>
    )
}

export default Home