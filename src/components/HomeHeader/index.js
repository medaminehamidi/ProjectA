import { Badge, makeStyles } from '@material-ui/core'
import { Avatar, Typography } from '@mui/material'
import { atlImage } from 'helpers'
import style from './style'
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined'

const useStyle = makeStyles(style)

export default () => {
  const { headerContainer, profileChipContainer, textStyle, avatarStyle, containerClass, dividerStyle } = useStyle()
  return (
    <>
      <div className={headerContainer}>
        <Typography className={textStyle} variant='h4' component='p'>
          Welcome Back Deku
        </Typography>
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
