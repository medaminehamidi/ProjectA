import { Typography } from '@mui/material'
import { makeStyles } from '@material-ui/core'
import style from './style'
import EventOutlinedIcon from '@material-ui/icons/EventOutlined'
import AccessTimeIcon from '@material-ui/icons/AccessTime'

const useStyle = makeStyles(style)
export default () => {
  const { schedualContainer, eventDuration, eventSubDuration, iconContainer, eventDate } = useStyle()
  return (
    <div className={schedualContainer}>
      <div className={eventDuration}>
        <div className={eventSubDuration}>
          <div className={iconContainer}>
            <EventOutlinedIcon />
          </div>
          <Typography>10:25 am - 1:30 pm</Typography>
        </div>
        <Typography color='#929eb9'>30 min</Typography>
      </div>
      <div className={eventDate}>
        <div className={iconContainer}>
          <AccessTimeIcon />
        </div>
        <Typography>Wed, Oct 15, 2023</Typography>
      </div>
    </div>
  )
}
