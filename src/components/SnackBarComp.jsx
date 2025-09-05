import { Alert, Button, Snackbar } from '@mui/material'
import React, { useState } from 'react'

const SnackBarComp = () => {
    const [open,setOpen]=useState(false);
  return (
    <div>
        <Snackbar open={open} autoHideDuration={2000}>
        <Alert severity='success'>This is Alreat in snack box</Alert>
        </Snackbar>

        <Button onClick={()=>setOpen(true)}>Click me</Button>
    </div>
  )
}

export default SnackBarComp