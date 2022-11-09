import React from "react";
import LinkHeader from "./linkHeader";
import SearcBar from "./searchBar";

function Header() {
  return (
    <div className="header">
      <div className="row">
        <div className="col-md-8">
          <SearcBar placeholder="Search..." />
        </div>
        <div className="col-md-4">
          <div className="linksAreaHeader">
            <LinkHeader link="" icon="facebook.png" />
            <LinkHeader link="https://github.com/JoaoNahid" icon="github.png" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
