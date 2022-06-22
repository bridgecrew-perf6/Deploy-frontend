import * as React from 'react';
import useState from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

function ConsentBox() {
    const [show, setShow] = useState(true);
    // const [box, setBox] = useState(false);
   
    return (
      <>
        <Alert show={show} variant="success">
          <Alert.Heading>How's it going?!</Alert.Heading>
          <p>
            Rules of Conduct
          </p>
          <ul>
            <li>Behave yourself</li>
            <li>Post must be in English</li>
            <li>NSFW guidelines</li>
            <li>No abusive or toxic behavior</li>
          </ul>
          <hr />
          <div className="d-flex justify-content-end">
            <Button onClick={() => setShow(false)} variant="outline-success">
              Close me y'all!
            </Button>
          </div>
        </Alert>
  
        {!show && <Button onClick={() => setShow(true)}>Show Alert</Button>}
      </>
    );
  }
  
export default ConsentBox;