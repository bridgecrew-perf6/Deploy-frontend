import React from 'react';
// import { Button } from 'semantic-ui-react'
import { useHistory } from 'react-router-dom';

function ConsentBox() {
    const history=useHistory();

    console.log('hi')

    function handleClick(){
      history.push("/Home") 
    }
   
    return (
      <div>
        <img src='https://i.imgur.com/BXnUImb_d.webp?maxwidth=760&fidelity=grand' alt = 'mark made this' className='FlatYakImg'/>
        <div class="consentBox">

        <ul className="consentList">
            <li>Behave yourself</li>
            <li>Post must be in English</li>
            <li>NSFW guidelines</li>
            <li>No abusive or toxic behavior</li>
            <li>You have 30 seconds to delete your post after creation</li>
            <li>then its here forever :P</li>
        </ul>
      <button onClick={handleClick} className='AgreeButton'>I Agree!</button>
        </div>
      </div>
    );
  }
  
export default ConsentBox;