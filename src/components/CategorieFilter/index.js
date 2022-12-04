import { makeStyles } from '@material-ui/core'
import { Checkbox, FormControlLabel, InputAdornment, TextField, Typography } from '@mui/material'
import style from './style'
import SearchIcon from '@material-ui/icons/Search'

const useStyle = makeStyles(style)
export default () => {
  const { filterContainer, titleStyle, categoriesContainer, searchInputStyle } = useStyle()
  return (
    <div className={filterContainer}>
      <Typography className={titleStyle}>
        Categories
      </Typography>
      <TextField
        label='Search...'
        className={searchInputStyle}
        InputProps={{
          startAdornment: <InputAdornment position='start'><SearchIcon /></InputAdornment>
        }}
      />
      <div className={categoriesContainer}>
        <FormControlLabel
          control={
            <Checkbox
              style={{
                color: '#6464f7'
              }}
              indeterminate
            />
          }
          label='Select all'
        />
        <FormControlLabel
          control={
            <Checkbox
              color='warning'
            />
          }
          label='Publicity'
        />
        <FormControlLabel
          control={
            <Checkbox
              color='warning'
            />
          }
          label='Technology'
        />
        <FormControlLabel
          control={
            <Checkbox
              color='warning'
            />
          }
          label='Finance'
        />
      </div>
    </div>
  )
}
