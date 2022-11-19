import { Typography } from '@mui/material'
import { makeStyles } from '@material-ui/core'
import style from './style'
import EventOutlinedIcon from '@material-ui/icons/EventOutlined'

const useStyle = makeStyles(style)
export default () => {
  const { eventsContainer, eventStyle, eventContentStyle, divider, timeContainer, eventsSubContainer, dateAndTimeStyle, durrationStyle, header, dateContainer, dateTextStyle, eventStyle2, divider2 } = useStyle()
  return (
    <div className={eventsContainer}>
      <div className={header}>
        <div className={dateContainer}>
          <EventOutlinedIcon />
          <Typography className={dateTextStyle}>
            Oct 11,2022
          </Typography>
        </div>
      </div>

      <div className={eventsSubContainer}>
        <div className={eventStyle}>
          <div className={divider} />
          <div className={eventContentStyle}>
            <div className={timeContainer}>
              <Typography className={dateAndTimeStyle}>
                9:30 am
              </Typography>
              <Typography className={durrationStyle}>
                1h 30 min
              </Typography>
            </div>
            <Typography className={durrationStyle}>
              Modern Software Architecture: Domain Models, CQRS, and Event Sourcing
            </Typography>
          </div>
        </div>

        <div className={eventStyle2}>
          <div className={divider2} />
          <div className={eventContentStyle}>
            <div className={timeContainer}>
              <Typography className={dateAndTimeStyle}>
                11:45 am
              </Typography>
              <Typography className={durrationStyle}>
                3h 30 min
              </Typography>
            </div>
            <Typography className={durrationStyle}>
              Clean Architecture: Patterns, Practices, and Principles
            </Typography>
          </div>
        </div>
      </div>
    </div>
  )
}
