import { Typography, AvatarGroup, Avatar } from '@mui/material'
import { makeStyles } from '@material-ui/core'
import style from './style'
import Schedule from './Schedule'
import EventDetails from './EventDetails'
import { atlImage } from 'helpers'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward'

const useStyle = makeStyles(style)
export default () => {
  const { actionsContainer, consultantContainer, avatarStyle, profileContainer, avatarGroupContainer, seeMoreStyle, iconContainer, extraDetailsContainer } = useStyle()
  return (
    <div className={actionsContainer}>
      <EventDetails />
      <Schedule />
      <div className={consultantContainer}>
        <Typography gutterBottom color='#929eb9'>Consultant</Typography>
        <div className={profileContainer}>
          <Avatar className={avatarStyle} alt='Remy Sharp' src={atlImage} />
          <div>
            <Typography variant='subtitle1' component='p'>
              Yuri
            </Typography>
            <Typography color='#929eb9'>Modern Software Architect</Typography>
          </div>
        </div>
        <Typography gutterBottom color='#929eb9'>Participants</Typography>
        <div className={avatarGroupContainer}>
          <AvatarGroup spacing='small' max={4}>
            <Avatar alt='Remy Sharp' src={atlImage} />
            <Avatar alt='Travis Howard' src={atlImage} />
            <Avatar alt='Cindy Baker' src={atlImage} />
            <Avatar alt='Agnes Walker' src={atlImage} />
          </AvatarGroup>
          <div className={seeMoreStyle}>
            <Typography fontSize='14px' color='#6464f7'>See all</Typography>
            <div className={iconContainer}>
              <ArrowForwardIcon fontSize='small' />
            </div>
          </div>
        </div>
        <div className={extraDetailsContainer}>
          <Typography color='#929eb9'>Company</Typography>
          <Typography gutterBottom color='#6464f7'>Alphard Tech</Typography>
          <Typography color='#929eb9'>Service</Typography>
          <Typography gutterBottom>E-Learning</Typography>
          <Typography color='#929eb9'>Timezone</Typography>
          <Typography gutterBottom>Paris, France (GMT 0:00)</Typography>
        </div>
      </div>
    </div>
  )
}
