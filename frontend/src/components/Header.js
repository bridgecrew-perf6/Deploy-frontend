import React from "react";

function Header(){
    return(
    <nav className="nav">
        <a href="/" className="site-title"> 
        Flat
        </a>
        {/* <ul>
            <li>
            <button onClick={() => cardsToDisplay("")} to="/All">All</button>
            </li>
            <li>
                <button onClick={() => cardsToDisplay("Arts and Culture")}>Arts and Culture</button>
            </li>
            <li>
                <button onClick={() => cardsToDisplay("Travel")}>Travel</button>
            </li>
            <li>
                <button onClick={() => cardsToDisplay("Sports")}>Sports</button>
            </li>
            <li>
                <button onClick={() => cardsToDisplay("Finance")}>Finance</button>
            </li>
        </ul> */}
    </nav>
    )
}

export default Header;