import React from 'react';


function DropdownBox(props) {

  const toggleDropdown = () => {
    let arrow = document.getElementById('arrowProfile'+props.id)
    let item = document.getElementById('dropdownBox'+props.id)
    item.classList.toggle('closedProfile')
    arrow.classList.toggle('arrowInherit')
  }

  return ( 
    <div id={'dropdownBox'+props.id}>
      <div className="headerDropdownBox">
        <p>{props.title}</p>
        <div className="toggleDropdownBox" onClick={() => toggleDropdown()}>
          <img  id={'arrowProfile'+props.id} class="arrowDropdownBox" src="./img/next.png" alt="" />
        </div>
      </div>
      <div className="contentDropdownBox">

        {props.children}

      </div>
    </div>
   );
}

export default DropdownBox;