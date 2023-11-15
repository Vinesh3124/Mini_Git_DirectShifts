import React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal';
import './Modal.scss'

export default function CustomModal({children, open, handleClose}) {
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {   
            timeout: 500,
          },
        }}
      >
        <div className='modal-container'>{children}</div>
      </Modal>
    </div>
  );
}