import React, {useState} from 'react';
import { Button } from 'semantic-ui-react'
import { useHistory } from 'react-router-dom';

function ConsentBox() {
    const [show, setShow] = useState(true);
    const history=useHistory();
    // const [box, setBox] = useState(false);

    console.log('hi')

    function handleClick(){
      history.push("/Home") 
    }
   
    return (
      <div>
        <img src='https://i.imgur.com/C8zv9Wk.png' alt = 'mark made this'/>
        <ul>
            <li>Behave yourself</li>
            <li>Post must be in English</li>
            <li>NSFW guidelines</li>
            <li>No abusive or toxic behavior</li>
        </ul>
          <Button onClick={handleClick}>
           <p>I Agree!</p>
          </Button>
      </div>
    );
  }
  
export default ConsentBox;