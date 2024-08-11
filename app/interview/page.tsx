import React from 'react';

import Content from './components/content';
import SideBar from './components/side-bar';

export default function Interview() {
  return (
    <div className="md:flex">
      <SideBar></SideBar>
      <Content></Content>
    </div>
  );
}
