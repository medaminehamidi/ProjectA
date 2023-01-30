import { Typography } from '@mui/material'
import { makeStyles } from '@material-ui/core'
import style from './style'

const useStyle = makeStyles(style)
export default ({ component, label, color, setIsActive, isActive }) => {
  const active = isActive === color
  const { CatalogContainer, iconContainer, textStyle } = useStyle({ color, active })
  const Component = component
  return (
    <div onClick={() => setIsActive(color)}>
      <div className={CatalogContainer}>
        <div className={iconContainer}>
          <Component />
        </div>
        <Typography className={textStyle}>{label}</Typography>
      </div>
    </div>
  )
}
