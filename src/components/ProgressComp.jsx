import { CircularProgress, LinearProgress } from '@mui/material'
import React from 'react'

const ProgressComp = () => {
  return (
    <div>
        <CircularProgress value={75}></CircularProgress>
        <LinearProgress></LinearProgress>
    </div>
  )
}

export default ProgressComp;