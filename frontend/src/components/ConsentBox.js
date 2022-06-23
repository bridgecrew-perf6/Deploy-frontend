import React from 'react';
import useState from 'react';

function ConsentBox() {
    const [show, setShow] = useState(true);
    // const [box, setBox] = useState(false);

    console.log('hi')
   
    return (
      <div>
        <img src='https://imgur.com/a/Wp1ETd2' alt = 'mark made this'/>
        <ul>
            <li>Behave yourself</li>
            <li>Post must be in English</li>
            <li>NSFW guidelines</li>
            <li>No abusive or toxic behavior</li>
        </ul>
        <button>I agree</button>
      </div>
    );
  }
  
export default ConsentBox;