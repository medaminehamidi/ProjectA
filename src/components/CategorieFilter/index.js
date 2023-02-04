import { makeStyles } from '@material-ui/core'
import { InputAdornment, TextField, Typography } from '@mui/material'
import style from './style'
import SearchIcon from '@material-ui/icons/Search'
import { categories } from '../../helpers'
import Category from '../CategoryList/Category'
import { useState } from 'react'

const useStyle = makeStyles(style)
export default () => {
  const [isActive, setIsActive] = useState(categories[0].color)
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
        <div>
          {categories.map((item, key) => <Category isActive={isActive} setIsActive={setIsActive} key={key} component={item.icon} color={item.color} label={item.label} />)}
        </div>
      </div>
    </div>
  )
}
