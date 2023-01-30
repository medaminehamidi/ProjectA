import { Typography } from '@mui/material'
import { makeStyles } from '@material-ui/core'
import style from './style'
import WhatshotIcon from '@material-ui/icons/Whatshot'

const useStyle = makeStyles(style)
export default () => {
  const { eventDetailsContainer, iconContainer, tagStyle, priceStyle } = useStyle()
  return (

    <div className={eventDetailsContainer}>
      <div className={tagStyle}>
        <Typography fontSize='14px'>Schedued</Typography>
      </div>
      <Typography> Modern Software Architecture</Typography>
      <div className={iconContainer}>
        <WhatshotIcon fontSize='small' />
        <Typography fontSize='14px'>Public</Typography>
      </div>
      <div className={priceStyle}>
        <Typography color='#929eb9'>Price</Typography>
        <Typography>30.00 $</Typography>
      </div>
    </div>
  )
}
