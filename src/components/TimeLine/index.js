import { Typography } from '@mui/material'
import { makeStyles } from '@material-ui/core'
import style from './style'

const useStyle = makeStyles(style)
export default () => {
  const { eventsContainer, eventStyle, dateAndTimeStyle, durrationStyle, header, dateContainer } = useStyle()
  return (
    <div className={eventsContainer}>
      <div className={header}>
        <div className={dateContainer}>
          <Typography>
            11 Oct 2022
          </Typography>
        </div>
      </div>
      <div className={eventStyle}>
        <Typography className={dateAndTimeStyle}>
          9:30 am
        </Typography>
        <Typography className={durrationStyle}>
          1h 30 min
        </Typography>

        <Typography className={durrationStyle}>
          growing data sciience
        </Typography>
      </div>
    </div>
  )
}
