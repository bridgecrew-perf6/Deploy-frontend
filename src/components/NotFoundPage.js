import React from 'react';
import { useHistory } from 'react-router-dom';

function  NotFoundPage (){
    const history=useHistory();
    function handleClick(){
        history.push("/Phase1", {state: {id: 1}}) 
    }
    return(
        <div>
            <img src="https://learn.getgrav.org/user/pages/11.troubleshooting/01.page-not-found/error-404.png" alt="NotFoundPage" />


            <button onClick={handleClick} className='AgreeButton'>Go Home</button>
        
        </div>
    )
}
export default NotFoundPage;