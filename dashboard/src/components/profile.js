import React, { useState } from 'react';
import DropdownBox from './dropdownBox';

function Profile() {
  const [open, setOpen] = useState(true)

  const toggleDropdown = () => {    
    let arrow = document.getElementById('arrowProfile')
    let item = document.getElementById('profileBox')
    item.classList.toggle('closedProfile')
    arrow.classList.toggle('arrowInherit')
  }

  return ( 
    <DropdownBox title="My profile">
      <div className="aboutProfile">
        <div className="avatar" style={{background: "url(./img/avatar.png)"}}></div>
        <div className="informations">
          <h3>João Nahid</h3>
          <span>Developer</span>
          <div className="city">
            <img src="./img/pin.png" alt="" />
            <span>Pouso Alegre, MG</span>
          </div>
        </div>
      </div>

      <div className="moreInformationsAbout">
        <div className="itemMoreInformation">
          <span>Status</span>
          <p>Trabalhando</p>
        </div>

        <div className="itemMoreInformation">
          <span>Empresa</span>
          <p>Webtagger</p>
        </div>

        <div className="itemMoreInformation">
          <span>Contratação</span>
          <p>PJ / CLT</p>
        </div>
      </div>
    </DropdownBox>
   );
}

export default Profile;