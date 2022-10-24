import DatePicker from '../DatePicker'
import { makeStyles } from '@material-ui/core'
import style from './style'

const useStyle = makeStyles(style)
export default () => {
  const { datePickerContainer } = useStyle()
  return (
    <div className={datePickerContainer}>
      <DatePicker />
    </div>
  )
}
