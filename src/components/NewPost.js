import React, {useState} from "react";
import Button from 'react-bootstrap/Button';

function NewPost({change, setChange, id}) {
  const [newPost, setNewPost]=useState("")

  function handleSubmit(e){
    e.preventDefault()
    if (newPost!==""){
        fetch("http://localhost:9292/posts", {
          method:"POST",
          headers:{
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            content: newPost,
            like: 0, 
            phase_id: id,
          }),
        }).then(()=>setChange(!change));
        setNewPost("")
    } 
  }
//Make the button next to it 
  return (
    <form class="card_post" onSubmit={handleSubmit}>
      <span><input type="text" 
             class="form-control mr-3" 
             placeholder="Make a Post" 
             value={newPost}         
             onChange={(e) => setNewPost(e.target.value)} ></input>       
      <Button className="submitButton" variant="primary" type="submit" value="Submit">Post</Button></span>
  </form>
  );
}


export default NewPost; 
