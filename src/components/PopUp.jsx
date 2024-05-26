import React from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { MyComponent } from './ReactPdfEditor';



const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    height : '90vh',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };



const PopUp = () => {

  // pop-up
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  // pop-up


  return (
    <>
    <div>
      <Button onClick={handleOpen}>Sign Contract</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            1Act-Driving-School Contract sign
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <MyComponent />
          </Typography>
        </Box>
      </Modal>
    </div>
    </>
  )
}

export default PopUp