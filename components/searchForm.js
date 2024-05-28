import * as React from "react"
import { Dialog, Transition } from "@headlessui/react"
import { useState, Fragment } from "react"
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Typography } from "@mui/material"
import Modal from "@mui/material/Modal"
import Search from "./search"
import SearchIcon from "./searchIcon"

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function SearchForm() {
  const [isOpen, setIsOpen] = useState(false)
  const openModal = () => setIsOpen(true)
  const closeModal = () => setIsOpen(false)

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <div>
        <button onClick={handleOpen}>Open modal</button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description">

          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              記事を検索
            </Typography>

            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              hogehogehoge
            </Typography>

            <Typography>
              <Search />
            </Typography>

          </Box>
        </Modal>
      </div>
    </>
  )
}
