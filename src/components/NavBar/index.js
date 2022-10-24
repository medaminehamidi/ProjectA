import React from 'react'
import { Divider, makeStyles } from '@material-ui/core'
import style from './style'
import Item from './Item'
import InsertChartOutlinedTwoToneIcon from '@material-ui/icons/InsertChartOutlinedTwoTone'
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined'
import DashboardOutlinedIcon from '@material-ui/icons/DashboardOutlined'
import { useDispatch } from 'react-redux'
import { push } from 'connected-react-router'
import { HomePath, ProfilePath, CataloguePath } from 'routes'
import { useLocation } from 'react-router-dom'

const useStyle = makeStyles(style)

export default () => {
  const { containerClass, container, divider } = useStyle()
  const { pathname } = useLocation()
  const dispatch = useDispatch()
  return (
    <div className={container}>
      <div className={containerClass}>
        <Item title='Dashboard' timeout={200} active={pathname === HomePath} onClick={() => dispatch(push(HomePath))}>
          <InsertChartOutlinedTwoToneIcon />
        </Item>
        <Item title='Catalogue' timeout={400} active={pathname === CataloguePath} onClick={() => dispatch(push(CataloguePath))}>
          <DashboardOutlinedIcon />
        </Item>
        <Item title='Profile' timeout={400} active={pathname === ProfilePath} onClick={() => dispatch(push(ProfilePath))}>
          <PersonOutlineOutlinedIcon />
        </Item>
      </div>
      <Divider light orientation='vertical' flexItem className={divider} />
    </div>
  )
}
