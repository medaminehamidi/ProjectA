import { Badge, makeStyles } from '@material-ui/core'
import { Avatar, Typography, TextField, InputAdornment } from '@mui/material'
import { atlImage } from 'helpers'
import style from './style'
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined'
import SearchIcon from '@material-ui/icons/Search'

const useStyle = makeStyles(style)

export default ({ title }) => {
  const { headerContainer, profileChipContainer, textStyle, avatarStyle, containerClass, dividerStyle, searchInputStyle } = useStyle()
  return (
    <>
      <div className={headerContainer}>
        <Typography className={textStyle} variant='h4' component='p'>
          {title || 'Welcome Back Deku'}
        </Typography>
        {title && (
          <TextField
            label='Search...'
            className={searchInputStyle}
            InputProps={{
              endAdornment: <InputAdornment position='end'><SearchIcon /></InputAdornment>
            }}
          />)}
        <div className={profileChipContainer}>
          <div className={containerClass}>
            <Badge overlap='rectangular' color='secondary' variant='dot'>
              <NotificationsNoneOutlinedIcon />
            </Badge>
          </div>
          <Avatar className={avatarStyle} alt='Remy Sharp' src={atlImage} />
          <Typography className={textStyle} variant='subtitle1' component='p'>
            Midoria Deku
          </Typography>
        </div>
      </div>
      <div className={dividerStyle} />
    </>
  )
}
