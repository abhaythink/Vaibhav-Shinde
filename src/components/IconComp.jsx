import { AddReaction } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import React from 'react'

const IconComp = () => {
  return (
    <div >
        <IconButton onClick={()=>alert('Iocon BTN')}>
            <AddReaction color='secondary'/>
        </IconButton>
    </div>

  )
}

export default IconComp