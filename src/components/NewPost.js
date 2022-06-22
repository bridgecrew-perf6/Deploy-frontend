import React, {useState} from "react";

function NewPost({onAddPost}) {

  const [content, setContent]=useState('')

  
  function handleSubmit(){
    const newPostForm = {
      content,
    }
    fetch("http://localhost:9292/posts",{
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newPostForm),
    })
    .then((r) => r.json())
    .then(onAddPost)
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input 
      className="content" 
      placeholder="Write post" 
      onChange={(e)=>setContent(e.target.value)}/>
      <input 
      className="submit"
      type="submit" 
      value="Submit Post" />
    </form>
  );
}


export default NewPost; 
