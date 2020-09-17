import React from 'react';

export const JournalEntry = () => {
  return (
    <div className='journal__entry pointer'>
      <div
        className='journal__entry-picture'
        style={{
          backgroundSize: 'cover',
          backgroundImage:
            'url(https://i.pinimg.com/736x/3a/0f/50/3a0f50f3f931b41900e5e628555f5e4f.jpg)',
        }}
      ></div>

      <div className='journal__entry-body'>
        <p className='journal__entry-title'>New day</p>
        <p className='journal__entry-content'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        </p>
      </div>

      <div className='journal__entry-date-box'>
        <span>Monday</span>
        <h4>28</h4>
      </div>
    </div>
  );
};
