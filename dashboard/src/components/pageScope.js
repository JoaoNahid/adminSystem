import React from 'react';

export default function Page(props) {
  return (
    <div className="bgPagina">
      <div className="pageTitle">
        <h1>{props.title}</h1>
        <p>{props.subtitle}</p>
      </div>
        {props.children}
    </div>
  );
}