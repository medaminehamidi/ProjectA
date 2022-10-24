import { Container, makeStyles } from '@material-ui/core'
import style from './style'
import React from 'react'
import NavBar from 'components/NavBar'

const useStyle = makeStyles(style)

export default ({ children }) => {
  const { containerClass, root } = useStyle()
  return (
    <>
      <Container className={root}>
        <NavBar />
        <div className={containerClass}>
          {children}
        </div>
      </Container>
    </>
  )
}
