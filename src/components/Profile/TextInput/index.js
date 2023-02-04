import { makeStyles } from '@material-ui/core'
import { Typography } from '@mui/material'
import style from './style'
import { textColorMap } from '../../../helpers'

const useStyle = makeStyles(style)

export default (props) => {
  const { textInputContainer, textInputStyle, labelStyle } = useStyle(props)
  return (
    <div className={textInputContainer}>
      {
        props.label &&
        (
          <Typography
            className={labelStyle}
            color={textColorMap[props.status]}
            variant='extraSmallText'
            fontSize={13}
            gutterBottom
            {...props.typography}
          >{props.label}
          </Typography>
        )
      }
      <input
        readOnly={props.readOnly}
        disabled={props.disabled}
        value={props.value}
        id={props.id}
        name={props.name}
        className={textInputStyle}
        type={props.type || 'text'}
        placeholder={props.placeholder}
        onChange={props.handleChange}
        onBlur={props.handleBlur}
        onFocus={props.onFocus}
        onKeyDown={props.onKeyDown}
        onKeyUp={props.onKeyUp}
        onClick={props.onClick}
        data-test={props.dataTest}
      />
    </div>
  )
}
