import React from 'react';
import { SideBar } from './SideBar';
// import { NothingSelected } from './NothingSelected';

export const JournalScreen = () => {
  return (
    <div className='journal__main-content'>
      <SideBar />

      <main>{/* <NothingSelected /> */}</main>
    </div>
  );
};
