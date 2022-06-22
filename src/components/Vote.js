import React from "react";

function Vote(){
  $(function(){
    $(".increment").click(function(){
      var count = parseInt($("~ .count", this).text());
      
      if($(this).hasClass("up")) {
        var count = count + 1;
        
         $("~ .count", this).text(count);
      } else {
        var count = count - 1;
         $("~ .count", this).text(count);     
      }
      
      $(this).parent().addClass("bump");
      
      setTimeout(function(){
        $(this).parent().removeClass("bump");    
      }, 400);
    });
  });

    return (
      <div>
          <div className="vote roundrect">
          <div className="increment up"></div>
          <div className="increment down"></div>
          <div className="count">4</div>
        </div>
          <div className="vote chev">
          <div className="increment up"></div>
          <div className="increment down"></div>
          <div className="count">0</div>
        </div>
        <div className="vote circle">
          <div className="increment up"></div>
          <div className="increment down"></div>
          <div className="count">8</div>
        </div>
      </div>
    );
}

export default Vote;