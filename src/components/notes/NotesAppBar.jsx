import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startSaveNote, startUploading } from '../../actions/notes';

export const NotesAppBar = () => {
  const dispatch = useDispatch();
  const { active } = useSelector((state) => state.notes);

  const handleSaveNote = () => {
    dispatch(startSaveNote(active));
  };

  const handleUploadPicture = () => {
    document.querySelector('#fileNote').click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      dispatch(startUploading(file));
    }
  };

  return (
    <div className='notes__appbar'>
      <span>06 de mayo del 1999</span>

      <input
        id='fileNote'
        type='file'
        name='file'
        style={{ display: 'none' }}
        onChange={handleFileChange}
      />

      <div>
        <button className='btn' onClick={handleUploadPicture}>
          Picture
        </button>

        <button className='btn' onClick={handleSaveNote}>
          Save
        </button>
      </div>
    </div>
  );
};
