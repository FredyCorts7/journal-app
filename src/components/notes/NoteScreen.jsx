import React from 'react';
import { NotesAppBar } from './NotesAppBar';

export const NoteScreen = () => {
  return (
    <div className='notes__main-content'>
      <NotesAppBar />

      <div className='notes__content'>
        <input
          type='text'
          placeholder='Write the title ...'
          className='notes__title-input'
        />
      </div>

      <textarea
        placeholder='What happen today'
        className='notes__textarea'
      ></textarea>

      <div className='notes__image'>
        <img
          src='https://i.pinimg.com/736x/3a/0f/50/3a0f50f3f931b41900e5e628555f5e4f.jpg'
          alt='girl'
        />
      </div>
    </div>
  );
};
