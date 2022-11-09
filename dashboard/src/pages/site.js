import React from "react";

function Site() {

  const toggleDropdown = () => {    
    let arrow = document.getElementById('arrowProfile')
    let item = document.getElementById('siteSections')
    item.classList.toggle('closedProfile')
    arrow.classList.toggle('arrowInherit')
  }

  return (
    <div id="siteContent">
      <div className="headerSite">
        <ul className="menuPaginasSite">
          <li>
            Home
          </li>
          <li>
            About
          </li>

          <li>
            Team
          </li>

          <li>
            Contact
          </li>
        </ul>
      </div>

      <div id="siteSections">
        <div className="headerSiteSections">
          <p>My profile</p>
          <div className="toggleDropdown" onClick={() => toggleDropdown()}>
            <img id="arrowProfile" src="./img/next.png" alt="" />
          </div>
        </div>

        <div className="contentSiteSections">
          <div className="inputField">
            <p>Text</p>
            <input type="text" placeholder="example" />
          </div>

          <div className="inputField">
            <p>Text</p>
            <input type="text" placeholder="example" />
          </div>
        </div>

      </div>
    </div>
  );
}

export default Site;
