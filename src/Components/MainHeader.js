import React from 'react';
import Header1 from './Header1';
import Header2 from './Header2';
import "./MainHeader.css"

function MainHeader() {
  return (
    <div className="fixed-top-headers">
      <Header1 />
      <Header2 />
    </div>
  );
}

export default MainHeader;
