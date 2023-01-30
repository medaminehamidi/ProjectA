import DatePicker from '../DatePicker'
import { makeStyles } from '@material-ui/core'
import { Typography } from '@mui/material'
import style from './style'

const useStyle = makeStyles(style)
export default () => {
  const { datePickerContainer, textStyle } = useStyle()
  return (
    <div className={datePickerContainer}>
      <Typography className={textStyle} variant='h4' component='p'>
        Availability
      </Typography>
      <DatePicker />
    </div>
  )
}
