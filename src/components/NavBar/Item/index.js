import React from 'react'
import { makeStyles, Slide } from '@material-ui/core'
import style from './style'
import { Tooltip } from '@mui/material'

const useStyle = makeStyles(style)

export default ({ children, active, onClick, timeout, title }) => {
  const { containerClass, toolTip } = useStyle({ active })
  return (
    <Slide direction='right' in mountOnEnter unmountOnExit timeout={timeout}>
      <Tooltip classes={{ popper: toolTip }} title={title} placement='right'>
        <div className={containerClass} onClick={onClick}>
          {children}
        </div>
      </Tooltip>
    </Slide>
  )
}
