import React, {useState} from 'react';

function NewComment({comments, change, setChange, post_id}){
    const [comment, setComment]=useState("")
    const[error, setError] = useState(false)


    function handleSubmit(e){
        e.preventDefault()
        if (comment!==""){
            fetch("http://localhost:9292/comments", {
              method:"POST",
              headers:{
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                content:comment,
                post_id: post_id,
              }),
            }).then(()=>setChange(!change));
            setComment("")
        } 
        else{
          setError(!error)
        }
      }


    
    return(
        <div class="container mt-5 mb-5">
                <div class="coment-bottom bg-white p-2 px-4">
                    <form class="d-flex flex-row add-comment-section mt-4 mb-4" onSubmit={handleSubmit}>
                        <input type="text" class="form-control mr-3" placeholder="Add comment" value={comment}         
                        onChange={(e) => setComment(e.target.value)} ></input>       
                        <input className="submitButton" type="submit" value="Submit" /></form>
                    {comments.map(comment=>
                    <div
                        class="card_comment">
                        <div class="comment-text-sm"><span>{comment.content}</span></div>
                       
            </div>)}
        </div>
    </div>

    )
}

export default NewComment;